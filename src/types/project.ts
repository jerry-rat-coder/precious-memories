export interface Project {
    id: string
    title: string
    description: string
    image: string | { src: string; height: number; width: number }
    link: string
    tags?: string[]
}
