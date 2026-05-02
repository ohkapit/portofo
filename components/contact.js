import { Sosmed } from './sosmed.js';

export const Contact = () => `
<section id="contact" class="content-section hidden">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6 md:mb-8"></div>
    
    <div class="flex flex-col lg:flex-row gap-8">
        <div class="reveal lg:w-1/3 flex flex-col gap-5 md:gap-6">
            <h3 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1 md:mb-2">Mari Terhubung!</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">Apakah Anda memiliki pertanyaan atau tawaran kerjasama? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.</p>
            
            <div class="flex items-center gap-4 transition-transform duration-300 hover:translate-x-1">
                <div class="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-blue-50 dark:bg-gray-700 text-primary dark:text-blue-400 rounded-full flex items-center justify-center text-lg md:text-xl shadow-sm border border-blue-100 dark:border-gray-600"><i class="fa-solid fa-envelope"></i></div>
                <div class="overflow-hidden">
                    <p class="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                    <a href="mailto:emailanda@domain.com" class="text-gray-800 dark:text-gray-200 font-semibold hover:text-primary dark:hover:text-blue-400 transition-colors text-sm md:text-base break-all">emailanda@domain.com</a>
                </div>
            </div>

            <div class="flex items-center gap-4 transition-transform duration-300 hover:translate-x-1">
                <div class="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-green-50 dark:bg-gray-700 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-lg md:text-xl shadow-sm border border-green-100 dark:border-gray-600"><i class="fa-brands fa-whatsapp"></i></div>
                <div class="overflow-hidden">
                    <p class="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">WhatsApp</p>
                    <a href="https://wa.me/6281234567890" target="_blank" class="text-gray-800 dark:text-gray-200 font-semibold hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm md:text-base">+62 812-3456-7890</a>
                </div>
            </div>

            ${Sosmed()}
        </div>

        <div class="reveal lg:w-2/3 bg-gray-50 dark:bg-gray-800/50 p-5 md:p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm mt-4 lg:mt-0">
            <form action="#" method="POST" class="flex flex-col gap-4 md:gap-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div class="relative group">
                        <input type="text" id="name" placeholder=" " class="block w-full px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer transition-all duration-300 bg-white dark:bg-gray-700 shadow-sm focus:shadow-md" required>
                        <label for="name" class="absolute text-xs md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-primary left-3 cursor-text">Nama Lengkap</label>
                    </div>
                    <div class="relative group">
                        <input type="email" id="email" placeholder=" " class="block w-full px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer transition-all duration-300 bg-white dark:bg-gray-700 shadow-sm focus:shadow-md" required>
                        <label for="email" class="absolute text-xs md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-primary left-3 cursor-text">Email</label>
                    </div>
                </div>
                <div class="relative group">
                    <input type="text" id="subject" placeholder=" " class="block w-full px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer transition-all duration-300 bg-white dark:bg-gray-700 shadow-sm focus:shadow-md" required>
                    <label for="subject" class="absolute text-xs md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-primary left-3 cursor-text">Subjek</label>
                </div>
                <div class="relative group mt-1">
                    <textarea id="message" rows="4" placeholder=" " class="block w-full px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer transition-all duration-300 bg-white dark:bg-gray-700 resize-none shadow-sm focus:shadow-md" required></textarea>
                    <label for="message" class="absolute text-xs md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-primary left-3 cursor-text">Pesan</label>
                </div>
                <button type="submit" class="mt-2 w-full md:w-auto self-end bg-primary text-white py-2.5 md:py-3 px-6 md:px-8 rounded-lg font-semibold hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm md:text-base">
                    <i class="fa-solid fa-paper-plane"></i> Kirim Pesan
                </button>
            </form>
        </div>
    </div>
</section>
`;
