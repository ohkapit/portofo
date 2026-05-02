import { Card } from './card.js';

export const Projects = () => {
    const projectData = [
        {
            title: "Si Pak Komputer",
            desc: "Sistem Pakar Kerusakan Komputer adalah aplikasi berbasis web yang membantu pengguna untuk mendiagnosis kerusakan pada komputer beserta solusi perbaikannya berdasarkan gejala yang dialami.",
            images: ['https://picsum.photos/seed/project1a/600/400', 'https://picsum.photos/seed/project1b/600/400', 'https://picsum.photos/seed/project1c/600/400'],
            link: "https://drive.google.com/file/d/1oW2x9dmAZ3UidtX-BPjqyrJelBiroxB3/view?usp=sharing"
        },
        {
            title: "Movie Finder - Dicoding",
            desc: "Proyek pencarian film ini menampilkan data film populer dari API eksternal. Pengguna dapat mencari film favorit, melihat rating, dan tanggal rilisnya dengan antarmuka yang bersih dan responsif.",
            images: ['https://picsum.photos/seed/project2a/600/400', 'https://picsum.photos/seed/project2b/600/400'],
            link: "#"
        },
        {
            title: "Game & Movie Portal",
            desc: "Sebuah portal yang merangkum berbagai informasi seputar game dan film populer. Memiliki fitur filter kategori, pencarian detail, dan review menarik bagi pengunjung.",
            images: ['https://picsum.photos/seed/project3a/600/400', 'https://picsum.photos/seed/project3b/600/400', 'https://picsum.photos/seed/project3c/600/400'],
            link: "#"
        },
        {
            title: "Miekadosurabaya",
            desc: "Aplikasi manajemen perpustakaan digital untuk mempermudah proses peminjaman, pengembalian, dan pendataan buku secara efisien dan terstruktur.",
            images: ['./img/project/pro1.png', './img/project/pro2.png'],
            link: "#"
        }
    ];

    return `
    <section id="projects" class="content-section hidden">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
        <div class="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>

        <div class="pb-4">
            <h3 class="font-bold text-gray-500 dark:text-gray-400 mb-4 text-lg">Public</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                ${projectData.map(proj => Card(proj)).join('')}
            </div>
        </div>
    </section>
    `;
};
