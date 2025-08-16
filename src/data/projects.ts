import { Project } from '@/types/project'
import image2048 from '@/assets/images/2048.png'
import imageMinecraft from '@/assets/images/minecraft.jpg'
import imageGenshin from '@/assets/images/genshin.png'

export const projects: Project[] = [
    {
        id: '1',
        title: '2048',
        description: '2048 game built with React and TailwindCSS.',
        image: image2048,
        link: 'https://react-2048-eight.vercel.app/',
        git: 'https://github.com/jerry-rat-coder/React-2048',
    },
    {
        id: '2',
        title: 'Minecraft',
        description: 'Minecraft game built with React-Three and Vite.',
        image: imageMinecraft,
        link: 'https://minecraft-react-vite.vercel.app/',
        git: 'https://github.com/jerry-rat-coder/Minecraft-React-Vite',
    },
    {
        id: '3',
        title: 'Genshin Impact',
        description: 'Genshin Impact Start built with xviewer.js and Vite.',
        image: imageGenshin,
        link: 'https://genshin-impact-start-chi.vercel.app/',
        git: 'https://github.com/jerry-rat-coder/genshin-impact-start',
    },
]
