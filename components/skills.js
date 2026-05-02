import { MiniCard } from './mini-card.js';

export const Skills = () => {
    const softSkills = [
        { colorClass: 'text-blue-500', iconClass: 'fa-solid fa-comments', label: 'Komunikasi' },
        { colorClass: 'text-orange-500', iconClass: 'fa-solid fa-user-shield', label: 'Percaya Diri' },
        { colorClass: 'text-red-500', iconClass: 'fa-solid fa-users-gear', label: 'Team Work' },
        { colorClass: 'text-blue-800 dark:text-blue-400', iconClass: 'fa-solid fa-shuffle', label: 'Fleksibilitas' },
        { colorClass: 'text-yellow-500', iconClass: 'fa-solid fa-lightbulb', label: 'Kreatif & Inov' },
        { colorClass: 'text-teal-500', iconClass: 'fa-solid fa-puzzle-piece', label: 'Adaptasi' }
    ];

    const hardSkills = [
        { colorClass: 'text-pink-500', iconClass: 'fa-solid fa-bullhorn', label: 'Digital Market' },
        { colorClass: 'text-cyan-600 dark:text-cyan-400', iconClass: 'fa-solid fa-calendar-check', label: 'Content Plan' },
        { colorClass: 'text-blue-500', iconClass: 'fa-solid fa-share-nodes', label: 'Sosmed Mngmt' },
        { colorClass: 'text-indigo-500 dark:text-indigo-400', iconClass: 'fa-solid fa-chart-line', label: 'Data Analis' },
        { colorClass: 'text-purple-500', iconClass: 'fa-solid fa-pen-nib', label: 'Copy Writing' },
        { colorClass: 'text-orange-600 dark:text-orange-400', iconClass: 'fa-solid fa-magnifying-glass-chart', label: 'Market Research' }
    ];

    const software = [
        { colorClass: 'text-blue-600', iconClass: 'fa-solid fa-file-word', label: 'Ms Word' },
        { colorClass: 'text-green-600', iconClass: 'fa-solid fa-file-excel', label: 'Ms Excel' },
        { colorClass: 'text-orange-600', iconClass: 'fa-solid fa-file-powerpoint', label: 'Ms Powerpoint' },
        { isCustom: true, customHtml: `<div class="bg-[#001833] text-[#31a8ff] text-xs md:text-sm font-bold w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded border-2 border-[#31a8ff]">Ps</div>`, label: 'Photoshop' },
        { isCustom: true, customHtml: `<div class="bg-[#00005b] text-[#9999ff] text-xs md:text-sm font-bold w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded border-2 border-[#9999ff]">Pr</div>`, label: 'Premiere Pro' },
        { colorClass: 'text-black dark:text-white', iconClass: 'fa-solid fa-clapperboard', label: 'Capcut' },
        { colorClass: 'text-blue-500', iconClass: 'fa-solid fa-arrow-trend-up', label: 'Google Trends' },
        { colorClass: 'text-blue-600', iconClass: 'fa-brands fa-meta', label: 'Meta Business' },
        { colorClass: 'text-black dark:text-white', iconClass: 'fa-brands fa-tiktok', label: 'TikTok Creative' }
    ];

    return `
    <section id="skills" class="content-section hidden">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
        <div class="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>
        <div class="pb-4">
            <h3 class="font-bold text-gray-500 dark:text-gray-400 mb-4 text-lg">Soft Skill</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
                ${softSkills.map(skill => MiniCard(skill)).join('')}
            </div>

            <h3 class="font-bold text-gray-500 dark:text-gray-400 mb-4 text-lg">Hard Skill</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                ${hardSkills.map(skill => MiniCard(skill)).join('')}
            </div>

            <h3 class="font-bold text-gray-500 dark:text-gray-400 mb-4 mt-8 text-lg">Software</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                ${software.map(skill => MiniCard(skill)).join('')}
            </div>
        </div>
    </section>
    `;
};
