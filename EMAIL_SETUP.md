# 📧 Birthday Wishes Email Setup Guide

This guide will help you set up email functionality so Angel receives birthday wish messages.

## Quick Setup (Choose One Option)

---

## ✅ Option 1: FormSpree (RECOMMENDED - Easiest)

FormSpree is **free, simple, and requires no coding**. It's the best option to get started quickly.

### Steps:

1. **Go to FormSpree**
   - Visit: https://formsubmit.co/
   
2. **Create Your Form**
   - Enter Angel's email address: `angel.ejiofor@email.com`
   - Click "Generate Form Endpoint"
   - You'll get a unique FORM_ID

3. **Update script.js**
   - Open `script.js` in a text editor
   - Find line 201:
     ```javascript
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     ```
   - Replace `YOUR_FORM_ID` with the one from FormSpree
   - **Save the file**

4. **Test It**
   - Open `index.html` in your browser
   - Scroll to "Birthday Wishes" section
   - Submit a test message
   - Check Angel's email inbox (might be in spam folder)

✅ **Done!** Birthday wishes will now be sent to Angel's email.

---

## ✅ Option 2: EmailJS (More Features)

EmailJS is a service that sends emails directly from your webpage with better control.

### Steps:

1. **Create EmailJS Account**
   - Go to: https://www.emailjs.com/
   - Sign up with email (free account)

2. **Set Up Email Service**
   - Go to "Email Services" section
   - Click "Add New Service"
   - Select Gmail (or your email provider)
   - Follow the Gmail setup steps
   - Copy your **Service ID**

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Template Name: "Birthday Wish"
   - Configure the email template:
     - **To Email**: `angel.ejiofor@email.com`
     - **Subject**: `🎂 New Birthday Wish from {{name}}`
     - **Body**:
       ```
       Sender: {{name}}
       Message: {{message}}
       Sent on: {{timestamp}}
       ```
   - Copy your **Template ID**

4. **Get Your User ID**
   - Go to "Account" section
   - Copy your **Public Key**

5. **Update script.js**
   - Find the `sendWishViaEmail` function (around line 193)
   - Replace it with:
   ```javascript
   async function sendWishViaEmail(name, message) {
       // Initialize EmailJS only once
       if (!window.emailjs) {
           const script = document.createElement('script');
           script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js';
           document.head.appendChild(script);
           
           script.onload = () => {
               emailjs.init('YOUR_PUBLIC_KEY');
           };
       }

       try {
           emailjs.init('YOUR_PUBLIC_KEY');
           
           const response = await emailjs.send(
               'YOUR_SERVICE_ID',
               'YOUR_TEMPLATE_ID',
               {
                   to_email: 'angel.ejiofor@email.com',
                   name: name,
                   message: message,
                   timestamp: new Date().toLocaleString()
               }
           );
           
           if (response.status === 200) {
               return true;
           }
           throw new Error('Email sending failed');
       } catch (error) {
           console.error('EmailJS Error:', error);
           throw error;
       }
   }
   ```

6. **Replace These Values**
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID
   - Replace `angel.ejiofor@email.com` with actual email
   - **Save the file**

7. **Test It**
   - Open `index.html`
   - Submit a test birthday wish
   - Check Angel's email

### EmailJS Test Mode:
- You can test with your own email first
- Change the "To Email" in the function to your email temporarily
- After testing, change it back to Angel's email

---

## ✅ Option 3: Formspree.io (Alternative to FormSubmit)

### Steps:

1. **Go to Formspree**
   - Visit: https://formspree.io/

2. **Create Form**
   - Email: Angel's email address
   - Form Name: "Birthday Wishes"
   - Generate the form

3. **Update script.js**
   - Find line around 201:
     ```javascript
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     ```
   - Replace `YOUR_FORM_ID` with the ID from Formspree
   - Save the file

4. **Done!**
   - Test by submitting a birthday wish

---

## ❌ Option 4: No Email Setup (Still Works!)

If email setup seems complicated, **don't worry!**

### It Still Works:
- The webpage will still function perfectly
- Birthday wishes will be saved locally in the browser
- Angel can collect wishes by asking guests manually
- Or guests can screenshot their wishes

### To View Stored Wishes:
1. Open `index.html` in browser
2. Press `F12` to open Developer Tools
3. Go to "Console" tab
4. Type: `JSON.parse(localStorage.getItem('receivedWishes'))`
5. Press Enter to see all stored wishes

---

## 🔧 Email Service Comparison

| Feature | FormSpree | EmailJS | FormSubmit | Local Storage |
|---------|-----------|---------|-----------|--------------|
| Setup Difficulty | Very Easy | Medium | Very Easy | N/A |
| Cost | Free | Free | Free | Free |
| Email Features | Basic | Advanced | Basic | N/A |
| No Code Needed | ✅ | ❌ | ✅ | ✅ |
| Customization | Limited | Full | Limited | N/A |
| Reliability | Excellent | Excellent | Excellent | 100% |

---

## 🐛 Troubleshooting

### Emails Not Sending?

**Check these:**
1. Refresh the page after updating script.js
2. Open browser Console (F12) and check for errors
3. Verify the email address is correct
4. Check spam/junk folder
5. Wait 5-10 seconds after submitting (services can be slow)

### Can't Remember My IDs?

**FormSpree**: Look in your sent emails from FormSpree
**EmailJS**: Go to your dashboard and copy from there

### Want to Change Angel's Email?

1. Go to your email service dashboard
2. Update the email address in the settings
3. Update it in `script.js` as well (search for `ANGEL_EMAIL`)
4. Save and refresh

---

## 🚀 After Setup

Once you choose an option and set it up:

1. **Test It First**
   - Send yourself a test message
   - Make sure it arrives in spam or inbox

2. **Share the Link**
   - Host on GitHub Pages, Netlify, or as a file
   - Share with all of Angel's friends and family

3. **Monitor Wishes**
   - Check Angel's email inbox regularly for birthday wishes
   - Collect all the love!

---

## 💡 Pro Tips

- **Test with your email first** before using Angel's email
- **Gmail users**: Check spam folder, FormSpree emails sometimes go there
- **Multiple forms**: You can set up multiple services to ensure emails don't get missed
- **Backup wishes**: The page also stores wishes locally, so no data is lost

---

## ❓ Still Have Questions?

If you're stuck:

1. **Try the local storage option first** - no setup needed
2. **Start with FormSpree** - it's the easiest
3. **Check FormSpree help docs**: https://formsubmit.co
4. **Check EmailJS help docs**: https://www.emailjs.com/docs/

---

## 🎉 Celebration Ready!

Once email is set up, you're ready to share Angel's birthday page with the world! 🎂💕

Good luck and happy celebrating! 🎁
