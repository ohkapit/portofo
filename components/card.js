export const Card = (title, desc, images, driveLink) => {
    // Escape string gambar agar tidak rusak saat masuk ke atribut onclick HTML
    const imagesStr = `['${images.join("','")}']`;
    
    return `
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-200 dark:shadow-gray-900 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-700">
        <div class="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700 overflow-hidden cursor-pointer relative group" onclick="window.openModal('${title}', '${desc}', ${imagesStr})">
            <img src="${images[0]}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
        <div class="p-4 flex-grow">
            <h4 class="font-bold text-lg text-gray-900 dark:text-white">${title}</h4>
        </div>
        <div class="flex border-t border-gray-200 dark:border-gray-700">
            <a href="${driveLink}" target="_blank" class="w-full py-3 flex items-center justify-center gap-2 text-primary dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <i class="fa-brands fa-google-drive text-lg text-green-600 dark:text-green-400"></i> GOOGLE DRIVE
            </a>
        </div>
    </div>
    `;
};
