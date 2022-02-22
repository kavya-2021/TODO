import { ADD_TODO_LOADING, ADD_TODO_SUCCESS,GET_TODO_LOADING, GET_TODO_SUCCESS} from "./actionTypes";

export const todoReducer = (store = { loading: false, error:false, data :[] },{type,payload})=>{
   switch(type){
       case ADD_TODO_LOADING:
           return {...store, loading: true}
       case ADD_TODO_SUCCESS :
           return {...store, loading: false}  
       case GET_TODO_LOADING:
           return {...store, loading: true} 
       case GET_TODO_SUCCESS:
           return {...store, loading:false, data:payload} 
       default : return store            
   }
}