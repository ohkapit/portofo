import { MiniCard } from './mini-card.js';

export const Skills = () => `
<section id="skills" class="content-section hidden">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>

    <div class="pb-4">
        <h3 class="font-bold text-gray-500 dark:text-gray-400 mb-4 text-lg"> Soft Skill</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            ${MiniCard('<i class="fa-solid fa-comments text-3xl text-blue-500"></i>', 'Komunikasi')}
            ${MiniCard('<i class="fa-solid fa-user-shield text-3xl text-orange-500"></i>', 'Percaya Diri')}
            ${MiniCard('<i class="fa-solid fa-users-gear text-3xl text-red-500"></i>', 'Team Work')}
            ${MiniCard('<i class="fa-solid fa-shuffle text-3xl text-blue-800 dark:text-blue-400"></i>', 'Fleksibilitas')}
            ${MiniCard('<i class="fa-solid fa-lightbulb text-3xl text-yellow-500"></i>', 'Kreatif Dan Inov...')}
            ${MiniCard('<i class="fa-solid fa-puzzle-piece text-3xl text-teal-500"></i>', 'Adaptasi')}
        </div>

        <h3 class="font-bold text-gray-500 dark:text-gray-400 mb-4 text-lg"> Hard Skill</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${MiniCard('<i class="fa-solid fa-bullhorn text-3xl text-pink-500"></i>', 'Digital Marketing')}
            ${MiniCard('<i class="fa-solid fa-calendar-check text-3xl text-cyan-600 dark:text-cyan-400"></i>', 'Content Planning')}
            ${MiniCard('<i class="fa-solid fa-share-nodes text-3xl text-blue-500"></i>', 'Social Media Ma...')}
            ${MiniCard('<i class="fa-solid fa-chart-line text-3xl text-indigo-500 dark:text-indigo-400"></i>', 'Data Analis')}
            ${MiniCard('<i class="fa-solid fa-pen-nib text-3xl text-purple-500"></i>', 'Copy Writing')}
            ${MiniCard('<i class="fa-solid fa-magnifying-glass-chart text-3xl text-orange-600 dark:text-orange-400"></i>', 'Market Research')}
        </div>

        <h3 class="font-bold text-gray-500 dark:text-gray-400 mb-4 mt-8 text-lg"> Software</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${MiniCard('<i class="fa-solid fa-file-word text-3xl text-blue-600"></i>', 'Microsoft Word')}
            ${MiniCard('<i class="fa-solid fa-file-excel text-3xl text-green-600"></i>', 'Microsoft Excel')}
            ${MiniCard('<i class="fa-solid fa-file-powerpoint text-3xl text-orange-600"></i>', 'Microsoft Powe...')}
            ${MiniCard('<div class="bg-[#001833] text-[#31a8ff] text-sm font-bold w-8 h-8 flex items-center justify-center rounded border-2 border-[#31a8ff]">Ps</div>', 'Photoshop')}
            ${MiniCard('<div class="bg-[#00005b] text-[#9999ff] text-sm font-bold w-8 h-8 flex items-center justify-center rounded border-2 border-[#9999ff]">Pr</div>', 'Premiere Pro')}
            ${MiniCard('<i class="fa-solid fa-clapperboard text-3xl text-black dark:text-white"></i>', 'Capcut')}
            ${MiniCard('<i class="fa-solid fa-arrow-trend-up text-3xl text-blue-500"></i>', 'Google Trends')}
            ${MiniCard('<i class="fa-brands fa-meta text-3xl text-blue-600"></i>', 'Meta Business Su...')}
            ${MiniCard('<i class="fa-brands fa-tiktok text-3xl text-black dark:text-white"></i>', 'TikTok Creative ...')}
        </div>
    </div>
</section>
`;
