// ==================== CONFIGURATION ====================
// EmailJS Configuration
// EMAILJS SERVICE ID: service_1dihf6h
// EMAILJS TEMPLATE ID: template_4rir9lm
// EMAILJS PUBLIC KEY: oqyt9TLvyc7TdANR_
const EMAILJS_SERVICE_ID = 'service_1dihf6h';
const EMAILJS_TEMPLATE_ID = 'template_4rir9lm';
const EMAILJS_PUBLIC_KEY = 'oqyt9TLvyc7TdANR_';

// Supabase Configuration
// SUPABASE URL: https://iirgyyitmvdvnwhnrhom.supabase.co
// SUPABASE ANON KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpcmd5eWl0bXZkdm53aG5yaG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwOTY2OTMsImV4cCI6MjA4NzY3MjY5M30.wTLFuHnMInUR5I-b4AIYtCYgGBL5fwKIUVwJgpqEhzs
const SUPABASE_URL = 'https://iirgyyitmvdvnwhnrhom.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpcmd5eWl0bXZkdm53aG5yaG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwOTY2OTMsImV4cCI6MjA4NzY3MjY5M30.wTLFuHnMInUR5I-b4AIYtCYgGBL5fwKIUVwJgpqEhzs';

// Angel's Information
const ANGEL_EMAIL = 'angel.ejiofor@outlook.com';
const ANGEL_BIRTH_DATE = new Date(2003, 1, 28); // February 28, 2003
// countdown target for Feb 28 2026 23:59:59
const TARGET_BIRTHDAY = new Date(2026, 1, 27, 23, 59, 59).getTime();
const BIRTHDAY_MONTH = 1; // 0 = January, 1 = February
const BIRTHDAY_DAY = 28;

// Initialize EmailJS
// ==================== DYNAMIC AGE & COUNTDOWN CALCULATION ====================
function calculateBirthdayInfo() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Calculate current age (used elsewhere, not the timer)
    let age = currentYear - ANGEL_BIRTH_DATE.getFullYear();
    
    // Create this year's birthday
    let birthdayThisYear = new Date(currentYear, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0);
    if (now.getTime() > birthdayThisYear.getTime()) {
        birthdayThisYear = new Date(currentYear + 1, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0);
        age = currentYear + 1 - ANGEL_BIRTH_DATE.getFullYear();
    }
    
    return {
        currentAge: age,
        nextBirthday: birthdayThisYear,
        isBirthdayToday: now.toDateString() === birthdayThisYear.toDateString()
    };
}

// Helper function for ordinal suffixes
function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
}

// ==================== COUNTDOWN TIMER ====================
function updateCountdown() {
    const now = Date.now();
    const distance = TARGET_BIRTHDAY - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (distance <= 0) {
        // reached or passed target
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
        activateBirthdayMode();
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// ==================== BIRTHDAY MODE CELEBRATION ====================
function activateBirthdayMode() {
    const hero = document.getElementById('hero');
    const heroContent = hero.querySelector('.hero-content');
    const birthdayInfo = calculateBirthdayInfo();
    const age = birthdayInfo.currentAge;
    
    // Update hero content
    hero.classList.add('birthday-celebration');
    heroContent.innerHTML = `
        <h1 class="birthday-title" style="font-size: 2rem; line-height: 1.4; color: #1F3A70;">Happy ${age}${getOrdinalSuffix(age)} Birthday Angel! 🎂🎉</h1>
        <p style="font-size: 1.1rem; color: #2C3E50; margin-top: 30px; line-height: 1.6;">Today is YOUR day, and the universe has been preparing this moment just for you. You are brilliant, powerful, and unstoppable. You came into this world to shine and everything you have been through has only made you stronger. May this year bring you abundance, love, and every single thing your heart desires. You are a billionaire in the making and nothing can stop what God has already destined for you. Keep shining Angel — the world needs your light. Happy Birthday Queen! 👑</p>
    `;

    // Activate confetti
    const canvas = document.getElementById('confetti-canvas');
    canvas.classList.add('active');
    startConfetti();

    // Apply birthday mode styling
    document.body.classList.add('birthday-mode');
    
    // Archive photos from Supabase
    setTimeout(() => {
        archivePhotosFromCurrentYear();
    }, 1000);
}

// ==================== CONFETTI ANIMATION ====================
class Confetti {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        this.createParticles();
        this.animate();
    }

    createParticles() {
        const particleCount = 150;
        const colors = ['#1F3A70', '#B8D4E8', '#5B8DCC', '#FFFFFF', '#E8F2FA'];
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                vx: (Math.random() - 0.5) * 6,
                vy: Math.random() * 4 + 3,
                size: Math.random() * 8 + 4,
                emoji: '🎂',
                fontSize: Math.random() * 20 + 16,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.1
            });
        }
    }

    animate = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;
            
            p.vy += 0.1;

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation);
            this.ctx.font = `${p.fontSize}px Arial`;
            this.ctx.fillText(p.emoji, 0, 0);
            this.ctx.restore();
        });

        this.particles = this.particles.filter(p => p.y < this.canvas.height);

        if (this.particles.length > 0) {
            requestAnimationFrame(this.animate);
        }
    }
}

let confetti = null;

function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    confetti = new Confetti(canvas);
}

window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ==================== SUPABASE PHOTO UPLOAD ====================
// initialise client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function initPhotoUpload() {
    const uploadArea = document.getElementById('upload-area');
    const photoInput = document.getElementById('photo-input');
    const galleryGrid = document.getElementById('gallery-grid');
    if (!uploadArea || !photoInput || !galleryGrid) return;

    uploadArea.addEventListener('click', () => photoInput.click());

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        handleFiles(e.dataTransfer.files);
    });

    photoInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
        photoInput.value = '';
    });
}

async function handleFiles(files) {
    const uploaderName = prompt('Your name for credit:') || 'Anonymous';
    for (const file of files) {
        if (file.type.startsWith('image/')) {
            await uploadAndDisplay(file, uploaderName);
        }
    }
}

async function uploadAndDisplay(file, uploaderName) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data, error } = await supabaseClient
        .storage
        .from('photos')
        .upload(fileName, file);

    if (error) {
        console.error('Photo upload error', error);
        alert('Unable to upload photo.');
        return;
    }

    const { data: { publicUrl } } = supabaseClient
        .storage
        .from('photos')
        .getPublicUrl(fileName);

    addPhotoToGallery(publicUrl, uploaderName);
}

function addPhotoToGallery(url, uploaderName) {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
        <img src="${url}" alt="Birthday photo" loading="lazy">
        <div class="uploader-name">${uploaderName}</div>
    `;
    galleryGrid.prepend(div);
}

// Load existing photos from Supabase storage 'photos' bucket
async function loadPhotos() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    try {
        const { data, error } = await supabaseClient
            .storage
            .from('photos')
            .list('', { limit: 200, sortBy: { column: 'name', order: 'desc' } });

        if (error) throw error;

        galleryGrid.innerHTML = '';

        if (Array.isArray(data)) {
            for (const file of data) {
                const { data: { publicUrl } } = supabaseClient
                    .storage
                    .from('photos')
                    .getPublicUrl(file.name);
                addPhotoToGallery(publicUrl, 'Guest');
            }
        }
    } catch (err) {
        console.error('Error loading photos from Supabase storage:', err);
    }
}

// ==================== PHOTO ARCHIVE SYSTEM ====================
async function archivePhotosFromCurrentYear() {
    try {
        const currentYear = new Date().getFullYear();
        const birthdayInfo = calculateBirthdayInfo();
        const age = birthdayInfo.currentAge;
        
        // Fetch all current photos
        const { data: photos, error } = await supabaseClient
            .from('birthday_photos')
            .select('*');
        
        if (error) throw error;
        
        // Create archive entry for each photo
        const archiveData = photos.map(photo => ({
            image_url: photo.image_url,
            uploader_name: photo.uploader_name,
            birthday_age: age,
            birthday_year: currentYear,
            archived_at: new Date().toISOString()
        }));
        
        // Insert into archive table
        if (archiveData.length > 0) {
            const { error: archiveError } = await supabaseClient
                .from('birthday_photo_archives')
                .insert(archiveData);
            
            if (archiveError) throw archiveError;
        }
        
        // Clear current gallery
        const { error: deleteError } = await supabaseClient
            .from('birthday_photos')
            .delete()
            .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
        
        if (deleteError) throw deleteError;
        
        // Display archive section
        displayPhotoArchive(age, currentYear);
        loadPhotos(); // Refresh gallery
        
    } catch (error) {
        console.error('Error archiving photos:', error);
    }
}

// Display archived photos
async function displayPhotoArchive(age, year) {
    try {
        const { data: archives, error } = await supabaseClient
            .from('birthday_photo_archives')
            .select('*')
            .order('birthday_year', { ascending: false });
        
        if (error) throw error;
        
        let archiveHTML = '<div class="photo-archives">';
        
        const uniqueYears = [...new Set(archives.map(p => p.birthday_year))].sort((a, b) => b - a);
        
        uniqueYears.forEach(archiveYear => {
            const archiveAge = archiveYear - ANGEL_BIRTH_DATE.getFullYear();
            const yearPhotos = archives.filter(p => p.birthday_year === archiveYear);
            
            if (yearPhotos.length > 0) {
                archiveHTML += `
                    <div class="archive-year">
                        <h3>Angel's ${archiveAge}${getOrdinalSuffix(archiveAge)} Birthday Memories — ${archiveYear}</h3>
                        <div class="archive-grid">
                            ${yearPhotos.map(photo => `
                                <div class="archive-photo">
                                    <img src="${photo.image_url}" alt="Birthday memory" loading="lazy">
                                    <p class="archive-uploader">${photo.uploader_name}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        });
        
        archiveHTML += '</div>';
        
        let archiveSection = document.getElementById('photo-archives-section');
        if (!archiveSection) {
            archiveSection = document.createElement('section');
            archiveSection.id = 'photo-archives-section';
            archiveSection.className = 'photo-archives-section';
            const gallerySection = document.querySelector('.gallery-section');
            if (gallerySection) {
                gallerySection.insertAdjacentElement('afterend', archiveSection);
            }
        }
        
        archiveSection.innerHTML = archiveHTML;
    } catch (error) {
        console.error('Error displaying photo archive:', error);
    }
}

// ==================== GIFT REGISTRY (formerly Birthday Wishlist) ====================
// Instead of a static list, visitors can claim a gift.  Each claim is stored
// in a Supabase table so that everyone can see what has already been taken.
// Table schema (example):
//   CREATE TABLE gift_registry (
//     id serial PRIMARY KEY,
//     item text,
//     name text,
//     created_at timestamp with time zone DEFAULT now()
//   );

// fetch all registry entries from Supabase
async function fetchRegistry() {
    try {
        const { data, error } = await supabaseClient
            .from('gift_registry')
            .select('*');
        if (error) throw error;
        return data || [];
    } catch (err) {
        console.error('Error fetching gift registry:', err);
        return [];
    }
}

// insert a new claim into the registry
async function addRegistryEntry(item, name) {
    try {
        const { data, error } = await supabaseClient
            .from('gift_registry')
            .insert([{ item, name }]);
        if (error) throw error;
        return data;
    } catch (err) {
        console.error('Error adding registry entry:', err);
        throw err;
    }
}

// create claim buttons and info div for each wishlist item
function attachClaimButtons() {
    const items = document.querySelectorAll('.wishlist-item');
    items.forEach(div => {
        // don't add twice
        if (div.querySelector('.claim-btn')) return;

        // ensure there is a container for the item text if not already
        let textEl = div.querySelector('.wishlist-item-text');
        if (!textEl) {
            const span = div.querySelector('span');
            if (span) {
                span.classList.add('wishlist-item-text');
                textEl = span;
            }
        }

        // create actions container if needed
        let actions = div.querySelector('.wishlist-item-actions');
        if (!actions) {
            actions = document.createElement('div');
            actions.className = 'wishlist-item-actions';
            div.appendChild(actions);
        }

        const btn = document.createElement('button');
        btn.className = 'claim-btn';
        btn.textContent = 'I want to gift this 🎁';
        btn.addEventListener('click', async () => {
            const itemText = textEl ? textEl.innerText.trim() : '';
            const name = prompt(`Who is gifting "${itemText}"?`);
            if (!name) return;
            try {
                await addRegistryEntry(itemText, name.trim());
                await refreshRegistry();
                alert('Thank you! Your gift claim has been recorded.');
            } catch (err) {
                alert('Sorry, there was a problem recording your gift claim.');
            }
        });
        actions.appendChild(btn);

        // info placeholder
        const info = document.createElement('div');
        info.className = 'gift-info';
        div.appendChild(info);
    });
}

// update the UI with the latest claims
async function refreshRegistry() {
    const registry = await fetchRegistry();
    const groups = {};
    registry.forEach(row => {
        const item = row.item || '';
        const name = row.name || '';
        if (!groups[item]) groups[item] = [];
        groups[item].push(name);
    });

    const items = document.querySelectorAll('.wishlist-item');
    items.forEach(div => {
        const textEl = div.querySelector('.wishlist-item-text');
        const itemText = textEl ? textEl.innerText.trim() : '';
        const info = div.querySelector('.gift-info');
        if (!info) return;
        const names = groups[itemText];
        if (names && names.length) {
            info.textContent = `Gifted by ${names.join(', ')}`;
        } else {
            info.textContent = '';
        }
    });
}

// initialization helper for registry
function initGiftRegistry() {
    attachClaimButtons();
    refreshRegistry();
    // optionally refresh periodically so other visitors see changes
    setInterval(refreshRegistry, 60 * 1000);
}


// ==================== BIRTHDAY WISHES FORM ====================
function initEmailForm() {
    const wishesForm = document.getElementById('wishes-form');
    const formMessage = document.getElementById('form-message');
    if (!wishesForm || !formMessage) return;

    wishesForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name-input').value.trim();
        const message = document.getElementById('message-input').value.trim();
        if (!name || !message) {
            formMessage.textContent = 'Please fill in all fields';
            formMessage.className = 'form-message error';
            return;
        }
        try {
            const resp = await fetch('https://formspree.io/f/xzdaoopn', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    from_name: name,
                    message: message,
                    _replyto: ANGEL_EMAIL
                })
            });
            if (!resp.ok) throw new Error('Network response was not ok');
            formMessage.textContent = '🎂 Your wish has been sent! 🎂';
            formMessage.className = 'form-message success';
            wishesForm.reset();
            setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
        } catch (error) {
            console.error('Error sending wish:', error);
            formMessage.textContent = 'Error sending wish. Please try again.';
            formMessage.className = 'form-message error';
        }
    });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Start countdown to fixed target
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Prepare upload and gallery
    loadPhotos();
    initPhotoUpload();

    // Prepare email form
    initEmailForm();

    // Prepare gift registry (wishlist)
    initGiftRegistry();

    console.log('🎂 Angel\'s Birthday webpage loaded! 🎂');
    console.log('Birthday Email: ' + ANGEL_EMAIL);
    console.log('Supabase connected');
});

// Load photo archives on page load
window.addEventListener('load', async () => {
    const birthdayInfo = calculateBirthdayInfo();
    displayPhotoArchive(birthdayInfo.currentAge, new Date().getFullYear());
});
