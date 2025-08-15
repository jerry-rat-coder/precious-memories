import { ProjectCard } from '@/components/project-card'
import { Navbar } from '@/components/navbar'
import { projects } from '@/data/projects'

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Header Section */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <div className="relative container mx-auto px-4 py-16 sm:py-24">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                            Life is short,{' '}
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                play more
                            </span>
                            .
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            探索我的个人项目和游戏作品集合，每一个都承载着创意与激情。
                        </p>
                    </div>
                </div>
            </div>

            {/* Projects Grid Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t bg-muted/30">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-sm text-muted-foreground">
                        <p>&copy; 2024 Neo Yu. 用心创造，用爱分享。</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
