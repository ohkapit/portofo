export const Card = ({ title, desc, images, link }) => `
<div class="reveal bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-200 dark:shadow-gray-900 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-700">
    <div class="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700 overflow-hidden cursor-pointer relative group" onclick="openModal('${title}', '${desc}', [${images.map(img => `'${img}'`).join(',')}])">
        <img src="${images[0]}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
    </div>
    <div class="p-4 flex-grow">
        <h4 class="font-bold text-base md:text-lg text-gray-900 dark:text-white">${title}</h4>
    </div>
    <div class="flex border-t border-gray-200 dark:border-gray-700">
        <a href="${link}" target="_blank" class="w-full py-2.5 md:py-3 flex items-center justify-center gap-2 text-primary dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors text-sm md:text-base">
            <i class="fa-brands fa-google-drive text-lg text-green-600 dark:text-green-400"></i> GOOGLE DRIVE
        </a>
    </div>
</div>
`;
