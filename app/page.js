import ReciepeComponent from "@/app/components/ReciepeComponent";

export default function Page(){


    return (
        <div className={"md:flex my-10 "}>

         <div className={"md:grid md:grid-cols-4   max-w-5/6 px-4 gap-4"}>
             <ReciepeComponent/>
         </div>
        </div>
    )
}