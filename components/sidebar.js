export const Sidebar = () => `
<aside class="w-full md:w-[35%] lg:w-[30%] card-bg bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col p-6 relative overflow-y-auto">
    <button id="theme-toggle" class="absolute top-6 right-6 text-gray-500 hover:text-primary transition-colors">
        <i id="theme-toggle-dark-icon" class="fa-solid fa-moon text-xl hidden"></i>
        <i id="theme-toggle-light-icon" class="fa-solid fa-sun text-xl"></i>
    </button>

    <div class="flex flex-col items-center mt-4">
        <!-- Foto Profil dari folder lokal img/icon/profile.jpg -->
        <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md mb-4 bg-blue-100 flex items-center justify-center">
            <img src="./img/icon/profil.jpg" alt="Kafit Mustofa" class="w-full h-full object-cover" onerror="this.src='https://i.pravatar.cc/300?img=11'">
        </div>
        <h1 class="text-xl font-bold text-gray-900 dark:text-white text-center">Kafit Mustofa</h1>
        <p class="text-sm text-center text-gray-600 dark:text-gray-400 mt-2 font-medium px-2">
            Digital Marketing | Content Creator | Social Media Specialist | Copy Writing
        </p>
    </div>

    <nav class="flex flex-col gap-2 mt-8">
        <button onclick="window.showSection('about')" data-target="about" class="nav-btn w-full py-3 px-4 rounded-md text-sm font-semibold transition-all duration-200 bg-primary text-white">ABOUT</button>
        <button onclick="window.showSection('skills')" data-target="skills" class="nav-btn w-full py-3 px-4 rounded-md text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">SKILLS</button>
        <button onclick="window.showSection('projects')" data-target="projects" class="nav-btn w-full py-3 px-4 rounded-md text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">PROJECTS</button>
        <button onclick="window.showSection('contact')" data-target="contact" class="nav-btn w-full py-3 px-4 rounded-md text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">CONTACT</button>
        <button onclick="window.showSection('cv')" data-target="cv" class="nav-btn w-full py-3 px-4 rounded-md text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">DOWNLOAD CV</button>
    </nav>

    <div class="mt-auto pt-8 text-center">
        <p class="text-xs text-gray-500 dark:text-gray-400">
            Made with <i class="fa-solid fa-heart text-gray-400"></i> by Me
        </p>
    </div>
</aside>
`;
