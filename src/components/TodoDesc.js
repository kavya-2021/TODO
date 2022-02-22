import {useState,useEffect} from "react"

import {useParams,useLocation,useNavigate} from 'react-router-dom'


import axios from "axios"

export const TodoDesc = ()=>{
    const local = useLocation();
    const params = new URLSearchParams(local.search)
    const query = params.get("q");

    const [desc,setDesc] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:3003/todos/${query}`).then(({data})=>{
            setDesc(data);
        })
    },[])
    return (
        <>
        <div>Details About the task</div>
         <h3>Title:{desc.title}</h3>
         <p>What to Do: {desc.description}</p>
        </>
    )
}