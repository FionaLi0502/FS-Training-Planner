# 🎯 Figure Skating Training Planner - Complete Setup Guide
## Project Location: D:\AI Project\FS Training

---

## 📦 WHAT YOU'RE GETTING

All files are ready to download and use immediately. No complex setup!

### Files Included:
1. ✅ `package.json` - Project dependencies
2. ✅ `next.config.js` - Next.js configuration
3. ✅ `tailwind.config.js` - Tailwind CSS settings
4. ✅ `postcss.config.js` - CSS processing
5. ✅ `.gitignore` - Git ignore file
6. ✅ `.env.local.template` - API key template
7. ✅ `page.js` - Main UI (frontend)
8. ✅ `layout.js` - App layout
9. ✅ `globals.css` - Global styles
10. ✅ `route.js` - Claude API handler (backend)
11. ✅ `README.md` - Project documentation

---

## 🚀 SUPER QUICK SETUP (10 MINUTES)

### STEP 1: Create Your Project Folder (1 minute)

1. **Open File Explorer** (Windows Key + E)
2. **Navigate to** `D:\AI Project\`
3. **Create a new folder** called `FS Training`
4. **Your path is now:** `D:\AI Project\FS Training\`

---

### STEP 2: Download All Files (2 minutes)

Download these files from my responses and save them to `D:\AI Project\FS Training\`:

**Root folder files:**
- `package.json`
- `next.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `.gitignore`
- `.env.local.template`
- `README.md`

**Create this folder structure:**

```
D:\AI Project\FS Training\
├── app\
│   ├── api\
│   │   └── claude\
│   │       └── route.js
│   ├── page.js
│   ├── layout.js
│   └── globals.css
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── .env.local.template
└── README.md
```

---

### STEP 3: Create Folders and Place Files (3 minutes)

**In VS Code:**

1. **Open VS Code**
2. **Click** File → Open Folder
3. **Select** `D:\AI Project\FS Training`
4. **Click** "Select Folder"

**Create folders:**

1. Right-click in left panel → **New Folder** → Name it `app`
2. Right-click on `app` → **New Folder** → Name it `api`
3. Right-click on `api` → **New Folder** → Name it `claude`

**Place the downloaded files:**

- Put `route.js` inside `app\api\claude\`
- Put `page.js` inside `app\`
- Put `layout.js` inside `app\`
- Put `globals.css` inside `app\`
- Put all other files in the root (`D:\AI Project\FS Training\`)

---

### STEP 4: Add Your Claude API Key (1 minute)

1. **Rename** `.env.local.template` to `.env.local`
2. **Open** `.env.local` in VS Code
3. **Replace** `your-api-key-here` with your actual Claude API key
4. **Save** (Ctrl + S)

Your `.env.local` should look like:
```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
```

---

### STEP 5: Install Dependencies (2 minutes)

**Open Terminal in VS Code:**
- Press **Ctrl + `** (backtick)
- Or click **Terminal** → **New Terminal**

**Run these commands one by one:**

```bash
cd "D:\AI Project\FS Training"
```

```bash
npm install
```

Wait 1-2 minutes while it installs everything.

---

### STEP 6: Run Your App! (1 minute)

**In the terminal, type:**

```bash
npm run dev
```

**Wait a few seconds**, then you'll see:

```
✓ Ready in 2.5s
○ Compiling / ...
✓ Compiled / in 3.2s
```

**Open your browser and go to:**
```
http://localhost:3000
```

**🎉 Your app is running!**

---

## 📱 TEST ON YOUR PHONE

1. **Find your computer's IP address:**
   - Open Command Prompt
   - Type: `ipconfig`
   - Look for "IPv4 Address": `192.168.x.x`

2. **On your phone** (same WiFi as computer):
   - Open browser
   - Go to: `http://YOUR-IP-ADDRESS:3000`
   - Example: `http://192.168.1.100:3000`

3. **App should load on your phone!** 📱

---

## 🐙 PUBLISH TO GITHUB (5 MINUTES)

### STEP 1: Create GitHub Repository

1. **Go to** https://github.com
2. **Click** "+" → "New repository"
3. **Name:** `fs-training-planner`
4. **Description:** "AI-powered figure skating training planner"
5. **Make it Public** (or Private if you prefer)
6. **Don't** check "Initialize with README" (we already have one)
7. **Click** "Create repository"

---

### STEP 2: Push Your Code to GitHub

**In VS Code Terminal, run these commands one at a time:**

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit - Figure Skating Training Planner"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/YOUR-USERNAME/fs-training-planner.git
```

*(Replace YOUR-USERNAME with your actual GitHub username)*

```bash
git push -u origin main
```

**Enter your GitHub credentials if asked.**

✅ **Your code is now on GitHub!**

---

## 🚀 DEPLOY TO VERCEL (FREE HOSTING)

### STEP 1: Sign Up for Vercel

1. **Go to** https://vercel.com
2. **Click** "Sign Up"
3. **Sign up with GitHub** (easiest way)
4. **Authorize** Vercel to access your GitHub

---

### STEP 2: Deploy Your App

1. **Click** "Add New..." → "Project"
2. **Find** your `fs-training-planner` repository
3. **Click** "Import"

**Before clicking Deploy:**

4. **Click** "Environment Variables"
5. **Add variable:**
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Claude API key (paste it)
6. **Click** "Add"
7. **Click** "Deploy"

Wait 1-2 minutes...

---

### STEP 3: Get Your Live URL

After deployment completes:

- You'll see: **"Congratulations! 🎉"**
- Your app URL: `https://fs-training-planner-xxxxx.vercel.app`
- **Click** "Visit" to see your live app
- **Share this URL** with anyone!

**Your app is now live on the internet!** 🌐

---

## 📂 FINAL FOLDER STRUCTURE

After setup, your folder looks like this:

```
D:\AI Project\FS Training\
├── app\
│   ├── api\
│   │   └── claude\
│   │       └── route.js          ← Claude API handler
│   ├── page.js                   ← Main UI
│   ├── layout.js                 ← App wrapper
│   └── globals.css               ← Styles
├── node_modules\                 ← Auto-created (don't touch)
├── .next\                        ← Auto-created (build files)
├── public\                       ← Auto-created (static files)
├── package.json                  ← Dependencies
├── package-lock.json             ← Auto-created
├── next.config.js                ← Next.js config
├── tailwind.config.js            ← Tailwind config
├── postcss.config.js             ← PostCSS config
├── .gitignore                    ← Git ignore
├── .env.local                    ← Your API key (NEVER upload!)
└── README.md                     ← Documentation
```

---

## 🔐 SECURITY CHECKLIST

### ✅ SAFE - These files go to GitHub:
- `package.json`
- `app/page.js`
- `app/layout.js`
- `app/globals.css`
- `app/api/claude/route.js`
- `next.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `.gitignore`
- `README.md`

### ❌ NEVER UPLOAD - These stay local:
- `.env.local` ← Your API key is here!
- `node_modules/`
- `.next/`
- `.env`
- Any file with secrets

**The `.gitignore` file I provided will automatically protect these!**

---

## 🧪 TESTING YOUR APP

### Test the Form:

1. **Fill out each section:**
   - Skater Profile: Select Adult/Youth and test level
   - Current Skills: Choose jump and spin levels
   - Training Focus: Check multiple boxes
   - Time & Effort: Move the slider
   - Training Mode: Click a mode button
   - Equipment: Check some boxes
   - Readiness: Check "Feeling good"

2. **Click "Generate Training Plan"**

3. **Wait 5-10 seconds**

4. **You should see:**
   - A table with exercises
   - Encouragement message
   - Chat box at bottom

### Test the Chat:

1. **After plan generates**, scroll to chat box
2. **Type:** "Can you make this easier?"
3. **Press Enter** or click "Send"
4. **Wait** for response
5. **Chat should work!**

---

## 🐛 COMMON PROBLEMS & FIXES

### Problem: "npm: command not found"

**Fix:**
1. Install Node.js from https://nodejs.org
2. Restart VS Code
3. Try again

---

### Problem: "Module not found: @anthropic-ai/sdk"

**Fix:**
```bash
npm install @anthropic-ai/sdk
```

---

### Problem: "API Error" when generating plan

**Fixes:**
1. Check `.env.local` exists in root folder
2. Check API key has no spaces
3. Check you have Claude API credits at console.anthropic.com
4. Restart dev server:
   ```bash
   # Press Ctrl + C in terminal
   npm run dev
   ```

---

### Problem: "Port 3000 already in use"

**Fix:**
```bash
npx kill-port 3000
npm run dev
```

Or use different port:
```bash
npm run dev -- -p 3001
```
Then visit: `http://localhost:3001`

---

### Problem: Page shows "404 Not Found"

**Fix:**
1. Make sure `app/page.js` exists
2. Make sure you're in the right folder
3. Restart dev server

---

### Problem: Styles don't work (looks ugly)

**Fix:**
1. Check `tailwind.config.js` exists
2. Check `app/globals.css` has Tailwind imports
3. Restart dev server

---

### Problem: Vercel deployment fails

**Fixes:**
1. Check you added `ANTHROPIC_API_KEY` in Vercel environment variables
2. Check GitHub push was successful
3. Check build logs in Vercel dashboard
4. Make sure all files are committed to GitHub

---

## 🎓 HOW TO MAKE CHANGES

### Change Colors:

**Open `app/page.js`, find and replace:**
- `bg-blue-600` → `bg-purple-600` (or any color)
- `text-blue-900` → `text-purple-900`

**Tailwind colors available:**
red, orange, yellow, green, teal, blue, indigo, purple, pink, gray

---

### Add More Test Levels:

**In `app/page.js`, find "Test Level Passed" dropdown, add:**

```javascript
<option value="Juvenile">Juvenile</option>
<option value="Intermediate">Intermediate</option>
<option value="Novice">Novice</option>
```

---

### Change Time Range:

**In `app/page.js`, find the time slider, change:**

```javascript
min="10"    // Change minimum minutes
max="240"   // Change maximum minutes
step="10"   // Change increment
```

---

### Add Equipment:

**In `app/page.js`, find equipment array, add items:**

```javascript
{[
  'Resistance bands',
  'Yoga mat',
  'Foam roller',
  'Balance board',
  'Jump harness',
  'Spinner',
  'Weight vest',        // Add this
  'Ankle weights',      // Add this
  'Theraband',          // Add this
]}
```

---

## 🔄 UPDATE YOUR LIVE APP

After making changes:

1. **Save all files** (Ctrl + S)
2. **Test locally** (`npm run dev`)
3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Updated training options"
   git push
   ```
4. **Vercel auto-deploys** (wait 1-2 minutes)
5. **Refresh your live URL** - changes appear!

---

## 📊 APP FEATURES

### ✅ What Works:

- 📱 **Mobile-responsive** - Works on phone and computer
- 🎨 **Beautiful UI** - Gradient background, clean design
- ⏰ **Smart greeting** - Changes based on time of day
- 📝 **Complete form** - All requirements included
- 🤖 **AI-powered** - Uses Claude for smart training plans
- 💬 **Live chat** - Ask follow-up questions
- 📊 **Table output** - Clear 5-column plan
- 🎯 **Encouragement** - Motivational messages
- 🔄 **Real-time** - Instant plan generation
- 🌐 **Deployed** - Live on the internet

### 🎯 Form Sections:

1. ✅ Greeting (auto changes)
2. ✅ Skater Profile (Adult/Youth, Test Level)
3. ✅ Current Skills (Jumps, Spins, with "Advanced" option)
4. ✅ Training Focus (8 multi-select options)
5. ✅ Time & Effort (15-180 min slider, intensity, time of day)
6. ✅ Training Mode (Off-ice/On-ice/Combined buttons)
7. ✅ Equipment (6 checkboxes + "Other" text field)
8. ✅ Readiness Check (7 options + affected area dropdown)

### 📋 Output Format:

- ✅ 5-column table: Time | Exercise | Description | Equipment | Notes
- ✅ Encouragement text (1-2 sentences)
- ✅ Chat box for follow-ups

---

## 🎉 SUCCESS CHECKLIST

Before you're done, verify:

- [ ] App runs at `localhost:3000`
- [ ] You can fill out the entire form
- [ ] "Generate Plan" button works
- [ ] Plan appears in a table
- [ ] Encouragement message shows
- [ ] Chat box works (can ask questions)
- [ ] App works on your phone (same WiFi)
- [ ] Code is on GitHub
- [ ] App is live on Vercel
- [ ] `.env.local` is NOT on GitHub
- [ ] You have your live URL to share

---

## 🎓 UNDERSTANDING THE CODE

### Frontend (`app/page.js`):
- React hooks (`useState`) store form data
- User fills form → data saved in state
- "Generate Plan" → calls `/api/claude`
- Receives plan → displays in table
- Chat box → sends questions to API
- All runs in the browser

### Backend (`app/api/claude/route.js`):
- Receives form data from frontend
- Builds prompt for Claude AI
- Calls Anthropic API
- Parses JSON response
- Returns plan to frontend
- Runs on the server

### Styling (`app/globals.css` + Tailwind):
- Tailwind utility classes for styling
- Responsive design (works on mobile)
- Gradient backgrounds
- Clean, modern look

---

## 💡 PRO TIPS

### Tip 1: Save Often
- Press **Ctrl + S** after every change
- VS Code shows a dot on unsaved files

### Tip 2: Check Console for Errors
- Press **F12** in browser
- Click "Console" tab
- Red errors show what's wrong

### Tip 3: Read Error Messages
- Terminal errors tell you what's broken
- Usually says which file and line number
- Google the error for solutions

### Tip 4: Test Locally First
- Always test with `npm run dev` before deploying
- Make sure it works on your computer
- Then push to GitHub/Vercel

### Tip 5: Use Git Commits Often
```bash
git add .
git commit -m "Added new feature"
git push
```
- Commit after each feature works
- Easy to undo if something breaks

---

## 📞 GETTING HELP

If stuck:

1. **Check error message** in terminal or browser console
2. **Read the Troubleshooting section** in this guide
3. **Google the error** - someone has solved it before
4. **Check your API key** is correct in `.env.local`
5. **Restart the server** (Ctrl+C, then `npm run dev`)
6. **Check files are in right folders** (see folder structure above)

Remember: Every developer gets errors. It's normal and part of learning! 💪

---

## 🎉 CONGRATULATIONS!

You've built a production-ready web app with:

- ✅ Next.js 14 (App Router)
- ✅ React with hooks
- ✅ Tailwind CSS
- ✅ Claude AI integration
- ✅ API routes
- ✅ Mobile-responsive design
- ✅ Live chat feature
- ✅ Deployed to the internet
- ✅ GitHub repository
- ✅ Professional documentation

**Your app is live and working! Share your URL with the world!** 🌟

---

## 📍 QUICK REFERENCE

### Your Project Location:
```
D:\AI Project\FS Training\
```

### Your Local URL:
```
http://localhost:3000
```

### Your GitHub Repo:
```
https://github.com/YOUR-USERNAME/fs-training-planner
```

### Your Live App:
```
https://fs-training-planner-xxxxx.vercel.app
```

### Start Dev Server:
```bash
cd "D:\AI Project\FS Training"
npm run dev
```

### Deploy Updates:
```bash
git add .
git commit -m "Your update message"
git push
```

---

**You're all set! Happy coding! 🚀⛸️**
