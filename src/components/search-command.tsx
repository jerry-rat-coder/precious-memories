'use client'

import * as React from 'react'
import { Search } from 'lucide-react'
import { projects } from '@/data/projects'

import { Button } from '@/components/ui/button'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'

export function SearchCommand() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant="outline"
                className="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
                onClick={() => setOpen(true)}
            >
                <Search className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline-flex">
                    Search projects...
                </span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog
                open={open}
                onOpenChange={setOpen}
            >
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Projects">
                        {projects.map((project) => (
                            <CommandItem
                                key={project.id}
                                value={project.title}
                                onSelect={() => {
                                    runCommand(() => {
                                        window.open(
                                            project.link,
                                            '_blank',
                                            'noopener,noreferrer',
                                        )
                                    })
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col">
                                        <span className="font-medium">
                                            {project.title}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {project.description}
                                        </span>
                                    </div>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
