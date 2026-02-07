import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const apiKey = process.env.ANTHROPIC_API_KEY;

console.log('API Key exists:', apiKey ? 'Yes' : 'No');
console.log('API Key starts with sk-ant:', apiKey?.startsWith('sk-ant') ? 'Yes' : 'No');
console.log('API Key length:', apiKey?.length || 0);

const anthropic = new Anthropic({ apiKey });

async function test() {
  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20250219',
      max_tokens: 100,
      messages: [{ role: 'user', content: 'Say hello!' }],
    });
    console.log('✅ API Connection successful!');
    console.log('Response:', message.content[0].text);
  } catch (error) {
    console.log('❌ API Error:', error.message);
  }
}

test();