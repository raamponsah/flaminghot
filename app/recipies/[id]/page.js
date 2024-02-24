'use client'
import React,{useState,useEffect} from 'react'
import {useSearchParams,usePathname} from "next/navigation";
import Image from "next/image";

const Page = () => {
    const p = usePathname()
    const [data,setData] = useState([])

    useEffect(() => {
        async function f(){
            const response =  await fetch('/data/Recipes.json');
            const fetched =  await response.json()
            return fetched
        }
        f().then(d=>{
            setData(d)

        })
    }, []);
    const pageIndex = parseInt(p.split("/")[2])

    const recipe = data[pageIndex]
    return (
        <div className={"flex my-10 space-y-4 mx-40  justify-center items-center "}>

                <div className={"w-5/6"}>
                    <Image src={recipe?.imageUrl} alt={recipe?.title} width={500} height={400}/>
                </div>
                <div className={"my-4 w-4/6"}>
                    <h1 className={"text-2xl"}>{recipe?.title}</h1>
                    <small>Description</small>
                    <p>
                        {recipe?.description}
                    </p>
<div className={"bg-amber-100 p-4"}>
    <h4>Ingredients</h4>
    {
        recipe?.ingredients.map((ing,i)=>{
            return <span className={"font-thin"} key={i}>{ing}</span>
        })
    }
</div>
                    <div className={"bg-gray-100 "}>
                        <h3 className={"bg-amber-500 p-3 text-white py-1"}>Instructions</h3>

                        <div className={"p-2"}>
                            {
                                recipe?.steps.map((step,i)=>{
                                    return (<p className={"py-2 text-sm font-thin"} key={i}>{step}</p>)
                                })
                            }
                        </div>
                    </div>
                </div>

        </div>
    )
}
export default Page
