import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';

function Signup() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data =>
        console.log(data);
    return (
        <div className='h-screen flex  items-center justify-center'>
            <div id="" className="w-[600px]">
                <div className="modal-box ">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</Link>

                        <h3 className="font-bold text-lg">Signup!</h3>

                        <div className='mt-4 space-y-2'>
                            <span>Name</span><br />
                            <input type='text' placeholder='Enter your Full Name' className='w-80 px-3 py-1 border rounded-md'
                                {...register("name", { required: true })} /><br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}


                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input type='email' placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md'
                                {...register("email", { required: true })} /><br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        <div className='mt-4 space-y-2'>

                            <span>Password</span><br />
                            <input type='password' placeholder='Enter New Password' className='w-80 px-3 py-1 border rounded-md'
                                {...register("passsword", { required: true })} /><br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        {/*button */}
                        <div className='flex justify-around mt-4'>
                            <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-900 duration-200'>Signup</button>
                            <p className='text-xl'>Already have account <button className='underline cursor-pointer text-blue-500' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button><Login /></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
