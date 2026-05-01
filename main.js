import { Sidebar } from './components/sidebar.js';
import { Content } from './components/content.js';

// Render Komponen ke DOM
document.getElementById('app').innerHTML = `
    ${Sidebar()}
    ${Content()}
`;

// === Logika Navigasi Tab ===
window.showSection = (sectionId) => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('animate-fade-in');
    });

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.className = 'nav-btn w-full py-3 px-4 rounded-md text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        void targetSection.offsetWidth; 
        targetSection.classList.add('animate-fade-in');
    }

    const activeButton = document.querySelector(`button[data-target="${sectionId}"]`);
    if (activeButton) {
        activeButton.className = 'nav-btn w-full py-3 px-4 rounded-md text-sm font-semibold transition-all duration-200 bg-primary text-white shadow-md';
    }
};

// === Logika Modal Project (Gallery) ===
let currentImagesArray = [];
let currentImageIndex = 0;

window.openModal = (title, description, imgData) => {
    currentImagesArray = Array.isArray(imgData) ? imgData : [imgData];
    currentImageIndex = 0;

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
    
    window.updateModalImage();
    window.renderThumbnails();

    const showArrows = currentImagesArray.length > 1;
    document.getElementById('modal-prev-btn').style.display = showArrows ? 'flex' : 'none';
    document.getElementById('modal-next-btn').style.display = showArrows ? 'flex' : 'none';
    
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('project-modal-content');
    modal.classList.remove('pointer-events-none', 'opacity-0');
    modal.classList.add('opacity-100');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
};

window.updateModalImage = () => {
    const imgElement = document.getElementById('modal-image');
    imgElement.style.opacity = '0';
    setTimeout(() => {
        imgElement.src = currentImagesArray[currentImageIndex];
        imgElement.style.opacity = '1';
    }, 150);
    window.highlightActiveThumbnail();
};

window.nextModalImage = () => {
    currentImageIndex = (currentImageIndex + 1) % currentImagesArray.length;
    window.updateModalImage();
};

window.prevModalImage = () => {
    currentImageIndex = (currentImageIndex - 1 + currentImagesArray.length) % currentImagesArray.length;
    window.updateModalImage();
};

window.setModalImageByIndex = (index) => {
    currentImageIndex = index;
    window.updateModalImage();
};

window.renderThumbnails = () => {
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
        img.className = `w-14 h-14 object-cover rounded-md cursor-pointer border-2 transition-all duration-300 ${index === currentImageIndex ? 'border-primary opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`;
        img.onclick = () => window.setModalImageByIndex(index);
        thumbContainer.appendChild(img);
    });
};

window.highlightActiveThumbnail = () => {
    if (currentImagesArray.length <= 1) return;
    currentImagesArray.forEach((_, index) => {
        const thumb = document.getElementById(`thumb-${index}`);
        if (thumb) {
            if (index === currentImageIndex) {
                thumb.className = 'w-14 h-14 object-cover rounded-md cursor-pointer border-2 transition-all duration-300 border-primary opacity-100 scale-105';
            } else {
                thumb.className = 'w-14 h-14 object-cover rounded-md cursor-pointer border-2 transition-all duration-300 border-transparent opacity-50 hover:opacity-100';
            }
        }
    });
};

window.closeModal = () => {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('project-modal-content');
    modal.classList.remove('opacity-100');
    modal.classList.add('pointer-events-none', 'opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
};

// Tutup modal jika klik di luar box
document.getElementById('project-modal').addEventListener('click', function(e) {
    if (e.target === this) window.closeModal();
});

// === Dark Mode Setup ===
const setupDarkMode = () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const htmlElement = document.documentElement;

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    }

    themeToggleBtn.addEventListener('click', () => {
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
};

setupDarkMode();
