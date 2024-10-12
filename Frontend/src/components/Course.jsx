import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import list from '../../public/List.json'
import Card from './Card'
import { Link } from 'react-router-dom'
function Course() {
    

    return (
        <>

            <div className='max-w-screen-2xl mx-auto md:px-20 px-4 container dark:bg-slate-900 dark:text-white '>
                <div className='item-center justify-center text-center pt-28'>

                    <h1 className='text-2xl md:text-4xl'>we're delighted to have you <span className='text-pink-500'>here :)</span></h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nesciunt magni! Corporis vel, veniam qui, est quod dolor facilis voluptatem earum officia reiciendis nesciunt labore eum! Doloremque quos delectus deserunt.</p>
                    <Link to='/'><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {

                        list.map((item) => (
                            // console.log("item",item)
                            <Card item={item} key={item.id} />
                        ))


                    }



                </div>
            </div>


        </>
    )
}

export default Course
