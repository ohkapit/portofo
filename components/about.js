export const About = () => `
<section id="about" class="content-section animate-fade-in">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6 md:mb-8"></div>

    <div class="reveal flex justify-center mb-6 md:mb-8">
        <div class="w-40 h-48 md:w-48 md:h-56 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-blue-100">
            <img src="/img/icon/profil.jpg" alt="Foto Kafit Mustofa" class="w-full h-full object-cover">
        </div>
    </div>

    <div class="reveal flex items-center gap-2 mb-4">
        <i class="fa-solid fa-circle-info text-gray-900 dark:text-white text-lg"></i>
        <h3 class="text-lg font-bold text-gray-900 dark:text-white">About Me</h3>
    </div>

    <div class="reveal min-h-[120px]">
        <p id="about-desc" 
           data-text="Halo, nama saya Kafit Mustofa. Lulusan S1-Teknik Informatika yang menyukai dunia digital. Saya memiliki pengalaman sebagai Social Media Specialist, Content Creator dan Digital marketing. Rasanya luar biasa melihat diri saya berkembang, dan saya berharap dapat terus berkembang dan menjadi lebih baik dari sekarang."
           class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-[15px] text-justify inline">
        </p>
        <span id="type-cursor" class="inline-block w-1.5 h-4 bg-primary ml-1 animate-pulse hidden align-middle"></span>
    </div>
</section>
`;
