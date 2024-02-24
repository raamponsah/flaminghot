import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiCookingPotLight } from "react-icons/pi";
import Image from "next/image"

const ReciepeComponent = ({title,description, excerpt,imageUrl}) => {
    return (
        <div className={"bg-gray-50 mt-4 border-t-4 border-amber-500 relative  p-2 min-w-[15em] space-y-2"}>

           <Image src={imageUrl} alt={title} width={200} height={200} priority={true}/>
            <h2 className={"font-bold"}>{title}</h2>
            <p className={"text-xs"}>
                {description}
            </p>
            <div className={"flex justify-between gap-2"}>

                <button className={"absolute right-4 top-2"}><FaRegHeart /></button>
                <button className={""}><PiCookingPotLight size={18} />
                </button>

            </div>
        </div>
    )
}
export default ReciepeComponent
