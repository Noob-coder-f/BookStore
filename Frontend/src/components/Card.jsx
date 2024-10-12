import React from 'react'

function Card(item) {
    const data = item.item;
    // const data = item;
    // console.log("props", data)
    return (
        <>
            <div className='mt-4 my-3'>
                <div className="card bg-base-100 w-70 shadow-xl mx-2 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={data.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.title}!
                            <div className="badge badge-secondary">Free</div>
                        </h2>
                        <p>{data.discription}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${data.price}</div>
                            <div className=" rounded-full px-2 py-1 border-[2px] cursor-pointer hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
