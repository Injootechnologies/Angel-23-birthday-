# 🎂 Angel's 23rd Birthday Webpage

A beautiful, minimalist birthday celebration webpage for Angel Ejiofor turning 23 on February 28th!

## Features ✨

- **Dynamic Countdown Timer**: Shows days, hours, minutes, and seconds until February 28th
- **Birthday Celebration Mode**: On February 28th, the page transforms with:
  - Animated "Happy Birthday" message
  - Confetti animation
  - Special birthday styling
- **Photo Gallery**: Drag-and-drop photo uploads (stored in browser)
- **Gift Registry**: Public wishlist where visitors can "claim" items; claims are saved to a Supabase table so everyone can see what's been taken
- **Birthday Wishes**: Visitors can submit birthday wishes and messages that get sent to Angel's email
- **Responsive Design**: Fully mobile-friendly with beautiful design featuring blush pink, gold, and white colors
- **Minimalist Aesthetic**: Clean, feminine, and cute design

## 📁 Files

- `index.html` - Main webpage structure
- `style.css` - Beautiful styling with responsive design
- `script.js` - All interactive functionality
- `README.md` - This file

## 🚀 Quick Start

1. **Open the page**: Simply open `index.html` in any modern web browser
2. **Share the link**: Host it on GitHub Pages, Netlify, or any web server
3. **No installation needed**: Everything runs in the browser!

## ⚙️ Configuration

### Setting Angel's Email Address

To receive birthday wishes, you need to configure an email service. There are two options:

#### Option 1: Using FormSpree (Easy, Free)
1. Go to https://formsubmit.co/
2. Enter Angel's email address and follow the setup
3. You'll get a `FORM_ID`
4. In `script.js`, find this line (around line 201):
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
5. Replace `YOUR_FORM_ID` with the ID from FormSpree
6. Also update the email address at the top of script.js:
   ```javascript
   const ANGEL_EMAIL = 'angel.ejiofor@email.com'; // Change this
   ```

#### Option 2: Using EmailJS (More Features)
1. Create a free account at https://www.emailjs.com/
2. Set up an email service and template
3. In `script.js`, add EmailJS SDK and update the `sendWishViaEmail` function with your service ID and template ID
4. Update the email address configuration

#### Option 3: Simple Local Storage (No Email)
- By default, wishes are stored in the browser's localStorage
- Angel can view them by opening browser developer tools (F12) and checking localStorage
- This works if no email setup is needed

## 💾 Features Explained

### Photo Gallery
- **Add Photos**: Click the upload area or drag-and-drop images
- **Delete Photos**: Hover over a photo and click the ✕ button
- **Storage**: Photos are stored in browser's localStorage (works offline)
- **Limit**: Limited by browser storage (usually 5-10 MB)

### Gift Registry
- **Claim an Item**: Click the "Claim" button beside a gift and enter your name
- **Public**: Claimed names appear beneath each item so others know it's taken
- **Storage**: All claims are saved to a Supabase table called `gift_registry` (no authentication required)

### Birthday Wishes Form
- **Name & Message**: Visitors enter their name and birthday message
- **Submit**: Messages are sent to Angel's configured email
- **Confirmation**: Shows success message after submission
- **Auto-Save**: Wishes also stored locally as backup

## 📱 Mobile Friendly

The page is fully responsive and works beautifully on:
- iPhones
- Android phones
- Tablets
- Desktop computers

All features work the same on mobile devices!

## 🎉 What Happens on February 28th?

When it's February 28th:
1. The countdown timer reaches 0:0:0:0
2. Page automatically transforms into celebration mode
3. "Happy Birthday Angel!" message appears in large animated text
4. Confetti animation fills the screen
5. Special birthday styling activates
6. All photos and wishes remain visible

## 📝 Customization

You can customize:
- **Colors**: Edit color variables in `style.css` (lines 1-8)
- **Birthday Date**: Change in `script.js` line 4
- **Email**: Configure email service through FormSpree or EmailJS
- **Text**: Edit hero message, section titles, etc. in `index.html`

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named `angel-birthday`
3. Upload the three files
4. Enable GitHub Pages in settings
5. Share the link with everyone!

### Option 2: Netlify (Free)
1. Go to https://netlify.com
2. Drag and drop the folder
3. Get an instant live link

### Option 3: Email the HTML file
- Send `index.html` via email (make sure CSS and JS are embedded or linked properly)
- Recipients can open it directly in their browser

## 🔒 Privacy & Data

- **Photos**: Stored only in the visitor's browser (not uploaded anywhere)
- **Wishlist**: Stored only in Angel's browser (not uploaded anywhere)
- **Wishes**: Only sent to the email configured in the form setup
- **No tracking**: No analytics or tracking code

## 🐛 Troubleshooting

**Photos won't upload?**
- Check browser storage limits
- Try deleting some old photos
- Use a different browser

**Countdown not updating?**
- Refresh the page
- Check if JavaScript is enabled
- Try clearing browser cache

**Birthday wishes not sending?**
- Make sure email service is properly configured
- Check browser console for errors (F12)
- Verify the email address in script.js

**Page looks broken on mobile?**
- Try rotating your screen
- Clear browser cache
- Try a different browser

## 💡 Tips

- Share the link with all of Angel's friends and family
- Pin it to a group chat or social media
- Send it as an email to make it easy to access
- Add photos beforehand for a great experience
- Test the email functionality before sharing widely

## 👨‍💻 Technical Details

- **Framework**: Pure JavaScript, HTML, CSS (no dependencies needed!)
- **Browser Compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Storage**: Browser localStorage API
- **Performance**: Lightweight and fast
- **Accessibility**: Semantic HTML and accessible elements

## 📧 Email Setup Issues?

If email setup seems complicated:
1. Visitors can still see and interact with the page
2. Wishes will be stored locally in localStorage
3. Angel can manually collect wishes by asking guests
4. This is still a great celebration experience!

## 🎂 Enjoy the Celebration!

This webpage is designed to make Angel's 23rd birthday extra special. Have fun celebrating! 🎉💕

---

**Made with ❤️ for Angel's 23rd Birthday**
