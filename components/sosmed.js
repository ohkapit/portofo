export const Sosmed = (link, iconClass, hoverBg) => `
<a href="${link}" target="_blank" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 ${hoverBg} transition-all duration-300 shadow-sm hover:-translate-y-1">
    <i class="${iconClass} text-lg"></i>
</a>
`;
