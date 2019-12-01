import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { setTimeout } from 'core-js'


export const GetResources = (endpoint) => {
    const [items, setItems] = useState([])

    const getItems = async (endpoint) => {
        const response = await axios.get(`http://localhost:3001/${endpoint}`)
        setTimeout(()=>{ setItems(response.data); }, 2222)
    }
    
    useEffect(()=>{
        debugger
        console.log("helper hook called!")
        getItems(endpoint)    
    }, [])
    return items
}

export const jsonPlaceHolderApi = axios.create({
    baseURL:'http://localhost:3001/'
})

 