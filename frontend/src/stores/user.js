import { defineStore } from "pinia";

export const useUserStore = defineStore('user',{
    state:()=>({
        userData:{},
        isLogged:false
        
    }),
    getters:{
        getUserData:(state)=>state.userData,
        getLogged:(state)=>state.isLogged
    },
    actions:{
        setUserData(data){
            this.userData = data;
        },
        setLogged(value){
            this.isLogged = value;
        }
    }
})