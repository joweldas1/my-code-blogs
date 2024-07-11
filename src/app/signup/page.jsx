"use client"
import { url } from '@/service/commonUrl/url';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

const signup = () => {
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const user ={name,email,password}

        const res =  await fetch(`${url}/signup/api`,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(user),
        })
        if(res.status===400){
          return toast.error("Already use saved in DB")
        }
        if(res.status===200||201){
          console.log("user saved in db")
            e.target.reset()
            return toast.success("User created Done")
        }

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"name='name' placeholder="name" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="url"name='imageUrl' placeholder="Image url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <h1>
          Already have an account, Please  <Link href={'/login'}>Login</Link> 

          </h1>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default signup;