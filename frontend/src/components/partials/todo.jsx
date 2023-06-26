import moment from "moment/moment"
import { toast } from "react-toastify"
import { deleteTodoListApi, markTodoListApi } from "../../services/api"
export const Todo =({todo,setRefreshList})=>{
const handleDelete = async ()=>{
 const result = await deleteTodoListApi({
    todo_id: todo._id
 })
console.log('deletetodo-',result)
 if(result.data.status===200){
    setRefreshList(new Date())
    toast('Deleted')
 }else{
    toast('Failed to delete')
 }
}


const handleMarkTodo = async ()=>{
    const result = await markTodoListApi({
        todo_id: todo._id
     })
    console.log('marktodo-',result)
     if(result.data.status===200){
        setRefreshList(new Date())
        toast(result.data.message)
     }else{
        toast('Failed to mark')
     }
}

return <>
    <div className="col-sm-3 mx-3 my-2 alert bg-light">
      <div className="card-header">
 {todo.isCompleted ? "Completed" : 'Not Completed'}
      </div>
      <div className="card-body">
      <h5 className="card-title" style={{textDecoration: todo.isCompleted?'line-through':'none'}}>{todo.desc}</h5>
       <p className="card-text">{moment(todo.date).fromNow()}</p>
       
      </div>
      <div className="actionButtons d-flex" style={{justifyContent:"space-between",alignItems:"center"}}>
        <div className="deleteButton">
            <button className="" onClick={handleDelete}>delete</button>
        </div>
        <div className="markTodo">
            <button className="" onClick={handleMarkTodo}>
                {
                    todo.isCompleted?'Mark Uncomplete' : 'Mark Complete'
                }
            </button>
        </div>
       </div>
    </div>
</>
}