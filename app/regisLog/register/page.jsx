"use client"
import { schemeRegister } from '@/app/scheme/scheme-register'
import React from 'react'
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { Logo } from '@/app/assets/icon/logo'
import { registerLitle, registerLogo } from '@/app/assets'
import Image from 'next/image'
import { Grafic } from '@/public/assets/grafic'
import { Password } from '@/app/assets/icon/password'
import { Email } from '@/app/assets/icon/email'
import { Fullname } from '@/app/assets/icon/fullname'
import Link from 'next/link'
import { useRegister } from '@/app/features/registerStore/useRegister'
import { useRouter } from 'next/navigation'
const Register = () => {
  const router = useRouter()




  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemeRegister) });
  const postData = useRegister((set) => set.postRegister);
  const submit = (data) => {
    postData({...data,name:data.fullname}).then((res)=>{
      router.replace("/")
      console.log(res.data);
      if(res.status===201){}
    })
  };
  return <>
        <div className='container mx-auto flex justify-between'>
          <div className='flex max-w-divinput flex-col gap-60 w-full  mt-8'>
          <div className='ml-4'><Logo/></div>
            <div className='pl-24'>
            <form onSubmit={handleSubmit(submit)} className='mx-w-inputs'>
                 <div className='relative'>
                 <input
                 className='mb-6 py-6 pl-16 bg-bg-color-input w-full rounded-2xl' 
                 {...register("fullname")}
                 error={errors?.fullname?.message}
                 type="text" 
                 placeholder='Enter your fullname'/> 
                 <div className="absolute top-1/4 left-4 ">
                 <Fullname/>  
                 </div>
                  </div>                
                <div className='relative'>
                <input
                 className='py-6 mb-6  pl-16 bg-bg-color-input w-full rounded-2xl'
                 {...register("email")} 
                 error={errors?.email?.message}
                 type="text" 
                 placeholder='Enter your email'/> 
                 
                 <div className="absolute top-1/4 left-4 ">
                 <Email/>
                 </div>
                  </div>                  
                  <div className='relative'>
                  <input
                 className='py-6 mb-6  pl-16 bg-bg-color-input w-full rounded-2xl'
                 {...register("password")} 
                 error={errors?.password?.message}
                 type="text" 
                 placeholder='Enter your password'/> 
                  <div className="absolute top-1/4 left-4 ">
                  <Password/>  
                  </div>
                    </div>      
                    <button type='submit'className='bg-bg-button w-full py-6 rounded-2xl font-semibold text-lg text-white'>SIGN UP</button>                   
                       
            </form>
            <div className='flex mt-6 justify-center'>
              <h3 className='font-normal text-third text-lg'>Already Have An Account?</h3>
              <Link className=' font-bold text-lg text-fourth' href="/regisLog/login">Log in</Link>
            </div>
            </div>
          </div>
            <div className='bg-bg-color max-w-wrapper w-full '>
                <div className='pt-60  relative pl-40'>
                <Image src={registerLogo} width={360} height={358} alt="meal" priority/>
                <div  className='rounded-3xl px-4 absolute flex gap-5 items-center max-w-mxs bg-white' style={{top:"50%" , marginTop:"-85px",right:"60px"}}>
                  <Image src={registerLitle} alt='img' priority/>
                  <div >
                    <h3 className='text-xl font-bold text-first-color'>Chicken Hell</h3>
                    <p className='text-xs font-semibold text-first-color'>On The Way</p>
                  </div>
                  <p className='mt-10 text-xs font-medium text-second'>3:09 PM</p>
                 </div>
                <div className='absolute top-6 mt-40' style={{left:"15.3%",top:"42%"}}>
                  <Grafic/>
                </div>
                </div>
                <div>
                  <h2 className='font-extrabold text-white text-4xl text-center mb-5 mt-20'>Find Foods With Love</h2>
                  <p className='text-second text-sm font-medium max-w-text-max text-center mx-auto pb-40'>Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.</p>
                </div>
            </div>
        </div>
  </>
}

export default Register