import { About } from './about.js';
import { Skills } from './skills.js';
import { Projects } from './projects.js';
import { Contact } from './contact.js';

export const Content = () => `
<main id="main-content" class="hidden lg:block w-full lg:w-[70%] card-bg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 sm:p-6 lg:p-10 h-auto lg:h-full overflow-visible lg:overflow-y-auto relative">
    <div id="mobile-top-nav" class="lg:hidden flex items-center gap-2 overflow-x-auto scrollbar-hide mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 relative">
        <button onclick="showSidebar()" class="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors shadow-sm mr-1"><i class="fa-solid fa-arrow-left"></i></button>
        <button onclick="showSection('about')" data-target="about" class="nav-btn-mobile shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 bg-primary text-white shadow-md border border-transparent">About</button>
        <button onclick="showSection('skills')" data-target="skills" class="nav-btn-mobile shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-transparent">Skills</button>
        <button onclick="showSection('projects')" data-target="projects" class="nav-btn-mobile shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-transparent">Projects</button>
        <button onclick="showSection('contact')" data-target="contact" class="nav-btn-mobile shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-transparent">Contact</button>
        <button onclick="showSection('cv')" data-target="cv" class="nav-btn-mobile shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-transparent">Download CV</button>
    </div>

    ${About()}
    ${Skills()}
    ${Projects()}
    ${Contact()}

    <!-- SECTION: CV -->
    <section id="cv" class="content-section hidden">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Download CV</h2>
        <div class="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8"></div>
        <div class="flex flex-col items-center justify-center h-40 text-gray-500 dark:text-gray-400">
            <i class="fa-solid fa-file-pdf text-4xl mb-4"></i>
            <a href="https://drive.google.com/file/d/1O1QapLIroEw8pGhkwAbIhbO5R7GTeeNw/view?usp=sharing" target="_blank" class="mt-2 md:mt-4 px-5 md:px-6 py-2 bg-primary text-white text-sm md:text-base rounded-md hover:bg-blue-700 transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm">
                <i class="fa-solid fa-download"></i> Download PDF
            </a>
        </div>
    </section>
</main>
`;
