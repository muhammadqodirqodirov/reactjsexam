import {create} from "zustand"
import axios from "axios"
import { createJSONStorage, persist } from "zustand/middleware";
const registerCart =(set)=>({
    post:[],
    loading:false,
    error:""  ,
    postRegister: async(data)=>{
        set({ loading: true });
        try {
          const res = await axios.post(
            "http://207.154.221.44:4002/api/register",
            data
          );
          if (res.status === 201) {
            localStorage.setItem("token", `Bearer ${res.data.data}`)
            return true;
          }
          set({ loading: false });
        } catch (error) {
          console.log(error);
          set({ error: "Xatolik mavjud" });
        }
    }  
}) 
export const  useRegister=create(
    persist(registerCart,{
        name:"addRegister",
        storage:createJSONStorage(()=>sessionStorage)
    })
)
