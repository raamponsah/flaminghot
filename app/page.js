"use client"
import ReciepeComponent from "@/app/components/ReciepeComponent";
import {useEffect, useState} from "react";

export default  function Page(){
   const [data,setData] = useState([])

    // Runs side effects like network requests
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


    return (
        <div className={"md:flex my-10 "}>
    <h1>{name}</h1>
         <div className={"md:grid md:grid-cols-4   max-w-5/6 px-4 gap-4"}>
             {
                 data.map((recipe, i)=>{
                     return <ReciepeComponent title={recipe.title} imageUrl={recipe.imageUrl} description={recipe.description}/>
                 })
             }
         </div>
        </div>
    )
}