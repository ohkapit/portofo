import { Sosmed } from './sosmed.js';

export const Contact = () => `
<section id="contact" class="content-section hidden">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8"></div>
    
    <div class="flex flex-col lg:flex-row gap-8">
        <div class="lg:w-1/3 flex flex-col gap-6">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Mari Terhubung!</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Apakah Anda memiliki pertanyaan atau tawaran kerjasama? Jangan ragu untuk menghubungi saya.
            </p>
            
            <div class="flex items-center gap-4 transition-transform hover:translate-x-1">
                <div class="w-12 h-12 bg-blue-50 dark:bg-gray-700 text-primary dark:text-blue-400 rounded-full flex items-center justify-center text-xl border border-blue-100 dark:border-gray-600">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:emailanda@domain.com" class="text-gray-800 dark:text-gray-200 font-semibold hover:text-primary transition-colors">emailanda@domain.com</a>
                </div>
            </div>

            <div class="mt-4 flex gap-3">
                ${Sosmed('https://id.linkedin.com/in/joko-widodo', 'fa-brands fa-linkedin-in', 'hover:bg-primary hover:text-white')}
                ${Sosmed('https://www.instagram.com/jokowi/', 'fa-brands fa-instagram', 'hover:bg-pink-600 hover:text-white')}
                ${Sosmed('https://www.tiktok.com/@jokowi', 'fa-brands fa-tiktok', 'hover:bg-black hover:text-white')}
            </div>
        </div>

        <div class="lg:w-2/3 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <form action="#" method="POST" class="flex flex-col gap-5">
                <input type="text" placeholder="Nama Lengkap" class="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-primary outline-none transition-all" required>
                <input type="email" placeholder="Email" class="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-primary outline-none transition-all" required>
                <textarea rows="4" placeholder="Pesan" class="w-full p-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-primary outline-none transition-all resize-none" required></textarea>
                <button type="submit" class="self-end bg-primary text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2">
                    <i class="fa-solid fa-paper-plane"></i> Kirim Pesan
                </button>
            </form>
        </div>
    </div>
</section>
`;
