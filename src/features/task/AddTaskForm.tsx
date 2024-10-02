import { useState } from "react";
import { staticText } from "../../staticText";
import { taskAdded } from "./taskSlice";
import { useDispatch } from "react-redux";

const AddTaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDesc] = useState('')
  const dispatch = useDispatch()

  const onTitleChanged = (e: any) => setTitle(e.target.value)
  const onDescChanged = (e: any) => setDesc(e.target.value)

  const onSaveTask = () => {
    if (title && description) {
      dispatch(
        taskAdded(
          title,
          description,

        )
      )

      setTitle('')
      setDesc('')
    }
  }


  return (
    <div className=''>
      <h2>Add new Task here</h2>
      <form action="">
        <div className='flex flex-col space-y-3'>

          <input type={'text'} name={title} onChange={onTitleChanged} />
          <textarea name={'description'} value={description} onChange={onDescChanged} >
          </textarea>

          <button type="button" onClick={onSaveTask}>{staticText.AddTask} </button>
        </div>
      </form>
    </div>

  )
}

export default AddTaskForm

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
