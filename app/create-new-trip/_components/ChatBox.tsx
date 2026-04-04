"use client";

import React from "react";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ChatBox() {
    const onSend = () => {
        console.log("Send");
    }
    return (
        <div className="h-[87vh] flex flex-col">
            <section className="flex-1 overflow-y-auto p-4">
                <div className="flex justify-end mt-2">
                    <div className='max-w-lg bg-primary text-white px-4 py-2 rounded-lg'>
                        User Msg

                    </div>
                </div>
                <div className='flex justify-start mt-2'>
                    <div className='max-w-lg bg-gray-100 text-black  px-4 py-2 rounded-lg'>
                        AI Msg
                    </div>
                </div>
            </section>
            <section>
                <div className='relative rounded-xl border border-gray-200 shadow-sm bg-white p-4 focus-within:ring-1 focus-within:ring-[#f56551] transition-all'>
                    <textarea
                        placeholder='Create a trip for Parise from New york'
                        className='w-full h-24 bg-transparent border-none outline-none resize-none text-base text-gray-800 placeholder-gray-400'
                    />
                    <button onClick={onSend} className='absolute bottom-4 right-4 bg-[#f56551] hover:bg-red-500 text-white p-2.5 rounded-lg transition-colors'>
                        <Send size={18} />
                    </button>
                </div>
            </section>
        </div>
    );
}