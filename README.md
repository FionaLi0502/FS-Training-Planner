# ⛸️ Figure Skating Training Planner

An AI-powered web application that generates personalized, safe training plans for figure skaters of all levels. Built with modern web technologies and powered by Claude AI for intelligent, adaptive coaching.

## 🌟 Key Features

### 🎨 **Beautiful Modern UI**
- **Pastel gradient design** with soft rose, sky, and white color scheme
- **Glassmorphism effects** with backdrop blur and subtle shadows
- **Rounded-2xl design language** throughout for a cohesive, friendly look
- **Fully responsive** - Seamlessly adapts from desktop to mobile
- **Touch-optimized** chip buttons and interactive elements
- **Smooth animations** with loading spinner and transitions

### 🤖 **Smart AI Training Plans**
- **Personalized workouts** based on skill level, goals, and physical readiness
- **Safety-first approach** - Adapts to soreness, injuries, and energy levels
- **Progressive structure** - Warm-up → Main work (no cool-down bloat)
- **Context-aware** - Considers time of day, equipment, and training mode
- **JSON-structured output** in easy-to-read table format

### 💬 **Natural Chat Coaching**
- **Human-like responses** - Friendly, practical, non-robotic
- **Adaptive tone** - Empathetic with emotional concerns, technical when needed
- **Conversational follow-ups** - Ask questions, request modifications
- **Safety monitoring** - Flags pain/injury concerns and suggests professional help
- **No giant walls of text** - Short paragraphs, bullets only when helpful

### 📱 **Mobile-First Design**
- **Compact layout** optimized for phone screens
- **Responsive grid** switches between 1-2 columns based on screen size
- **Touch-friendly chips** instead of checkboxes for easy tapping
- **Smooth scrolling** and optimized spacing for thumb navigation
- **Works perfectly on any device** - Phone, tablet, desktop

### ⚡ **Performance & UX**
- **Loading indicator** shows progress during plan generation
- **Real-time validation** prevents errors before submission
- **Instant feedback** for all user interactions
- **Fast load times** with optimized Next.js build

---

## 🎯 What Makes This Different?

**Traditional fitness apps:**
- ❌ Generic, one-size-fits-all plans
- ❌ Ignore how you're feeling today
- ❌ Robotic, templated responses
- ❌ Complicated interfaces

**Our Figure Skating Planner:**
- ✅ Personalized to YOUR skill level and goals
- ✅ Adapts to soreness, fatigue, stress, injury recovery
- ✅ Friendly coach that actually listens
- ✅ Clean, beautiful, easy-to-use interface

---

## 📸 Screenshots

<div align="center">

### Training Planner Interface
<img src="https://github.com/user-attachments/assets/beda3560-6b40-451e-af02-e92de7477ba8" alt="Training Planner Interface" width="800"/>

*Modern pastel UI with comprehensive training inputs*

### Generated Training Plan
<img src="https://github.com/user-attachments/assets/514f38dd-36c4-4091-ba12-cfca4c266ba1" alt="Generated Training Plan" width="800"/>

*AI-generated training plan with safety-conscious exercises*

### Mobile View
<img src="https://private-user-images.githubusercontent.com/196947224/402896158-0b79e518-0a1e-48a7-9869-e1a8c6b3acbb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg5NTczMzIsIm5iZiI6MTczODk1NzAzMiwicGF0aCI6Ii8xOTY5NDcyMjQvNDAyODk2MTU4LTBiNzllNTE4LTBhMWUtNDhhNy05ODY5LWUxYThjNmIzYWNiYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwN1QyMDA1MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NWE2ZjNlNWRlNmMyNGM3Y2ExMmU5M2RmODNhOTQyNjliZTkzNjJhYTk2ZmJlM2Q5ZDM2NTUxMDRiMmQyNTZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SoYs-XpvmLI0QovXPe2GFz2r9ZI-h15QmWPJWbXGqPU" alt="Mobile View" width="400"/>

*Fully responsive mobile interface with touch-optimized controls*

### Chat Interface
<img src="https://github.com/user-attachments/assets/71ae91d9-5a30-4105-8362-3000d001c874" alt="Chat Interface" width="800"/>

*Natural conversation with your AI skating coach*

</div>

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2 (App Router)
- **Styling:** Tailwind CSS 3.4
- **AI:** Anthropic Claude Sonnet 4 (claude-sonnet-4-20250514)
- **Language:** JavaScript/React
- **Deployment:** Vercel (recommended)
- **State Management:** React Hooks (useState)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** ([Download](https://nodejs.org))
- **Anthropic API key** ([Get one](https://console.anthropic.com))
- **Git** (optional, for cloning)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/FionaLi0502/FS-Training-Planner.git
cd FS-Training-Planner

# 2. Install dependencies
npm install

# 3. Create environment file
# Create .env.local in the root directory and add:
ANTHROPIC_API_KEY=your-api-key-here

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📱 Mobile Testing

Test the mobile experience on your phone:

1. **Find your computer's IP address:**
   - Windows: `ipconfig` in Command Prompt
   - Mac/Linux: `ifconfig` in Terminal
   - Look for IPv4 address (e.g., 192.168.1.100)

2. **Connect both devices to the same WiFi**

3. **On your phone, visit:**
   ```
   http://YOUR-IP-ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

4. **Test the touch-optimized interface!**

---

## 🎓 How to Use

### Step 1: Fill Out Your Profile

**Skater Profile**
- Select Adult or Youth
- Choose your highest test level passed

**Current Skills**
- Select your current jump level (Waltz to Doubles+)
- Select your current spin level (Two-foot to Combinations+)
- When between levels, choose the lower one for safety

### Step 2: Set Your Goals

**Training Focus** (select multiple)
- Jumps, Spins, Footwork, Edges
- Flexibility, Strength, Balance, Musicality

### Step 3: Set Your Parameters

**Time & Effort**
- Drag slider: 15-180 minutes available
- Choose intensity: Low / Medium / High
- Select time of day: Morning / Afternoon / Evening

**Training Location**
- Off-ice, On-ice, or Combined

**Equipment** (select all available)
- Resistance bands, Yoga mat, Foam roller
- Balance board, Jump harness, Spinner
- Add custom equipment in text field

### Step 4: Check Your Readiness

**Physical & Mental State:**
- Feeling good ✅
- Minor soreness
- Significant soreness/pain (specify area)
- Not enough rest / poor sleep
- Not enough food / low energy
- High stress / high pressure
- Returning from injury (specify area)

### Step 5: Generate Your Plan

Click **"✨ Generate Training Plan"**

Watch the spinner animation while Claude creates your custom plan (5-10 seconds)

### Step 6: Review & Refine

**Your Plan Includes:**
- **Time** - Duration for each exercise
- **Exercise** - Name and type
- **Description** - Clear step-by-step instructions
- **Equipment** - What you need
- **Notes** - Safety tips and modifications

**Plus:** Encouraging message to motivate your training!

### Step 7: Use the Chat

Ask follow-up questions:
- "Can you make this easier?"
- "Why do you recommend this exercise?"
- "Can we add more flexibility work?"
- "My ankle hurts during this, what should I do?"

Get natural, helpful responses from your AI coach!

---

## 🎨 Design Features

### Color Scheme
- **Primary:** Sky blue gradient (`from-sky-400 to-blue-500`)
- **Background:** Rose → Sky → White gradient
- **Accents:** Pink, Yellow, Purple, Rose for different sections
- **Text:** Slate gray scale for readability

### UI Components
- **Cards:** White with glassmorphism (`backdrop-blur-xl`)
- **Chips:** Rounded-full pill buttons with active states
- **Inputs:** Soft slate backgrounds with sky-blue focus rings
- **Shadows:** Soft, layered shadows for depth
- **Icons:** Emoji badges in colored rounded squares

### Responsive Breakpoints
- **Mobile:** Single column, compact spacing
- **Tablet (md:)** Two columns, expanded spacing
- **Desktop:** Optimized for mouse/keyboard

---

## 🔐 Security Best Practices

### ✅ What's Safe to Share (GitHub)
- `package.json` - Dependencies
- `app/page.js` - Frontend UI
- `app/layout.js` - App layout
- `app/globals.css` - Styles
- `app/api/claude/route.js` - API handler (no secrets)
- `next.config.js`, `tailwind.config.js`, `postcss.config.js`
- `.gitignore` - Prevents accidental exposure
- `README.md` - Documentation

### ❌ Never Upload to GitHub
- `.env.local` - Contains your API key!
- `.env` - Any environment file
- `node_modules/` - Dependencies (reinstall with npm)
- `.next/` - Build files

### 🔒 API Key Security
1. **Always use `.env.local`** for API keys
2. **Never hardcode** keys in source files
3. **Check `.gitignore`** includes `.env*`
4. **Rotate keys** if accidentally exposed
5. **Use Vercel secrets** for production

---

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Figure Skating Training Planner"
git branch -M main
git remote add origin https://github.com/FionaLi0502/FS-Training-Planner.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/in with GitHub
3. Click **"Add New..."** → **"Project"**
4. Import your `fs-training-planner` repository
5. **Before deploying:**
   - Click **"Environment Variables"**
   - Add: `ANTHROPIC_API_KEY` = `your-key-here`
   - Click **"Add"**
6. Click **"Deploy"**

Wait 1-2 minutes for deployment to complete.

### Step 3: Get Your Live URL

After deployment:
- Your app is live at: `https://fs-training-planner.vercel.app`
- Test it on your phone, share with friends!
- Updates automatically deploy when you push to GitHub

---

## 🛠️ Customization Guide

### Change Color Theme

**In `app/page.js`, update the gradient:**

```javascript
// Current: Rose → Sky → White
className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-white"

// Change to: Purple → Blue → White
className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-white"
```

**Button gradient:**
```javascript
// Current: Sky blue
className="bg-gradient-to-r from-sky-400 to-blue-500"

// Change to: Purple
className="bg-gradient-to-r from-purple-400 to-purple-500"
```

### Add New Test Levels

**In `app/page.js`, find the test level dropdown:**

```javascript
<option value="Pre-Juvenile">Pre-Juvenile</option>
<option value="Juvenile">Juvenile</option>
<option value="Intermediate">Intermediate</option>
<option value="Novice">Novice</option>
<option value="Junior">Junior</option>
<option value="Senior">Senior</option>
```

### Modify Time Range

**Find the time slider:**
```javascript
min="10"    // Change minimum (default: 15)
max="240"   // Change maximum (default: 180)
step="10"   // Change increment (default: 15)
```

### Add Training Focus Options

**Find the training focus array:**
```javascript
['Jumps', 'Spins', 'Footwork', 'Edges', 
 'Flexibility', 'Strength', 'Balance', 'Musicality',
 'Artistry', 'Choreography', 'Mental Training'] // Add these!
```

---

## 🐛 Troubleshooting

### "Module not found" errors
```bash
npm install
```

### API generates error
- ✅ Check `.env.local` exists in root folder
- ✅ Verify API key is correct (no spaces)
- ✅ Ensure you have Anthropic API credits
- ✅ Restart dev server: `Ctrl+C` then `npm run dev`

### Port 3000 already in use
```bash
npx kill-port 3000
npm run dev
```

### Styles don't load properly
```bash
# Rebuild Tailwind
npm run dev
# Hard refresh browser: Ctrl + Shift + R
```

### Mobile view not loading
- ✅ Ensure computer and phone on **same WiFi**
- ✅ Check firewall isn't blocking port 3000
- ✅ Use computer's **local IP**, not localhost

### Changes don't appear
- Save all files (Ctrl+S)
- Refresh browser (Ctrl+R)
- If still not working, restart dev server

---

## 📁 Project Structure

```
fs-training-planner/
├── app/
│   ├── api/
│   │   └── claude/
│   │       └── route.js          # API handler with chat system prompt
│   ├── page.js                   # Main UI (pastel design)
│   ├── layout.js                 # App layout wrapper
│   └── globals.css               # Global styles + Tailwind
├── public/                       # Static assets
├── .env.local                    # API key (NEVER commit!)
├── .gitignore                    # Protects secrets
├── package.json                  # Dependencies
├── next.config.js                # Next.js config
├── tailwind.config.js            # Tailwind config
├── postcss.config.js             # PostCSS config
└── README.md                     # This file
```

---

## 🎯 Feature Highlights

### Smart Training Plans
- ✅ 2-8 exercises based on available time
- ✅ Progressive structure (warm-up → main work)
- ✅ No unnecessary cool-down sections
- ✅ Minimum 15 minutes per main activity
- ✅ Considers skill level and goals

### Safety Features
- ✅ Adapts to soreness and pain
- ✅ Modifies for injury recovery
- ✅ Accounts for low energy/poor sleep
- ✅ Provides safety notes for each exercise
- ✅ Chat monitors for serious concerns

### Chat Coaching
- ✅ Short, digestible responses (2-3 paragraphs)
- ✅ Bullets only when truly helpful
- ✅ Empathetic with emotional concerns
- ✅ One question at a time for follow-ups
- ✅ Calm, supportive coaching tone

### Mobile Optimization
- ✅ Touch-optimized chip buttons
- ✅ Responsive grid layouts
- ✅ Optimized font sizes and spacing
- ✅ Smooth scrolling on small screens
- ✅ Works in portrait and landscape

---

## 💡 Tips for Best Results

### Getting Better Plans
1. **Be honest about skill level** - Choose the lower option if uncertain
2. **Update readiness** - Tell the AI how you're really feeling
3. **Select relevant focus areas** - Don't check everything
4. **Specify equipment** - More options = better exercises
5. **Use the chat** - Refine the plan with questions

### Using the Chat Effectively
- Ask specific questions: "Can you explain the crossovers exercise?"
- Request modifications: "Make this lower impact please"
- Share concerns: "This hurts my ankle, alternatives?"
- Get explanations: "Why this order?"

### Mobile Usage
- Use landscape mode for wider view
- Tap chips instead of scrolling through checkboxes
- Pinch to zoom on plan table if needed
- Use "Find on page" to locate specific exercises

---

## 🤝 Contributing

Contributions welcome! Ideas for improvements:

- [ ] Export plans to PDF
- [ ] Save favorite plans (local storage)
- [ ] Multiple skater profiles
- [ ] Training log/history
- [ ] Video demonstrations
- [ ] Progress tracking graphs
- [ ] Nutrition suggestions
- [ ] Competition preparation mode

Feel free to:
- Report bugs (GitHub Issues)
- Suggest features
- Submit pull requests
- Share feedback

---

## 📄 License

MIT License - Free to use for personal or commercial purposes.

---

## 👏 Acknowledgments

- **Built with:** [Next.js](https://nextjs.org/)
- **AI powered by:** [Anthropic Claude](https://www.anthropic.com/)
- **Styled with:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployed on:** [Vercel](https://vercel.com/)

---

## 📞 Support

### Having Issues?

1. **Read this README** (especially Troubleshooting section)
2. **Check browser console** (F12 → Console)
3. **Verify `.env.local`** has correct API key
4. **Check Anthropic console** for API credits
5. **Restart dev server** and try again

### Questions?

- Review the code comments (well-documented!)
- Check Next.js docs for framework questions
- Check Tailwind docs for styling questions
- Check Anthropic docs for API questions

---

## 🎉 You're Ready!

Your Figure Skating Training Planner is:
- ✅ Beautiful & modern
- ✅ Mobile-optimized
- ✅ AI-powered
- ✅ Safe & secure
- ✅ Production-ready

**Start planning smarter training sessions today!** ⛸️✨

---

**Made with ❤️ for figure skaters everywhere**

*Practice smart. Train safe. Skate happy.* 🌟
