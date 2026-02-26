# 🎨 Customization Guide

Easily customize Angel's birthday webpage without touching code!

---

## 🎨 Change Colors

The page uses a soft, feminine color scheme. Want to change it?

### Easy Way - Edit Colors:

1. Open `style.css` in a text editor (Notepad, VS Code, etc.)
2. Find the top section (lines 1-8):
```css
:root {
    --primary-pink: #F4D6DC;
    --accent-gold: #D4AF6A;
    --light-bg: #FEF8F7;
    --dark-text: #3D2C27;
    --gold-light: #E8D4B0;
    --pink-dark: #E8BACE;
    --white: #FFFFFF;
    --shadow: 0 4px 15px rgba(212, 175, 106, 0.15);
}
```

3. Change the color codes (those hex numbers like #F4D6DC)
4. Save the file
5. Refresh your browser to see changes!

### Color Suggestions:

**Romantic Pink**
```
--primary-pink: #FFB6D9;
--accent-gold: #E84B8A;
--pink-dark: #E84B8A;
```

**Ocean Blue**
```
--primary-pink: #B0E0E6;
--accent-gold: #0B7BA7;
--pink-dark: #0B7BA7;
```

**Lavender Dreams**
```
--primary-pink: #E6D5F8;
--accent-gold: #9370DB;
--pink-dark: #9370DB;
```

**Sunny Yellow**
```
--primary-pink: #FFF8DC;
--accent-gold: #FFD700;
--pink-dark: #FFA500;
```

**Find Colors Here**: https://htmlcolorcodes.com/

---

## ✏️ Change Text Content

### Hero Section Title

1. Open `index.html` in text editor
2. Find line ~24:
```html
<h1 class="hero-title">🎂 Angel is Turning 23! 🎂</h1>
```
3. Change "Angel" to the person's name
4. Change "23" to their age
5. Keep or change the emojis!
6. Save and refresh

### Birthday Date

1. In same section, find line ~25:
```html
<p class="hero-subtitle">February 28th, 2026</p>
```
2. Change the date (currently February 28th, 2026)
3. Save and refresh

### Section Titles

Find and change these:
- Line ~78: "Birthday Gallery ✨"
- Line ~110: "Birthday Wishlist 💕"
- Line ~130: "Birthday Wishes 💌"

### Placeholder Text

Change input placeholders:
- Line ~88: "Click or drag photos here"
- Line ~119: "Add a birthday wish..."
- Line ~136: "Your name"
- Line ~137: "Write your birthday wish..."

---

## 🐚 Edit HTML Text (Full Guide)

### What You Can Change:

1. **The Main Title** (Big text at top)
   - Find: `<h1 class="hero-title">...</h1>`
   - Change the text inside

2. **Section Titles** (Headings)
   - Find: `<h2>...</h2>`
   - Change the text inside

3. **Instructions/Labels**
   - Find: `<p>...</p>` tags
   - Change the text

### What NOT to Change:
- Anything inside `<div id="...">` or `class="..."`
- Anything with `id=` or `class=`
- The structure (keeping HTML tags)

---

## 🎛️ Adjust Birthday Date

The page calculates countdown from today until the birthday date.

### Change Birthday Date:

1. Open `script.js` in text editor
2. Find line 4:
```javascript
const BIRTHDAY_DATE = new Date(2026, 1, 28, 0, 0, 0); // February 28, 2026
```

3. Change the numbers:
   - First number: YEAR (2026)
   - Second number: MONTH (1 = February, 0 = January, 2 = March, etc.)
   - Third number: DAY (28)

**Examples:**
```javascript
// March 15, 2026
const BIRTHDAY_DATE = new Date(2026, 2, 15, 0, 0, 0);

// December 25, 2025
const BIRTHDAY_DATE = new Date(2025, 11, 25, 0, 0, 0);

// April 1, 2026
const BIRTHDAY_DATE = new Date(2026, 3, 1, 0, 0, 0);
```

4. Save and refresh!

---

## 📧 Change Email Address

The page can send birthday wishes to an email.

### Update Email:

1. Open `script.js`
2. Find line 3:
```javascript
const ANGEL_EMAIL = 'angel.ejiofor@email.com'; // Change this to the actual email
```
3. Replace with the actual email address
4. Save the file

**Note**: This is just a reference. See EMAIL_SETUP.md to actually set up email sending.

---

## 🆒 Font Changes

Want different fonts?

### Add Google Fonts:

1. Go to https://fonts.google.com
2. Find a font you like
3. Click "Select this style"
4. Copy the `<link>` code
5. In `index.html`, find line ~5:
```html
<link rel="stylesheet" href="style.css">
```
6. Add this above it (paste the link from Google Fonts)
7. Now in `style.css`, find line 22:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```
8. Replace with your font name
9. Save and refresh!

---

## 🎯 Adjust Sizing

### Make Text Bigger/Smaller:

1. Open `style.css`
2. Find sections with `font-size:`
3. Change the numbers:
   - `1rem` = standard size
   - `2rem` = bigger
   - `0.8rem` = smaller

**Example:**
```css
.hero-title {
    font-size: 3.5rem;  /* Change this number */
}
```

---

## 🖼️ Change Spacing/Padding

Want more or less space around things?

1. Open `style.css`
2. Find `padding:` or `margin:` values
3. Change the numbers (larger = more space):

```css
.hero {
    padding: 40px 20px;  /* Change these numbers */
}
```

---

## ✨ Add Animations

### Slow Down Confetti:

1. Find in `script.js` around line 112:
```javascript
vy: Math.random() * 4 + 3,  // Change this
```
- Larger number = faster falling
- Smaller number = slower falling

### Adjust Countdown Color:

1. In `style.css`, find `.countdown-number`:
```css
color: var(--accent-gold);  /* Change to a color */
```

---

## 🌈 Emoji Customization

Add your favorite emojis anywhere!

### In HTML (index.html):
```html
<h1>🎂 Angel is Turning 23! 🎂</h1>
<!-- Change 🎂 to any emoji you want -->
```

### Popular Birthday Emojis:
- 🎂 Cake
- 🎉 Confetti
- 🎊 Balloon
- 💕 Heart
- ✨ Sparkles
- 🎁 Gift
- 🎈 Balloon
- 👑 Crown
- 🌟 Star
- 💖 Pink Heart

Just find the emoji, copy it, and paste into the text!

---

## 🔧 Full Customization Example

Want to change everything? Here's a complete example:

### Step 1: Colors
1. Open `style.css`
2. Change color codes at the top
3. Save

### Step 2: Names and Dates
1. Open `index.html`
2. Change all text
3. Save

### Step 3: Birthday Date
1. Open `script.js`
2. Update `BIRTHDAY_DATE`
3. Save

### Step 4: Email
1. Open `script.js`
2. Update `ANGEL_EMAIL`
3. Save

### Step 5: Test
1. Open `index.html` in browser
2. Refresh (Ctrl+F5)
3. Check everything looks good!

---

## 💾 Save Changes Properly

1. **Use a text editor** (Notepad++, VS Code, not Word!)
2. **Save as UTF-8** encoding
3. **Keep file extensions** (.html, .css, .js)
4. **Hard refresh browser** (Ctrl+Shift+R) to see changes

---

## 🚨 Breaking the Page?

If something breaks:

1. **Undo your changes** (Ctrl+Z)
2. **Refresh browser** (Ctrl+F5)
3. **Start with small changes**
4. **Test each change** before moving on

### If Still Broken:
1. Download the files again
2. Start fresh
3. Make one change at a time

---

## 📚 CSS Properties Quick Reference

### Text Changes:
```css
font-size: 2rem;           /* Make text bigger/smaller */
color: #FF69B4;            /* Change text color */
font-weight: 700;          /* Bold (400-700) */
letter-spacing: 2px;       /* Space between letters */
text-align: center;        /* center/left/right */
```

### Spacing:
```css
padding: 20px;             /* Space inside element */
margin: 20px;              /* Space outside element */
gap: 15px;                 /* Space between items in grid */
```

### Visual:
```css
background-color: #FFF;    /* Background color */
border-radius: 10px;       /* Rounded corners */
box-shadow: 0 4px 15px;    /* Shadow effect */
opacity: 0.5;              /* Transparency (0-1) */
```

### Layout:
```css
display: flex;             /* Flexible layout */
grid-template-columns: auto; /* Create grid columns */
background: linear-gradient(...); /* Gradient background */
```

---

## 🎯 Common Customizations

### Make Everything Bigger
- In `style.css`, find all `font-size:` and increase values
- Increase `padding:` and `margin:` values

### Make Dark Theme
- Change `--light-bg` to dark color
- Change `--dark-text` to light color

### Remove Emojis
- Find all emoji characters (🎂 🎉 etc.)
- Delete them

### Change Celebration Animation
- In `script.js`, adjust confetti values
- In `style.css`, adjust animation speeds

---

## ❓ Still Need Help?

1. **Read the README.md** - Full documentation
2. **Check QUICK_START.md** - Simple guide
3. **Use browser DevTools** - F12 to inspect
4. **Try online tutorials** - "How to edit CSS"

---

## 💡 Pro Tips

- Always make a backup copy first
- Change one thing at a time
- Test in browser after each change
- Use the browser's "Inspect" tool (F12) to see live changes
- Google the CSS property if unsure

---

## 🎉 Ready to Customize!

Now you can make the page uniquely Angel's! Have fun! ✨
