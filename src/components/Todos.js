import {useSelector,useDispatch} from "react-redux"
import {useState,useEffect} from "react"
import {addTodo, addTodoLoading,addTodoSuccess,getTodoLoading,getTodoSuccess} from "../redux/Todos/action"
import axios from "axios"
import "./visuals.css"
import {TodoVisual} from './TodoVisual'

export const Todos = ()=>{
    const {loading,error,data} = useSelector((store) => store)
    const [tasks,setTask] = useState("");
    const [descrip,setDescrip] = useState("");
    const dispatch = useDispatch();
    const [del,setDel] = useState(true)

    useEffect(()=>{
        getTodos()
    },[del])

    const getTodos = ()=>{
        dispatch(getTodoLoading());
        axios.get("http://localhost:3003/todos").then(({data})=>{
            dispatch(getTodoSuccess(data));
            setDel(false);
        })
    }

    return loading?"Loading.....":(
        <>
           <input type="text" placeholder="Enter your todo" onChange={(e)=>{
               setTask(e.target.value)
           }}/>
           <input type="text" placeholder="Enter details of todo" onChange={(e)=>{
               setDescrip(e.target.value)
           }}/>
           <button onClick={ ()=>{
                dispatch(addTodoLoading());
                axios.post("http://localhost:3003/todos",{title: tasks, description:descrip , status: false}).then((data)=>{
                    dispatch(addTodoSuccess());
                    getTodos();
                }).catch((err)=>{
                    //error state inititated
                })

           }}>ADD</button>

         <div id="visualDiv">
             <div id="review">
                 Total Count of Tasks : {data.length}
             </div>

            <table id="todoTable">
                <thead>
                    <tr>
                        <td>SNo.</td>
                        <td>Task</td>
                        <td>Status</td>
                        <td>Mark Done</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                {
                data.map((e,i)=>{
                    // return <h3 key={e.id} >{e.title}</h3>
                    return <TodoVisual key={e.id} title={e.title} status={e.status} indx={i} id={e.id} getTodos={getTodos}/>
                })
                }
                </tbody>
            </table>

            

            {/* <div id="paginate">
                <button>Prev</button>
                <button>Next</button>
            </div> */}
        </div>
        </>
    );
}