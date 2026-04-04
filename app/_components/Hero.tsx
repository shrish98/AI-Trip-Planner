"use client";
import React from 'react'
import { Send, Globe, Plane, Landmark, Tent, ArrowDown } from 'lucide-react'
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

export default function Hero() {
    const { user } = useUser();
    const router = useRouter();

    const onSend = () => {
        if (!user) {
            router.push('/sign-in');
            return;
        }
        router.push('/create-new-trip')
    }
    return (
        <div className='mt-16 sm:mt-24 w-full flex flex-col items-center justify-center px-4'>
            {/* Content */}
            <div className='max-w-3xl w-full text-center space-y-6'>
                <h1 className='text-4xl md:text-5xl font-bold text-black tracking-tight'>
                    Hey, I'm your personal <span className='text-[#f56551]'>Trip Planner</span>
                </h1>
                <p className='text-lg text-gray-600 font-medium'>
                    Tell me what you want, and I'll handle the rest: Flights, Hotels, trip Planner - all in seconds
                </p>

                {/* Input Box */}
                <div className='mt-10 max-w-4xl mx-auto w-full'>
                    <div className='relative rounded-xl border border-gray-200 shadow-sm bg-white p-4 focus-within:ring-1 focus-within:ring-[#f56551] transition-all'>
                        <textarea
                            placeholder='Create a trip for Parise from New york'
                            className='w-full h-24 bg-transparent border-none outline-none resize-none text-base text-gray-800 placeholder-gray-400'
                        />
                        <button onClick={onSend} className='absolute bottom-4 right-4 bg-[#f56551] hover:bg-red-500 text-white p-2.5 rounded-lg transition-colors'>
                            <Send size={18} />
                        </button>
                    </div>

                    {/* Suggestion list */}
                    <div className='mt-4 flex flex-row flex-nowrap items-center gap-4 overflow-x-auto pb-2 scrollbar-hide'>
                        <div className='flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer bg-white border border-gray-100 rounded-full px-3 lg:px-4 py-2 shadow-sm hover:shadow-md transition-all whitespace-nowrap'>
                            <Globe className='text-blue-500' size={16} />
                            <span className='font-medium text-xs sm:text-sm'>Create New Trip</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer bg-white border border-gray-100 rounded-full px-3 lg:px-4 py-2 shadow-sm hover:shadow-md transition-all whitespace-nowrap'>
                            <Plane className='text-green-500' size={16} />
                            <span className='font-medium text-xs sm:text-sm'>Inspire me where to go</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer bg-white border border-gray-100 rounded-full px-3 lg:px-4 py-2 shadow-sm hover:shadow-md transition-all whitespace-nowrap'>
                            <Landmark className='text-orange-400' size={16} />
                            <span className='font-medium text-xs sm:text-sm'>Discover Hidden gems</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer bg-white border border-gray-100 rounded-full px-3 lg:px-4 py-2 shadow-sm hover:shadow-md transition-all whitespace-nowrap'>
                            <Tent className='text-amber-600' size={16} />
                            <span className='font-medium text-xs sm:text-sm'>Adventure Destination</span>
                        </div>
                    </div>

                    <h2 className='my-7 mt-14 flex gap-2 text-center space-y-6 flex items-center flex-col'> Not Sure where to start? <strong>See how it works</strong> <ArrowDown />   </h2>
                    <HeroVideoDialog
                        className="block dark:hidden mt-8"
                        animationStyle="from-center"
                        videoSrc="https://www.example.com/dummy-video"
                        thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
                        thumbnailAlt="AI Trip Planner Dashboard Preview"
                    />
                </div>
            </div>
        </div>
    )
}