import { FormEvent, useEffect, useState } from "react";
import { selectTaskById, stateEditTask, stateGetTaskById } from "./tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout";
import { useParams } from "react-router-dom";

const EditTaskForm = () => {
    const [formData, setFormData] = useState<TaskType | any>();
    const dispatch = useDispatch<any>()


    const task = useSelector(selectTaskById)
    const param = useParams();

    useEffect(() => {
        if (param.id) {
            dispatch(stateGetTaskById(Number(param.id)));
        }
    }, [dispatch]);


    const handleChange = (value: any, name: string) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!formData) {
            dispatch(
                stateEditTask(
                    {
                        id: Number(param.id),
                        task: task
                    }
                )
            )
        }
        else {
            const body = Object.assign(formData)
            dispatch(
                stateEditTask(
                    {
                        id: Number(param.id),
                        task: body
                    }
                )
            )
        }
    }

    return (
        <Layout>
            <div className=''>
                <h2>Edit new Task here</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col space-y-3'>
                        <input required autoComplete="off" type={'text'} defaultValue={task.title} name={'title'} onChange={(e) => handleChange(e.target.value, 'title')} />
                        <textarea required name={'description'} defaultValue={task.description} onChange={(e) => handleChange(e.target.value, 'description')} />
                        <button type="submit">edit task </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default EditTaskForm
