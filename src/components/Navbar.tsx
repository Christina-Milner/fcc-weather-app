import React from 'react'
import { MdWbSunny } from "react-icons/md";

type Props = {}

export default function Navbar({}: Props) {
    return (
        // INSTALL TAILWIND CSS INTELLISENSE EXTENSION AND IT'LL TELL YOU WHAT ALL THIS STUFF DOES ON HOVER OMG IT'S AMAZING
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
            <div className="h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto">
                <p className='flex items-center justify-center gap-2'>
                    <h2 className="text-gray-500 text-3xl">Weather</h2>
                    <MdWbSunny className='text-3x1 mt-1 text-yellow-300'/>
                </p>
            </div>
        </nav>
    );
}