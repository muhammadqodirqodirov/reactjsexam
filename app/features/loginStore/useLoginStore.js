import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

 const loginCart =(set) => ({
    post: [],
    loading: false,
    error: "",
    postLogin: async (data) => {
      set({ loading: true });
      try {
        const res = await axios.post(
          "http://207.154.221.44:4002/api/login",
          data
        );
        if (res.status === 201) {
          return true;
        }
        set({ loading: false });
      } catch (error) {
        console.log(error);
        set({ error: "Xatolik yuz berdi" });
      }
    },
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
});

export const  useLogin=create(
    persist(loginCart,{
        name:"addLogin",
        storage:createJSONStorage(()=>sessionStorage)
    })
)
