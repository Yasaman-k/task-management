import { FormEvent, useState } from "react";
import { staticText } from "../../staticText";
import { taskAdded } from "./tasksSlice";
import { useDispatch } from "react-redux";

const AddTaskForm = () => {
  const [formData, setFormData] = useState<TaskType | any>();
  const [description, setDesc] = useState('')
  const dispatch = useDispatch()

  const handleChange = (value: any, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      const body = Object.assign(formData, { completed: false })
      dispatch(
        taskAdded(
          body.title, body.description, body.completed
        )
      )
    }
  }


  return (
    <div className=''>
      <h2>Add new Task here</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-3'>
          <input required autoComplete="off" type={'text'} name={'title'} onChange={(e) => handleChange(e.target.value, 'title')} />
          <textarea required name={'description'} onChange={(e) => handleChange(e.target.value, 'description')} />
          <button type="submit">{staticText.AddTask} </button>
        </div>
      </form>
    </div>
  )
}

export default AddTaskForm

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
