import React from 'react'
import Image from "next/image";
import headshotImg from "@/public/headshot.png";

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className="relative">
                <Image
                    src={headshotImg}
                    alt="Sagar's Portrait"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
            </div>
        </div>
    </section>
  )
}
