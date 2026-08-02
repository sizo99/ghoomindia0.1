# 🚀 Deploy to GitHub Pages - Step by Step Guide

## Before You Start
- GitHub account (free)
- All images from uploads folder
- HTML file ready

---

## ✅ Part 1: Prepare Your Files

### Create Folder Structure
```
ghoom-india/
├── index.html                    (your HTML file)
├── images/
│   ├── hero-full.jpg
│   ├── logo-green.png
│   ├── trek-poster.jpg
│   ├── trek-map.jpg
│   ├── trek-pricing.jpg
│   ├── why-exists-photo.jpg
│   ├── we-believe-photo.jpg
│   ├── what-we-do-photo.jpg
│   ├── promise-photo.jpg
│   └── movement-photo.jpg
├── README.md                     (optional)
└── .gitignore                    (optional)
```

### Step 1: Update HTML Image Paths

Open `index.html` and replace ALL image references:

**Find these lines:**
```html
style="background-image:url('data:image/svg+xml,...")
src="data:image/png;base64,..."
```

**Replace with:**
```html
style="background-image:url('./images/hero-full.jpg');"
src="./images/logo-green.png"
style="background-image:url('./images/why-exists-photo.jpg');"
style="background-image:url('./images/we-believe-photo.jpg');"
style="background-image:url('./images/what-we-do-photo.jpg');"
style="background-image:url('./images/promise-photo.jpg');"
style="background-image:url('./images/movement-photo.jpg');"
src="./images/trek-poster.jpg"
src="./images/trek-map.jpg"
src="./images/trek-pricing.jpg"
```

### Step 2: Rename HTML File
```bash
mv ghoom-india-responsive.html index.html
```

---

## ✅ Part 2: Create GitHub Repository

### 2.1 Create New Repository on GitHub

1. Go to **github.com**
2. Click **+** icon (top right)
3. Select **New repository**
4. Fill in details:
   ```
   Repository name: ghoom-india
   Description: Ghoom India - Adventure Travel Website
   Visibility: Public (required for GitHub Pages)
   Initialize README: ✓ (optional)
   ```
5. Click **Create repository**

### 2.2 Get Repository URL
- After creation, you'll see green **< > Code** button
- Click it and copy the HTTPS URL
- Example: `https://github.com/yourusername/ghoom-india.git`

---

## ✅ Part 3: Upload Files

### Option A: Using Git Command Line (Recommended)

#### Install Git (if needed)
- **Windows:** https://git-scm.com/download/win
- **Mac:** https://git-scm.com/download/mac
- **Linux:** `sudo apt-get install git`

#### Commands (Run in Terminal/CMD)
```bash
# Navigate to your project folder
cd /path/to/ghoom-india

# Initialize Git
git init

# Add GitHub as remote
git remote add origin https://github.com/yourusername/ghoom-india.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Ghoom India website"

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ Done! Files are now on GitHub

### Option B: Using GitHub Desktop (Easier for Beginners)

1. Download **GitHub Desktop** - https://desktop.github.com/
2. Sign in with your GitHub account
3. Click **File → Clone Repository**
4. Select your `ghoom-india` repo
5. Choose local folder location
6. Copy your `index.html` and `images/` folder into this location
7. Return to GitHub Desktop
8. Write commit message: "Add Ghoom India website files"
9. Click **Commit to main**
10. Click **Push to origin**

✅ Files uploaded!

### Option C: Direct Upload on GitHub

1. Go to your repository on github.com
2. Click **Add file → Upload files**
3. Drag and drop your files:
   - `index.html`
   - `images/` folder with all images
4. Click **Commit changes**

✅ Files uploaded!

---

## ✅ Part 4: Enable GitHub Pages

### Step 1: Go to Repository Settings
1. Open your repository on GitHub
2. Click **Settings** tab (top right)
3. Scroll left sidebar to **Pages** (under "Code and automation")

### Step 2: Configure Pages

#### Source
- Branch: `main` (or `master` if that's your default)
- Folder: `/ (root)`
- Click **Save**

GitHub will display your site URL:
```
Your site is published at:
https://yourusername.github.io/ghoom-india/
```

### Step 3: Wait for Deployment
- First deployment takes 1-2 minutes
- You'll see a green checkmark when ready
- Subsequent updates deploy in 30 seconds

---

## ✅ Part 5: Test Your Website

### Check if Live
```
https://yourusername.github.io/ghoom-india/
```

### What to Test
- [ ] Page loads fully
- [ ] All images display
- [ ] Navigation works
- [ ] Mobile looks good (test in Chrome DevTools)
- [ ] Buttons are clickable
- [ ] WhatsApp widget appears
- [ ] Links work

### Troubleshooting

**❌ Images not loading?**
- Check image paths in HTML
- Verify `images/` folder exists in repository
- Refresh page (Ctrl+Shift+R for hard refresh)

**❌ Page shows 404?**
- Verify repository is public
- Check Pages settings
- Ensure index.html exists
- Wait 2-3 minutes for deployment

**❌ Styles look broken?**
- Check CSS paths (should be inline)
- Hard refresh browser
- Check for console errors (F12)

---

## ✅ Part 6: Custom Domain (Optional)

To use your own domain instead of github.com:

### Step 1: Get Domain
- GoDaddy, Namecheap, Google Domains, etc.

### Step 2: Configure DNS

For example domain `mysite.com`:

```
Go to domain provider's DNS settings:

Add these records:
┌─────────────────────────────────────┐
│ Type    │ Name │ Value            │
├─────────────────────────────────────┤
│ A       │ @    │ 185.199.108.153  │
│ A       │ @    │ 185.199.109.153  │
│ A       │ @    │ 185.199.110.153  │
│ A       │ @    │ 185.199.111.153  │
│ CNAME   │ www  │ username.github  │
└─────────────────────────────────────┘
```

### Step 3: GitHub Settings

1. Go to repo **Settings → Pages**
2. Under "Custom domain"
3. Enter your domain: `mysite.com`
4. Check **Enforce HTTPS**
5. Save

Wait 24 hours for DNS to propagate!

---

## 📝 Updating Your Website

Once deployed, updating is easy:

### Using Git Command Line
```bash
cd /path/to/ghoom-india

# Make your changes
# Edit index.html or add new images

# Commit changes
git add .
git commit -m "Update: Changed hero section"

# Push to GitHub
git push
```

### Using GitHub Desktop
1. Make changes locally
2. Open GitHub Desktop
3. Write commit message
4. Click **Commit to main**
5. Click **Push origin**

### Using GitHub Web
1. Go to repository
2. Click the file you want to edit
3. Click edit icon (pencil)
4. Make changes
5. Click **Commit changes**

**Website updates automatically!** ✨

---

## 🎯 Publishing Checklist

Before going live with client:

### Code Quality
- [ ] index.html has correct image paths
- [ ] All images in `images/` folder
- [ ] No broken links
- [ ] No console errors (F12)
- [ ] Responsive on all sizes

### Deployment
- [ ] Repository is public
- [ ] Pages enabled in Settings
- [ ] Custom domain set (if applicable)
- [ ] Site is live and accessible
- [ ] HTTPS working (lock icon)

### Testing
- [ ] Page loads in <3 seconds
- [ ] All images display
- [ ] Mobile view looks good
- [ ] Buttons work
- [ ] WhatsApp widget works
- [ ] No dead links

### Documentation
- [ ] README.md in repo
- [ ] Client has deployment info
- [ ] Client knows how to update
- [ ] Backup of code taken

---

## 📚 Example Workflow

Here's what happens behind the scenes:

```
1. You edit index.html locally
   ↓
2. You run: git add . && git commit -m "message"
   ↓
3. You run: git push
   ↓
4. GitHub receives files
   ↓
5. GitHub Pages builds website
   ↓
6. Website live at yourusername.github.io/ghoom-india
   ↓
7. Visitor requests page
   ↓
8. Website served to visitor ✅
```

---

## 🔒 Security Notes

### GitHub Best Practices
- ✅ Use HTTPS (GitHub does this by default)
- ✅ Don't commit passwords/API keys
- ✅ Keep repository public (for free pages)
- ✅ Use `.gitignore` for sensitive files

### Example .gitignore
```
# Ignore these files
node_modules/
.env
secrets/
*.log
```

---

## 📞 Support Links

**GitHub Pages Help**
- https://pages.github.com/
- https://docs.github.com/en/pages

**Domain Setup Help**
- GoDaddy: https://godaddy.com/help
- Namecheap: https://namecheap.com/support
- Google Domains: https://domains.google/help

**Troubleshooting**
- Check repo has index.html
- Verify images folder exists
- Ensure repository is public
- Clear browser cache (Ctrl+Shift+Delete)

---

## Quick Deployment Summary

```
1️⃣  Prepare files (HTML + images folder)
2️⃣  Create GitHub repository
3️⃣  Upload files via Git/GitHub Desktop
4️⃣  Enable Pages in Settings
5️⃣  Visit https://yourusername.github.io/ghoom-india/
6️⃣  Test on mobile ✅
7️⃣  Tell client it's live! 🎉
```

---

## After Deployment

### Tell Client
```
📱 Live Website: https://yourusername.github.io/ghoom-india/
(or custom domain if using one)

📧 Email them:
- Website URL
- Login not needed (static site)
- How to request changes
- Your contact info
```

### Future Updates
```
1. Client requests change
2. You edit files locally
3. Run: git add . && git commit -m "change" && git push
4. Website updates in 30 seconds ✨
```

---

**🎉 Congratulations! Your website is live and fully responsive!**

---

**Last Updated:** August 2, 2026  
**For:** Ghoom India Website Deployment
