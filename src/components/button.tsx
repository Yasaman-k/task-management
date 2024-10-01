interface props {
    name: string
}
const Button = ({ name }: props) => {
    return (
        <>
            <button className=" bg-slate-500 rounded-lg p-2 text-white hover:bg-slate-400">
                {name}
            </button>
        </>
    )
}
export default Button;