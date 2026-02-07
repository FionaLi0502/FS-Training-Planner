import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ✅ Chatbox behavior (short, human, non-robotic)
const CHAT_SYSTEM_PROMPT = `
You are a friendly, practical figure skating coach.

Goal: Help the user improve safely with clear, actionable advice.

Style rules (very important):
- Do NOT sound robotic or follow a fixed template.
- Adapt format naturally:
  - Simple question → 2–3 short paragraphs, concise.
  - Technical question → short paragraphs + a few bullets ONLY if helpful.
  - Emotional/frustrated → empathy first, then 1–2 steps.
- Keep it easy to read: short sentences, line breaks, no giant paragraphs.
- Prefer the top 1–3 most important points; don’t overload.
- Tone: calm, easy-going, supportive (like a real coach).
- If asking a follow-up, ask ONE short question only when it helps.

Safety:
- If user mentions pain/injury/dizziness: suggest lowering intensity, taking breaks, and consider a coach/medical professional if severe or persistent.
`.trim();

export async function POST(request) {
  try {
    const body = await request.json();
    const { formData, conversationHistory } = body;

    const isChat = conversationHistory && conversationHistory.length > 0;

    let prompt = '';

    if (isChat) {
      // Chat mode: we respond to the user's last message (conversationHistory already contains it)
      prompt = conversationHistory[conversationHistory.length - 1]?.content || '';
    } else {
      // Plan mode: build the structured prompt that forces JSON output
      const readinessText =
        formData.readiness && formData.readiness.length > 0
          ? formData.readiness.map((r) => `- ${r}`).join('\n')
          : '- Feeling good';

      const affectedAreaText = formData.affectedArea
        ? `Affected Area: ${formData.affectedArea}`
        : '';

      prompt = `You are a professional figure skating coach. Create a personalized training plan based on the following information:

Skater Profile:
- Type: ${formData.skaterType || 'Not specified'}
- Test Level: ${formData.testLevel || 'Not specified'}

Current Skills:
- Jumps: ${formData.jumps || 'Not specified'}
- Spins: ${formData.spins || 'Not specified'}

Training Focus: ${
        formData.trainingFocus && formData.trainingFocus.length > 0
          ? formData.trainingFocus.join(', ')
          : 'General improvement'
      }

Time & Effort:
- Available Time: ${formData.availableTime || 60} minutes
- Intensity: ${formData.intensity || 'Medium'}
- Time of Day: ${formData.timeOfDay || 'Not specified'}

Training Mode: ${formData.trainingMode || 'Combined'}

Equipment Available: ${
        formData.equipment && formData.equipment.length > 0
          ? formData.equipment.join(', ')
          : 'None specified'
      }
${formData.otherEquipment ? `Other Equipment: ${formData.otherEquipment}` : ''}

Readiness Check:
${readinessText}
${affectedAreaText}

Please provide a training plan in the following JSON format:
{
  "planRows": [
    {
      "time": "0-10 min",
      "exercise": "Exercise name",
      "description": "Clear description of what to do",
      "equipment": "Equipment needed or None",
      "notes": "Safety tips or modifications"
    }
  ],
  "encouragement": "A brief encouraging message (1-2 sentences)"
}

Important:
- Create 2-8 exercises appropriate for the ${formData.availableTime || 60} minutes available
- Consider their skill level
- If they mentioned soreness or pain, include modifications
- Structure: warm up, main work (NO cool down section)
- Every NON-warmup activity must be at least 15 minutes long
- Warmup can be shorter (5–10 minutes)
- Do NOT include cool down, stretching, or “cool down” items at the end
- Be specific and actionable
- Return ONLY valid JSON, no other text`;
    }

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,

      // ✅ Only apply system prompt for chat mode
      ...(isChat ? { system: CHAT_SYSTEM_PROMPT } : {}),

      messages: isChat
        ? conversationHistory
        : [{ role: 'user', content: prompt }],
    });

    const responseText = message.content?.[0]?.text || '';

    // Plan mode: parse JSON and return it
    if (!isChat) {
      try {
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('No JSON found in response');

        const parsed = JSON.parse(jsonMatch[0]);
        return NextResponse.json(parsed);
      } catch (e) {
        console.error('Failed to parse JSON:', e);
        return NextResponse.json(
          { error: 'Failed to generate plan format. Please try again.' },
          { status: 500 }
        );
      }
    }

    // Chat mode: return message + updated history
    return NextResponse.json({
      message: responseText,
      conversationHistory: [
        ...(conversationHistory || []),
        { role: 'assistant', content: responseText },
      ],
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: `Failed to generate plan: ${error.message}` },
      { status: 500 }
    );
  }
}
