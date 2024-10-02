interface props {
    name: string;
}
const Textarea = ({ name }: props) => {
    return (
        <>
            <label>{name}</label>
            <textarea name={name} className="border-4 border-slate-500 rounded-lg p-2 hover:bg-slate-200">
            </textarea>
        </>

    )
}
export default Textarea;