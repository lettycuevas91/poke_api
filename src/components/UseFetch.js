import React, {useState,useEffect} from 'react'
export const UseFetch = (url) => {
    const [res, SetRes] =useState({iniciando:true, data:null})
    
    useEffect(()=>{
        recogerdatos(url)
    },[url])
    
    async function recogerdatos(url){
        SetRes({iniciando:true, data:null})
        const resp=await fetch(url);
        const data=await resp.json();
        SetRes ({iniciando:false, data})
    }
return res
}