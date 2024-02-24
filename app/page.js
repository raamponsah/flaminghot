import RecipieComponent from "@/app/components/Recipie.component";

export default function Page(){
    return (
        <div className={"md:flex my-10 "}>

         <div className={"grid grid-cols-4 max-w-5/6 px-4 gap-4"}>
             <RecipieComponent/>
             <RecipieComponent/>
             <RecipieComponent/>
             <RecipieComponent/>
             <RecipieComponent/>
             <RecipieComponent/>

         </div>
        </div>
    )
}