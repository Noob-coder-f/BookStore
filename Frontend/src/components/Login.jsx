import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data =>
        console.log(data);
        // console.log("kas ho kya h")


    return (
        <>
            <div className=''>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/login' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        
                        <h3 className="font-bold text-lg">Login!</h3>

                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input type='email' placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md'
                                {...register("email", { required: true })} /><br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>

                            <span>Password</span><br />
                            <input type='password' placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md'
                                {...register("password", { required: true })} /><br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/*button */}
                        <div className='flex justify-around mt-4'>
                            <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-900 duration-200'>Login</button>
                            <p>Not Register <Link to='signup' className='underline cursor-pointer text-blue-500'>Signup</Link></p>
                        </div>
                        </form>
                    </div>
                </dialog>
            </div>

        </>
    )
}

export default Login
