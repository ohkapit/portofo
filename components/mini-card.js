export const MiniCard = ({ colorClass, iconClass, label, isCustom = false, customHtml = '' }) => `
<div class="reveal bg-white dark:bg-gray-800 shadow-md shadow-gray-200 dark:shadow-gray-900 rounded-lg p-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    ${isCustom 
        ? `<div class="w-10 flex justify-center">${customHtml}</div>` 
        : `<div class="text-2xl md:text-3xl ${colorClass} w-10 text-center"><i class="${iconClass}"></i></div>`
    }
    <span class="font-bold text-xs md:text-sm text-gray-800 dark:text-gray-200 uppercase truncate">${label}</span>
</div>
`;
