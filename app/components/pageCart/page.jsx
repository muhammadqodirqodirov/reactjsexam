"use client"
import { useCartPage } from '@/app/features/cartStore/usecartPage'
import  { useEffect, useState } from 'react'
import { Minus } from './icon/minusCart'
import { PlusCart } from './icon/plusCart'
import { Header } from '../header/header'
import Image from 'next/image'
import { cartFood } from '@/public'


 const CartPage = () => {
  const cart=useCartPage(state=>state.post)
  const product = useCartPage(state=>state.product)
  const icrement=useCartPage(state=>state.icrement)
  const decrement=useCartPage(state=>state.decrement)
  const count=useCartPage(state=>state.count)
  if(!true){
    return{...cart,}
  }
  const counter=0
const reset =useCartPage(state=>state.reset)
  return<section className='bg-bg-body'>
  <Header/>
          <div className='container mx-auto'>
            {cart.length===0 ?(
              <h1 className=' container mx-auto flex justify-center items-center hover:transition-all hover:text-6xl hover:border-solid font-medium text-3xl ' style={{paddingTop:"50vh"}}>Maxsulotlar mavjud emas</h1>
            )
            :(<>
                <div className='mb-52'>
                {cart?.map(({item,index})=><div className='container  mx-auto max-w-max-cart flex mb-5' key={index}>
                <div className=' w-full flex justify-between bg-white'>
                <div className='flex gap-3 items-center ml-2'>
                <img className='w-24' src={`http://207.154.221.44:4002/${item?.image}`} alt="img" />
                <div>
                <p className='text-2xl font-semibold text-first-color'>{item?.name}</p>
                {count>0 ? 
                <p className='text-lg font-semibold text-first-color'>${item.price * count}</p>
                :
                <p className='text-lg font-semibold text-first-color'>${item?.price}</p>

              }
                </div>
                </div>
                <div className='flex items-center mr-2 gap-3 justify-between'>
                  <button onClick={decrement} className='py-1  p-2 border border-black rounded-lg'><Minus /></button>
                  <p>{count}</p>
                  <button onClick={icrement} className='py-1.5 px-2.5 bg-black rounded-lg'><PlusCart/></button>
                </div>
                </div>
              </div>
           )}
                </div>
                <div className='container mx-auto max-w-max-cart'>
                <div className='border border-' >
                    <h3>Subtotal</h3>
                  </div>
                  <div>
                    <h3>Delivery</h3>
                    <p></p>
                  </div>
                  <div>
                    <h3>Total</h3>
                    <p></p>
                  </div>
                </div>
                       </>)
          }
          </div>
          
        <div className='max-w-w-page bg-no-repeat   container mx-auto mb-24 bg-bg-color'  style={{ borderRadius:"30px"}}>
           <div className='flex justify-between max-w-content-max'>
           <div className='pt-9 pl-16 pb-14 max-w-md w-full' >
                <h2 className='text-white text-7xl font-extrabold mb-3' >
                GET 50%
                </h2>
                <div className='max-w-md'>
                <form className='max-w-md w-full relative'>
                <input className='pl-5 w-full py-5 rounded-xl bg-white opacity-80 '  style={{   boxShadow: "0px 7.25333px 45.33334px 0px rgba(0, 0, 0, 0.10)"}} type="text" placeholder=' Enter Your Email Address' />
                <button className='rounded-lg absolute right-2 top-2/4 -mt-7  bg-bg-color w-32 py-4 text-seven text-sm font-medium uppercase'>
                subscribe
                </button>
                </form>
                </div>
            </div>
            <div className='mt-16' >
              <Image src={cartFood} alt='img'/>
            </div>
           </div>
        </div>
  </section>
}
export default CartPage