export const Sidebar = () => `
<aside id="sidebar" class="w-full lg:w-[30%] card-bg bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col lg:flex p-6 relative h-auto lg:h-full overflow-visible lg:overflow-y-auto">
    
    <button id="theme-toggle" class="absolute top-6 right-6 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 focus:outline-none transition-colors z-10">
        <i id="theme-toggle-dark-icon" class="fa-solid fa-moon text-xl hidden"></i>
        <i id="theme-toggle-light-icon" class="fa-solid fa-sun text-xl"></i>
    </button>

    <div class="flex flex-col items-center mt-4">
        
        <!-- === FOTO PROFIL (STORY) === -->
        <div onclick="openStory()" class="relative w-28 h-28 md:w-32 md:h-32 mb-4 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer" title="Klik untuk lihat Story">
            
            <!-- Layer 1: Background Gradient (Diberi ID 'profile-border' agar bisa dimatikan setelah ditonton) -->
            <div id="profile-border" class="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 animate-pulse-slow shadow-lg transition-all duration-500"></div>
            
            <!-- Layer 2: Foto -->
            <div class="absolute inset-[4px] rounded-full overflow-hidden border-[3px] border-white dark:border-gray-800 bg-blue-100 flex items-center justify-center z-10">
                <img src="https://i.pravatar.cc/300?img=11" alt="Kafit Mustofa" class="w-full h-full object-cover">
            </div>
        </div>
        
        <h1 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">Kafit Mustofa</h1>
        <p class="text-sm text-center text-gray-600 dark:text-gray-400 mt-2 font-medium px-2">
            Digital Marketing | Content Creator | Social Media Specialist | Copy Writing
        </p>
    </div>

    <nav class="grid grid-cols-2 lg:flex lg:flex-col gap-2 mt-6 lg:mt-8">
        <button onclick="showSection('about')" data-target="about" class="nav-btn w-full py-2.5 md:py-3 px-2 md:px-4 rounded-md text-xs md:text-sm font-semibold transition-all duration-200 bg-primary text-white shadow-md">ABOUT</button>
        <button onclick="showSection('skills')" data-target="skills" class="nav-btn w-full py-2.5 md:py-3 px-2 md:px-4 rounded-md text-xs md:text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">SKILLS</button>
        <button onclick="showSection('projects')" data-target="projects" class="nav-btn w-full py-2.5 md:py-3 px-2 md:px-4 rounded-md text-xs md:text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">PROJECTS</button>
        <button onclick="showSection('contact')" data-target="contact" class="nav-btn w-full py-2.5 md:py-3 px-2 md:px-4 rounded-md text-xs md:text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">CONTACT</button>
        <button onclick="showSection('cv')" data-target="cv" class="nav-btn w-full col-span-2 lg:col-span-1 py-2.5 md:py-3 px-2 md:px-4 rounded-md text-xs md:text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">DOWNLOAD CV</button>
    </nav>

    <div class="mt-8 lg:mt-auto pt-4 lg:pt-8 text-center pb-2 lg:pb-0">
        <p class="text-xs text-gray-500 dark:text-gray-400">Made with <i class="fa-solid fa-heart text-gray-400"></i> by Me</p>
    </div>
</aside>
`;
