'use client'

// import { Github } from 'lucide-react'
import { SearchCommand } from './search-command'
import { ThemeToggle } from './theme-toggle'
// import { Button } from './ui/button'

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-full items-center px-6">
                <div className="mr-4 hidden md:flex">
                    <a
                        className="mr-6 flex items-center space-x-2"
                        href="/"
                    >
                        <span className="hidden font-bold sm:inline-block">
                            Precious Memories
                        </span>
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <SearchCommand />
                    </div>
                    <nav className="flex items-center space-x-1">
                        {/* <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 px-0"
                            asChild
                        >
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </Button> */}
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
