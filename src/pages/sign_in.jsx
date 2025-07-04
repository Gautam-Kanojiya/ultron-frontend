import React from 'react';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#fffaff] flex flex-col md:flex-row items-center justify-center px-6 py-12">
      {/* Left Side - Company Motto */}
      <div className="w-full md:w-1/2 flex flex-col justify-center mb-12 md:mb-0 md:pr-10">
        {/* <h2 className="text-sm tracking-widest text-[#0a2463] font-semibold mb-4 uppercase">
          LogiXJunction 
        </h2> */}

        <img src="/LOGO.png"   className='h-20 w-20' />

        <h1 className="text-4xl sm:text-5xl font-bold text-[#1e1b18] 
        leading-tight mb-6">
          YOUR JUNCTION  <span className="text-[#030712]">TO</span><br />
          <span className="text-[#d8315b]">SMART</span> <></> 
           <span className="text-[#3e92cc]">LOGISTICS</span>
        </h1>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 max-w-md bg-white shadow-xl rounded-2xl p-8 border border-[#eee] hover:shadow-2xl transition-all duration-300">
        <h2 className="text-2xl font-semibold text-center text-[#0a2463] mb-6">
          Login to your account
        </h2>
        <form className="space-y-6">
          <div className="relative">
            <input type="text" required
              className="peer w-full px-4 pt-6 pb-2 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e92cc] transition-all duration-200 placeholder-transparent" 
              placeholder="Username" />
            <label className="absolute left-4 top-2 text-sm text-[#1e1b18] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#3e92cc]">
              Username
            </label>
          </div>

          <div className="relative">
            <input type="password" required
              className="peer w-full px-4 pt-6 pb-2 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3e92cc] transition-all duration-200 placeholder-transparent" 
              placeholder="Password" />
            <label className="absolute left-4 top-2 text-sm text-[#1e1b18] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#888] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#3e92cc]">
              Password
            </label>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#3e92cc]" /> Remember me
            </label>
            <a href="/forgot-password" className="text-[#d8315b] ">Forgot password?</a>
          </div>

          <button type="submit"
            className="w-full py-2 mt-2 bg-[#0a2463] text-white font-medium rounded-md hover:bg-[#3e92cc] transition-all duration-200">
            Login
          </button>

          <div className='space-y-18'>
            <p className="text-center  text-sm text-[#0a2463]">
            Don’t have an account <br />
            <span>  <a href="/register" className=" hover:text-[#d8315b]">Create account →</a> </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
