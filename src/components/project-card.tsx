'use client'

import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Project } from '@/types/project'
import { Github } from 'lucide-react'
import { Button } from './ui/button'
interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const handleClick = () => {
        window.open(project.link, '_blank', 'noopener,noreferrer')
    }

    return (
        <Card
            className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden"
            onClick={handleClick}
        >
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={
                        typeof project.image === 'string'
                            ? project.image
                            : project.image.src
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                </CardDescription>
            </CardHeader>

            {project.tags && project.tags.length > 0 && (
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>
            )}
            <CardFooter>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 px-0"
                    asChild
                    onClick={(e) => e.stopPropagation()}
                >
                    <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}
