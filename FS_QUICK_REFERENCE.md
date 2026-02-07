# 🎯 QUICK REFERENCE CARD
## Figure Skating Training Planner

---

## 📂 FILE PLACEMENT GUIDE

Save downloaded files to: `D:\AI Project\FS Training\`

### Root Folder (`D:\AI Project\FS Training\`):
```
✅ FS-package.json          → Rename to: package.json
✅ FS-next.config.js        → Rename to: next.config.js
✅ FS-tailwind.config.js    → Rename to: tailwind.config.js
✅ FS-postcss.config.js     → Rename to: postcss.config.js
✅ FS-gitignore.txt         → Rename to: .gitignore
✅ FS-env.local.template    → Rename to: .env.local
✅ FS-README.md             → Rename to: README.md
```

### app\ Folder:
```
✅ FS-page.js               → Rename to: page.js
✅ FS-layout.js             → Rename to: layout.js
✅ FS-globals.css           → Rename to: globals.css
```

### app\api\claude\ Folder:
```
✅ FS-route.js              → Rename to: route.js
```

---

## 🗂️ COMPLETE FOLDER STRUCTURE

```
D:\AI Project\FS Training\
│
├── app\
│   ├── api\
│   │   └── claude\
│   │       └── route.js
│   ├── page.js
│   ├── layout.js
│   └── globals.css
│
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── .env.local
└── README.md
```

---

## ⚡ QUICK SETUP (Copy-Paste Commands)

### Step 1: Navigate to folder
```bash
cd "D:\AI Project\FS Training"
```

### Step 2: Install everything
```bash
npm install
```

### Step 3: Add your API key
Open `.env.local` and replace:
```
ANTHROPIC_API_KEY=your-actual-key-here
```

### Step 4: Run the app
```bash
npm run dev
```

### Step 5: Open browser
```
http://localhost:3000
```

---

## 🚀 DEPLOY TO VERCEL (Copy-Paste Commands)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fs-training-planner.git
git push -u origin main
```

Then go to vercel.com and deploy!

---

## 🔧 COMMON COMMANDS

### Start dev server:
```bash
npm run dev
```

### Stop server:
```
Ctrl + C
```

### Install package:
```bash
npm install package-name
```

### Build for production:
```bash
npm run build
```

### Update to GitHub:
```bash
git add .
git commit -m "Your message"
git push
```

---

## 🐛 QUICK FIXES

### Problem: npm not found
**Fix:** Install Node.js from nodejs.org

### Problem: Module not found
**Fix:** `npm install`

### Problem: API Error
**Fix:** Check `.env.local` has correct API key

### Problem: Port in use
**Fix:** `npx kill-port 3000`

### Problem: Changes don't appear
**Fix:** Save files (Ctrl+S), refresh browser (Ctrl+R)

---

## 📱 TEST ON PHONE

1. Get computer IP: `ipconfig` (Windows)
2. On phone: `http://YOUR-IP:3000`
3. Must be same WiFi!

---

## 🎨 FILE DESCRIPTIONS

| File | Purpose |
|------|---------|
| `package.json` | Lists all dependencies |
| `next.config.js` | Next.js settings |
| `tailwind.config.js` | Tailwind CSS settings |
| `postcss.config.js` | CSS processing |
| `.gitignore` | Files to not upload to GitHub |
| `.env.local` | Your API key (secret!) |
| `page.js` | Main UI (frontend) |
| `layout.js` | App wrapper |
| `globals.css` | Global styles |
| `route.js` | API handler (backend) |
| `README.md` | Documentation |

---

## 🔐 SECURITY CHECKLIST

### ✅ Safe to upload to GitHub:
- package.json
- next.config.js
- tailwind.config.js
- postcss.config.js
- .gitignore
- page.js, layout.js, globals.css
- route.js
- README.md

### ❌ NEVER upload:
- .env.local
- node_modules/
- .next/

---

## 🎯 YOUR URLS

### Local development:
```
http://localhost:3000
```

### GitHub repository:
```
https://github.com/YOUR-USERNAME/fs-training-planner
```

### Live app (after Vercel deploy):
```
https://fs-training-planner-xxxxx.vercel.app
```

---

## 📞 HELP RESOURCES

- **Setup Guide:** FS_TRAINING_COMPLETE_GUIDE.md
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Claude API Docs:** https://docs.anthropic.com

---

## ✅ SUCCESS CHECKLIST

Before considering project complete:

- [ ] All files in correct folders
- [ ] API key added to `.env.local`
- [ ] `npm install` completed successfully
- [ ] App runs at localhost:3000
- [ ] Can generate training plan
- [ ] Chat feature works
- [ ] Tested on phone
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] `.env.local` NOT on GitHub
- [ ] Have live URL

---

## 🎓 LEARNING TIPS

1. **Start simple** - Get it working first
2. **Read errors** - They tell you what's wrong
3. **Save often** - Ctrl+S is your friend
4. **Test locally** - Before deploying
5. **Commit often** - Small changes are easier to debug
6. **Google errors** - Someone has solved it before
7. **Be patient** - Learning takes time!

---

**🎉 You've got this! Follow the guide step by step! 🚀**
