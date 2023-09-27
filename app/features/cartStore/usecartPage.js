import {create} from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"
const countStore=(set)=>({
    post:[],
    product:{},
    loading:false,
    error:""  ,
    count:1,
    addCart:(params)=>{
        const {newItem}= params
        set((state)=>{
            const newCart=[...state?.post,newItem]
            return{
                ...state,
                post:newCart
            }
        })
    },
    icrement:()=>set((state)=>({count : state.count + 1})),
    decrement:()=>set((state)=>({count : state.count - 1 })),
    reset:()=>set((state)=>({count : state.count - 1 }))
})

export const  useCartPage=create(
    persist(countStore,{
        name:"addpage",
        storage:createJSONStorage(()=>sessionStorage)
    })
)
