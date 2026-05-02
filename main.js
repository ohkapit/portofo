import { Sidebar } from './components/sidebar.js';
import { Content } from './components/content.js';

// ========================================================= //
// === SETTING KECEPATAN ANIMASI MENGETIK (UBAH DI SINI) === //
// ========================================================= //
const SPEED_ABOUT = 70;    
const SPEED_PROJECT = 30;  
// ========================================================= //

// === 1. RENDER APLIKASI UTAMA === //
document.getElementById('app').innerHTML = Sidebar() + Content();


// === 2. LOGIKA STORY MODAL (INSTAGRAM STYLE) & HISTORY API === //
const storyModal = document.getElementById('story-modal');
const storyContent = document.getElementById('story-content');
const storyImage = document.getElementById('story-image');
const storyIndicators = document.getElementById('story-indicators');

// Data Gambar Story (Ganti dengan URL foto Anda)
const storyImagesData = [
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=400&h=711&auto=format&fit=crop', 
    'https://id.pinterest.com/pin/664140276338708762/', 
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&h=711&auto=format&fit=crop'  
];
let currentStoryIndex = 0;

window.openStory = function(isFromHistory = false) {
    currentStoryIndex = 0;
    storyModal.classList.remove('pointer-events-none');
    storyModal.classList.add('opacity-100');
    storyContent.classList.remove('scale-95');
    storyContent.classList.add('scale-100');
    updateStoryUI();

    // Tambahkan status ke history HP saat Story dibuka
    if (!isFromHistory && window.innerWidth < 1024) {
        history.pushState({ view: 'story' }, '', '#story');
    }
}

window.closeStory = function(isFromHistory = false) {
    storyModal.classList.add('pointer-events-none');
    storyModal.classList.remove('opacity-100');
    storyContent.classList.add('scale-95');
    storyContent.classList.remove('scale-100');

    // FITUR: Ubah Border Gradient menjadi Border Biasa (Story Dilihat/Seen)
    const profileBorder = document.getElementById('profile-border');
    if (profileBorder) {
        profileBorder.className = "absolute inset-0 rounded-full bg-gray-300 dark:bg-gray-600 shadow-sm transition-all duration-500";
    }

    // Jika ditutup manual (X atau area hitam), atur history agar back (mundur) satu kali
    if (!isFromHistory && window.innerWidth < 1024) {
        if (history.state && history.state.view === 'story') {
            history.back();
        }
    }
}

window.nextStory = function(e) {
    if (e) e.stopPropagation();
    if (currentStoryIndex < storyImagesData.length - 1) {
        currentStoryIndex++;
        updateStoryUI();
    } else {
        window.closeStory(); // Tutup jika foto habis
    }
}

window.prevStory = function(e) {
    if (e) e.stopPropagation();
    if (currentStoryIndex > 0) {
        currentStoryIndex--;
        updateStoryUI();
    }
}

function updateStoryUI() {
    storyImage.style.opacity = '0';
    setTimeout(() => {
        storyImage.src = storyImagesData[currentStoryIndex];
        storyImage.style.opacity = '1';
    }, 150);

    storyIndicators.innerHTML = '';
    storyImagesData.forEach((_, index) => {
        const barContainer = document.createElement('div');
        barContainer.className = 'flex-1 h-1 bg-white/30 rounded-full overflow-hidden shadow-sm';
        
        const barFill = document.createElement('div');
        barFill.className = 'h-full bg-white transition-all duration-300';
        
        if (index <= currentStoryIndex) {
            barFill.style.width = '100%';
        } else {
            barFill.style.width = '0%';
        }

        barContainer.appendChild(barFill);
        storyIndicators.appendChild(barContainer);
    });
}

// Tutup story jika klik area hitam (backdrop)
storyModal.addEventListener('click', function(e) {
    if (e.target === storyModal) window.closeStory();
});


// === 3. LOGIKA ANIMASI HANDWRITING (ABOUT) === //
let typeWriterTimeout = null;

window.startTypeWriter = function() {
    const descElement = document.getElementById('about-desc');
    const cursor = document.getElementById('type-cursor');
    if (!descElement || !cursor) return;

    const fullText = descElement.getAttribute('data-text');
    descElement.innerHTML = ''; 
    cursor.classList.remove('hidden'); 
    
    if (typeWriterTimeout) clearTimeout(typeWriterTimeout);

    let i = 0;
    function type() {
        if (i < fullText.length) {
            descElement.innerHTML += fullText.charAt(i);
            i++;
            typeWriterTimeout = setTimeout(type, SPEED_ABOUT); 
        } else {
            cursor.classList.add('hidden'); 
        }
    }
    type();
}


// === 4. LOGIKA NAVIGASI TAB & HISTORY API KESELURUHAN === //
window.showSection = function(sectionId, isFromHistory = false) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('animate-fade-in');
    });

    const sidebarButtons = document.querySelectorAll('.nav-btn');
    sidebarButtons.forEach(btn => {
        btn.className = 'nav-btn w-full py-2.5 md:py-3 px-2 md:px-4 rounded-md text-xs md:text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
        if(btn.getAttribute('data-target') === 'cv') btn.classList.add('col-span-2', 'lg:col-span-1');
    });

    const mobileButtons = document.querySelectorAll('.nav-btn-mobile');
    mobileButtons.forEach(btn => {
        btn.className = 'nav-btn-mobile shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-transparent';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const revealsInside = targetSection.querySelectorAll('.reveal');
        revealsInside.forEach(el => el.classList.remove('active'));

        targetSection.classList.remove('hidden');
        void targetSection.offsetWidth; 
        targetSection.classList.add('animate-fade-in');

        if (sectionId === 'about') {
            setTimeout(window.startTypeWriter, 200); 
        } else {
            if (typeWriterTimeout) clearTimeout(typeWriterTimeout);
        }
    }

    const activeSidebarBtn = document.querySelector(`.nav-btn[data-target="${sectionId}"]`);
    if (activeSidebarBtn) {
        let activeClasses = 'nav-btn w-full py-2.5 md:py-3 px-2 md:px-4 rounded-md text-xs md:text-sm font-semibold transition-all duration-200 bg-primary text-white shadow-md';
        if(sectionId === 'cv') activeClasses += ' col-span-2 lg:col-span-1';
        activeSidebarBtn.className = activeClasses;
    }

    const activeMobileBtn = document.querySelector(`.nav-btn-mobile[data-target="${sectionId}"]`);
    if (activeMobileBtn) {
        activeMobileBtn.className = 'nav-btn-mobile shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 bg-primary text-white shadow-md border border-blue-400';
        const topNav = document.getElementById('mobile-top-nav');
        if (topNav) {
            const scrollPos = activeMobileBtn.offsetLeft - (topNav.offsetWidth / 2) + (activeMobileBtn.offsetWidth / 2);
            topNav.scrollTo({ left: scrollPos, behavior: 'smooth' });
        }
    }

    if (window.innerWidth < 1024) {
        document.getElementById('sidebar').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        window.scrollTo({top: 0, behavior: 'smooth'});
        
        if (!isFromHistory) {
            history.pushState({ view: 'content', section: sectionId }, '', `#${sectionId}`);
        }
    }
}

window.showSidebar = function(isFromHistory = false) {
    if (window.innerWidth < 1024) {
        document.getElementById('sidebar').classList.remove('hidden');
        document.getElementById('main-content').classList.add('hidden');
        window.scrollTo({top: 0, behavior: 'smooth'});
        
        if (!isFromHistory) {
            history.pushState({ view: 'menu' }, '', window.location.pathname);
        }
    }
}

if (window.innerWidth < 1024) {
    history.replaceState({ view: 'menu' }, '', window.location.pathname);
}

// LOGIKA PENDETEKSI TOMBOL BACK HP
window.addEventListener('popstate', function(event) {
    const state = event.state;
    
    // Periksa jika Modal Story terbuka saat tombol back ditekan
    const isStoryOpen = !storyModal.classList.contains('pointer-events-none');
    if (isStoryOpen && (!state || state.view !== 'story')) {
        window.closeStory(true); // true = abaikan penulisan history tambahan
    }

    if (window.innerWidth < 1024) {
        if (!state || state.view === 'menu') {
            window.showSidebar(true);
        } else if (state.view === 'content') {
            window.showSection(state.section, true);
        }
    }
});


// === 5. LOGIKA DARK MODE === //
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const htmlElement = document.documentElement;

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
} else {
    htmlElement.classList.remove('dark');
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
}

themeToggleBtn.addEventListener('click', function() {
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});


// === 6. LOGIKA MODAL PROJECT & TYPEWRITER MODAL === //
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('project-modal-content');
let currentImagesArray = [];
let currentImageIndex = 0;
let modalTypeWriterTimeout = null;

window.openModal = function(title, description, imgData) {
    currentImagesArray = Array.isArray(imgData) ? imgData : [imgData];
    currentImageIndex = 0;
    
    document.getElementById('modal-title').innerText = title;
    
    updateModalProjectImage();
    renderThumbnails();

    const showArrows = currentImagesArray.length > 1;
    document.getElementById('modal-prev-btn').style.display = showArrows ? 'flex' : 'none';
    document.getElementById('modal-next-btn').style.display = showArrows ? 'flex' : 'none';

    modal.classList.remove('pointer-events-none');
    modal.classList.add('opacity-100');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');

    const descElement = document.getElementById('modal-desc');
    const cursor = document.getElementById('modal-type-cursor');
    
    descElement.innerHTML = ''; 
    if (cursor) cursor.classList.remove('hidden'); 
    
    if (modalTypeWriterTimeout) clearTimeout(modalTypeWriterTimeout);

    let i = 0;
    function typeModal() {
        if (i < description.length) {
            descElement.innerHTML += description.charAt(i);
            i++;
            modalTypeWriterTimeout = setTimeout(typeModal, SPEED_PROJECT); 
        } else {
            if (cursor) cursor.classList.add('hidden'); 
        }
    }
    setTimeout(typeModal, 300); 
}

function updateModalProjectImage() {
    const imgElement = document.getElementById('modal-image');
    imgElement.style.opacity = '0';
    setTimeout(() => {
        imgElement.src = currentImagesArray[currentImageIndex];
        imgElement.style.opacity = '1';
    }, 150);
    highlightActiveThumbnail();
}

window.nextModalImage = function() {
    currentImageIndex = (currentImageIndex + 1) % currentImagesArray.length;
    updateModalProjectImage();
}

window.prevModalImage = function() {
    currentImageIndex = (currentImageIndex - 1 + currentImagesArray.length) % currentImagesArray.length;
    updateModalProjectImage();
}

window.setModalImageByIndex = function(index) {
    currentImageIndex = index;
    updateModalProjectImage();
}

function renderThumbnails() {
    const thumbContainer = document.getElementById('modal-thumbnails');
    thumbContainer.innerHTML = ''; 
    if (currentImagesArray.length <= 1) {
        thumbContainer.classList.add('hidden');
        return;
    }
    thumbContainer.classList.remove('hidden');
    currentImagesArray.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.id = `thumb-${index}`;
        img.className = `w-12 h-12 md:w-14 md:h-14 object-cover rounded-md cursor-pointer border-2 transition-all duration-300 shrink-0 ${index === currentImageIndex ? 'border-primary opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`;
        img.onclick = () => window.setModalImageByIndex(index);
        thumbContainer.appendChild(img);
    });
}

function highlightActiveThumbnail() {
    if (currentImagesArray.length <= 1) return;
    currentImagesArray.forEach((_, index) => {
        const thumb = document.getElementById(`thumb-${index}`);
        if (thumb) {
            if (index === currentImageIndex) {
                thumb.classList.add('border-primary', 'opacity-100', 'scale-105');
                thumb.classList.remove('border-transparent', 'opacity-50');
            } else {
                thumb.classList.remove('border-primary', 'opacity-100', 'scale-105');
                thumb.classList.add('border-transparent', 'opacity-50');
            }
        }
    });
}

window.closeModal = function() {
    modal.classList.remove('opacity-100');
    modal.classList.add('pointer-events-none');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');

    if (modalTypeWriterTimeout) clearTimeout(modalTypeWriterTimeout);
}

modal.addEventListener('click', function(e) {
    if (e.target === modal) window.closeModal();
});


// === 7. LOGIKA SCROLL REVEAL ANIMASI === //
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => observer.observe(reveal));
}


// === 8. LOGIKA KANVAS ANIMASI RUANG ANGKASA === //
const canvas = document.getElementById('space-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];
let shootingStar = null;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Star {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.speed = (Math.random() * 0.3) + 0.1;
        this.opacity = Math.random();
        this.opacityChange = (Math.random() * 0.02) - 0.01;
    }
    update() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = height;
            this.x = Math.random() * width;
        }
        this.opacity += this.opacityChange;
        if (this.opacity > 1 || this.opacity < 0.1) {
            this.opacityChange = -this.opacityChange;
        }
    }
    draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const baseOpacity = isDark ? this.opacity : this.opacity * 0.7;
        ctx.fillStyle = `rgba(255, 255, 255, ${baseOpacity})`;
        ctx.fill();
    }
}

class ShootingStar {
    constructor() { this.active = false; }
    spawn() {
        this.x = Math.random() * width;
        this.y = 0;
        this.len = Math.random() * 80 + 30;
        this.speedX = (Math.random() - 0.5) * 5;
        this.speedY = Math.random() * 10 + 5;
        this.size = Math.random() * 2 + 0.5;
        this.active = true;
        this.opacity = 1;
    }
    update() {
        if (!this.active) return;
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.015;
        if (this.opacity <= 0 || this.y > height) this.active = false;
    }
    draw(isDark) {
        if (!this.active) return;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.speedX * 4, this.y - this.speedY * 4);
        ctx.lineWidth = this.size;
        const baseOpacity = isDark ? this.opacity : this.opacity * 0.6;
        const grad = ctx.createLinearGradient(this.x, this.y, this.x - this.speedX * 4, this.y - this.speedY * 4);
        grad.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.strokeStyle = grad;
        ctx.stroke();
    }
}

for (let i = 0; i < 150; i++) stars.push(new Star());
shootingStar = new ShootingStar();

function animate() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.classList.contains('dark');
    stars.forEach(star => {
        star.update();
        star.draw(isDark);
    });
    if (!shootingStar.active && Math.random() < 0.005) shootingStar.spawn();
    shootingStar.update();
    shootingStar.draw(isDark);
    requestAnimationFrame(animate);
}

animate();

// === 9. EKSEKUSI AWAL === //
setTimeout(initScrollReveal, 100);
setTimeout(window.startTypeWriter, 400);
