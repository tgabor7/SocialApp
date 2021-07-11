import { useEffect, useState } from "react"

export const usePosts = ()=>{

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(()=>{
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/photos').then(r=>{
            return r.json()
        }).then(d=>{
            setLoading(false)
            setData(d)
        })
    
    }, [])
    

    return [loading, data]
}

const validateLogin = (username, password)=>{
    if(username==='asd' && password === 'qwe') return true
    return false
}

export const useLogin = ()=>{

    const [loggedin, setLoggedin] = useState(false)
    


    return [loggedin, (username, password)=>{
        if(validateLogin(username,password)) setLoggedin(true)
        else setLoggedin(false)
    }]

}