import {useState,useEffect} from "react"

import {useParams,useLocation,useNavigate} from 'react-router-dom'

import axios from "axios"

import {Link} from 'react-router-dom'

export const TodoEdit = ()=>{
    const {edit} = useParams()
    console.log(edit)
    const [task,setTask] = useState({});
    const navigate = useNavigate()

    function EditFunc(){
        alert(`Do you really want to update this item?`)
        axios.patch(`http://localhost:3003/todos/${edit}`,{title:task.title});
        navigate("/")
     }

    useEffect(()=>{
        axios.get(`http://localhost:3003/todos/${edit}`).then(({data})=>{
            console.log(data);
            setTask(data);
        })
    },[])
    return (
        <>
         <div>Hi your are in Todos Edit Page</div>
                <br/>
         <input type="text" placeholder="" value={task.title} onChange={
            (e)=> setTask({title:e.target.value})
         }/>
     
         <button onClick={EditFunc}>Confirm</button>
        </> 
    )
}