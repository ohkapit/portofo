export const MiniCard = (iconHtml, title) => `
<div class="bg-white dark:bg-gray-800 shadow-md shadow-gray-200 dark:shadow-gray-900 rounded-lg p-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer active:scale-95">
    <div class="w-10 text-center flex justify-center items-center">
        ${iconHtml}
    </div>
    <span class="font-bold text-xs text-gray-800 dark:text-gray-200 uppercase truncate">${title}</span>
</div>
`;
