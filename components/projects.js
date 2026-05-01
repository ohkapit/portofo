import { Card } from './card.js';

export const Projects = () => `
<section id="projects" class="content-section hidden">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
    <div class="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>

    <div class="pb-4">
        <h3 class="font-bold text-gray-500 dark:text-gray-400 mb-4 text-lg"> Public</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${Card(
                'Si Pak Komputer', 
                'Sistem Pakar Kerusakan Komputer berbasis web untuk mendiagnosis kerusakan hardware.', 
                ['./img/project/sipak-1.jpg', './img/project/sipak-2.jpg'], // Akan error jika gambar lokal ini tidak ada
                'https://drive.google.com/file/d/1oW2x9dmAZ3UidtX-BPjqyrJelBiroxB3/view?usp=sharing'
            )}
            ${Card(
                'Movie Finder', 
                'Aplikasi web pencarian film dengan menggunakan API dari TMDB.', 
                ['./img/project/dm1.jpg'], 
                '#'
            )}
        </div>
    </div>
</section>
`;
