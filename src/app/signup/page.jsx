'use client'
import Image from "next/image";
import Link from "next/link";

import { FaGoogle } from "react-icons/fa6";
import { FaGithub,FaLinkedin  } from "react-icons/fa";

const Signup = () => {
    const handleLogin = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const password = form.password.value
        const newUser = {
          name,
          email,
          password,
        }
        const resp = await fetch('/signup/api',{
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            'content-type': 'application/json'
          },
        })
        if(resp.status === 200) return form.reset()
    }
    return (
        <div className="container mx-auto py-24">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            alt="login-image"
            height={540}
            width={540}
          />
        </div>
        <div className="border-2 p-12 rounded-lg">
        <h1 className='text-3xl mb-10 text-center font-semibold text-primary'>Sign Up</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className='flex justify-center items-center'>
            <button className='btn btn-[#fff] text-primary hover:text-black hover:btn-primary duration-300 rounded-full'><FaGoogle /></button>
            <button className='btn btn-[#fff] text-primary hover:text-black hover:btn-primary duration-300 rounded-full ms-2'><FaGithub /></button>
            <button className='btn btn-[#fff] text-primary hover:text-black hover:btn-primary duration-300 rounded-full ms-2'><FaLinkedin  /></button>
          
          </div>
          <div className='text-center mt-5'>
          <p className=''>Already have an account? <Link className='text-primary' href='/login'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;