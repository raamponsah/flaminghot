import React from 'react'

const RecipieComponent = () => {
    return (
        <div className={"bg-gray-50 border-t-4 border-purple-600 p-2 min-w-[15em] space-y-2"}>
            <h2 className={"font-bold"}>Delicious Cazalore</h2>
            <p className={"text-xs"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore doloremque dolores ducimus
                error illum iste numquam quisquam ut! Accusantium beatae corporis dicta inventore libero mollitia natus
                nihil quod velit?
            </p>
            <div className={"flex justify-between"}>
                <button>Like</button>
                <button>Try out</button>
            </div>
        </div>
    )
}
export default RecipieComponent
