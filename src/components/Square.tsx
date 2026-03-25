type Props = {
    number: number
    onClick: () => void
}

const Square = (props:Props) => {

    return (
        <>
            {props.number === 0 && (
            <div className="w-32 h-32 bg-gray-500 hover:bg-gray-700 text-sky-50 text-9xl border-4 border-mist-700 rounded-xl" onClick={props.onClick}>
                {props.number}
            </div>
            )}

            {props.number === 1 && (
            <div className="w-32 h-32 bg-sky-500 hover:bg-sky-700 text-sky-50 text-9xl border-4 border-mist-700 rounded-xl" onClick={props.onClick}>
                {props.number}
            </div>
            )}

            {props.number === 2 && (
            <div className="w-32 h-32 bg-emerald-500 hover:bg-emerald-700 text-sky-50 text-9xl border-4 border-mist-700 rounded-xl" onClick={props.onClick}>
                {props.number}
            </div>
            )}

            {props.number === 3 && (
            <div className="w-32 h-32 bg-amber-300 hover:bg-amber-400 text-sky-50 text-9xl border-4 border-mist-700 rounded-xl" onClick={props.onClick}>
                {props.number}
            </div>
            )}

            {props.number === 4 && (
            <div className="w-32 h-32 bg-purple-400 hover:bg-purple-600 text-sky-50 text-9xl border-4 border-mist-700 rounded-xl" onClick={props.onClick}>
                {props.number}
            </div>
            )}
        </>
    )
}

export default Square;