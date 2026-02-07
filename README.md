# ⛸️ Figure Skating Training Planner

An AI-powered web application that generates personalized training plans for figure skaters using Claude AI.

## 🌟 Features

- **Smart Greeting** - Changes based on time of day (Good Morning/Afternoon/Evening)
- **Comprehensive Profiling** - Capture skater type, test level, current skills
- **Customizable Training** - Select focus areas, time, intensity, and equipment
- **Readiness Assessment** - Factor in soreness, energy, and recovery needs
- **AI-Generated Plans** - Personalized training sessions with detailed exercises
- **Interactive Chat** - Ask questions and refine your plan
- **Mobile Responsive** - Works perfectly on phones and computers

## 🚀 Live Demo

[View Live App](https://your-app-url.vercel.app)

## 📸 Screenshots

![Training Planner Interface](screenshots/main-interface.png)
*Main interface with comprehensive training inputs*

![Generated Training Plan](screenshots/training-plan.png)
*AI-generated training plan with detailed exercises*

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **AI:** Anthropic Claude 3.5 Sonnet
- **Deployment:** Vercel
- **Language:** JavaScript/React

## 📋 Prerequisites

- Node.js 18+ installed
- Anthropic Claude API key ([Get one here](https://console.anthropic.com))

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/fs-training-planner.git
cd fs-training-planner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
ANTHROPIC_API_KEY=your-api-key-here
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Mobile Testing

To test on your phone:

1. Find your computer's IP address (`ipconfig` on Windows)
2. Make sure your phone and computer are on the same WiFi
3. Visit `http://YOUR-IP-ADDRESS:3000` on your phone

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variable: `ANTHROPIC_API_KEY`
5. Deploy!

Your app will be live at: `https://your-app.vercel.app`

## 📖 Usage Guide

### Filling Out the Form

1. **Skater Profile**
   - Select Adult or Youth
   - Choose your test level passed

2. **Current Skills**
   - Select your current jump level
   - Select your current spin level
   - When between levels, choose the lower one

3. **Training Focus**
   - Check the areas you want to work on
   - Multiple selections allowed

4. **Time & Effort**
   - Drag slider for available training time (15-180 minutes)
   - Select intensity level
   - Choose time of day

5. **Training Mode**
   - Off-ice, On-ice, or Combined

6. **Equipment**
   - Check available equipment
   - Add custom equipment in text field

7. **Readiness Check**
   - Select current physical/mental state
   - If injured or in pain, specify affected area

8. **Generate Plan**
   - Click "Generate Training Plan"
   - Wait 5-10 seconds for AI to create your plan

### Using the Chat

After generating a plan:
- Ask questions like "Can you make this easier?"
- Request modifications: "Add more stretching"
- Get explanations: "Why this exercise?"

## 🎯 Training Plan Output

Each plan includes:
- **Time** - Duration for each exercise
- **Exercise** - Name of the activity
- **Description** - Clear instructions
- **Equipment** - Required items
- **Notes** - Safety tips and modifications

Plus an encouraging message to motivate your training!

## 🔒 Security

- Never commit `.env.local` to GitHub
- API keys are stored securely in environment variables
- `.gitignore` prevents accidental exposure

## 🛠️ Customization

### Change Colors

Edit `app/page.js` and replace:
- `bg-blue-600` with your preferred color
- `text-blue-900` for text colors

### Add More Test Levels

In `app/page.js`, add options to the test level dropdown.

### Modify Time Range

Adjust the slider in `app/page.js`:
```javascript
min="15"    // minimum minutes
max="180"   // maximum minutes
step="15"   // increment
```

## 🐛 Troubleshooting

### "Module not found" errors
```bash
npm install
```

### "API Error" when generating plan
- Check `.env.local` exists
- Verify API key is correct
- Ensure you have Claude API credits
- Restart dev server

### Port 3000 already in use
```bash
npx kill-port 3000
npm run dev
```

### Changes don't appear
- Save all files (Ctrl+S)
- Refresh browser (Ctrl+R)
- Restart dev server if needed

## 📁 Project Structure

```
fs-training-planner/
├── app/
│   ├── api/
│   │   └── claude/
│   │       └── route.js       # Claude API handler
│   ├── page.js               # Main UI
│   ├── layout.js             # App layout
│   └── globals.css           # Global styles
├── public/                   # Static files
├── .env.local               # Environment variables (not in git)
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
└── README.md              # This file
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- AI powered by [Anthropic Claude](https://www.anthropic.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

If you encounter issues:
1. Check the Troubleshooting section above
2. Review error messages in the browser console (F12)
3. Ensure all dependencies are installed
4. Verify your API key is valid

## 🎯 Future Enhancements

- [ ] Save training plans to local storage
- [ ] Export plans to PDF
- [ ] Progress tracking
- [ ] Multiple skater profiles
- [ ] Training history
- [ ] Video exercise demonstrations

---

**Made with ❤️ for figure skaters**

⛸️ Happy Training! ⛸️
