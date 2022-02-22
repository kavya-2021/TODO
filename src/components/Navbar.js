import {Link} from 'react-router-dom'
export const Navbar = ()=>{
    return (
        <div>
            <Link to="/">Home</Link> &nbsp; &nbsp;
            {/* <Link to="/todos/:edit">TodoEdit</Link> &nbsp; &nbsp;
            <Link to="/todos/:id">TodoDesc</Link> &nbsp; &nbsp; */}
            {/* <Link to="/users">UsersList</Link> */}
        </div>
    );
}