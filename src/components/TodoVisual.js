import { AiFillDelete,AiFillEdit,AiOutlineFileDone } from "react-icons/ai";
import { BiUndo } from "react-icons/bi";
import {DeleteBtn} from "./TodoButton"
import {ToggleBtn} from "./ToggleBtn"
import {EditBtn} from "./EditBtn"
import axios from "axios"

import {useParams,useLocation,useNavigate,Link} from 'react-router-dom'

export const TodoVisual = ({title,status,indx,id,getTodos})=>{
    const navigate = useNavigate();
    // const [title,useTitle] = useState("")
    function DeleteFunc(){
            alert(`Do you really want to delete this item?`)
            axios.delete(`http://localhost:3003/todos/${id}`)
            getTodos()
    }

     function ToggleFunc(){
        axios.patch(`http://localhost:3003/todos/${id}`,{status: !status})
        getTodos()
        whatToPrint()
     }

     function whatToPrint(){
        if(status) return <AiOutlineFileDone/>
        else return <BiUndo/>
     }
     function linkTo(){
        navigate(`./todos?q=${id}`)
     }

    return (
        <>
        <tr>
            <td> {indx+1} </td>
            <td style={{
                textDecorationLine : `${status?"line-through":"none"}`
            }} onClick={linkTo}>  { title }  </td>
            <td>{status?"Done":"Not Done"}</td>
            <td> 
               <ToggleBtn onClick={ ToggleFunc }>
                      {whatToPrint()}
                </ToggleBtn>
            </td>
            <td> 
               <EditBtn >
                    {/* <AiFillEdit/> */}
                    <Link style={{color:"black"}} to={`/todos/${id}`} > <AiFillEdit/> </Link> 
                </EditBtn>
            </td>
            <td>
                <DeleteBtn onClick={ DeleteFunc }>
                    <AiFillDelete/>
                </DeleteBtn>
            </td>
        </tr>
        </>
    )
}


//onClick={ EditFunc }