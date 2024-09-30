interface props {
    name: string;
    type: string
}
const Input = ({ name, type }: props) => {
    return (
        <>
            <label>{name}</label>
            <input type={type} name={name} className="border-4 border-slate-500 rounded-lg p-2 hover:bg-slate-200">

            </input>
        </>

    )
}
export default Input;