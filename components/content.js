import { About } from './about.js';
import { Skills } from './skills.js';
import { Projects } from './projects.js';
import { Contact } from './contact.js';

export const Content = () => `
<main class="w-full md:w-[65%] lg:w-[70%] card-bg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-10 overflow-y-auto relative">
    ${About()}
    ${Skills()}
    ${Projects()}
    ${Contact()}
    
    <section id="cv" class="content-section hidden">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Download CV</h2>
        <div class="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8"></div>
        <div class="flex flex-col items-center justify-center h-40 text-gray-500 dark:text-gray-400">
            <i class="fa-solid fa-file-pdf text-4xl mb-4"></i>
            <a href="https://drive.google.com/file/d/1O1QapLIroEw8pGhkwAbIhbO5R7GTeeNw/view?usp=sharing" target="_blank" class="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                <i class="fa-solid fa-download"></i> Download PDF
            </a>
        </div>
    </section>
</main>
`;
