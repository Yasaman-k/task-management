import { FormEvent, useState } from "react";
import { staticText } from "../../staticText";
import { addNewTask } from "./tasksSlice";
import { useDispatch } from "react-redux";

const AddTaskForm = () => {
  const [formData, setFormData] = useState<TaskType | any>();
  const dispatch = useDispatch<any>()

  const handleChange = (value: any, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      const body = Object.assign(formData, { completed: false })
      dispatch(
        addNewTask(
          body
        )
      )
    }
    e.currentTarget.reset();
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
