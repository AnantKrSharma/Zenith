"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SimpleAccordionProps {
    title: string
    content: string
}

export function AccordionNew({ title, content }: SimpleAccordionProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-800 bg-auto bg-opacity-90 backdrop-blur-sm">
            <button
                className="flex w-full items-center justify-between py-5 px-4 text-left text-white focus:outline-none hover:cursor-pointer hover:underline"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium">{title}</span>
                <ChevronDown
                className={cn("h-5 w-5 transform transition-transform duration-300", isOpen ? "rotate-180" : "")}
                />
            </button>
            <div
                className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
            >
                <div className="px-4 pb-5 text-gray-300">{content}</div>
            </div>
        </div>
    )
}
