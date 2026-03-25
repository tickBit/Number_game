import { useState } from "react"
import GoalSquare from "./GoalSquare"

type Props = {
    title: string
    grid: number[]
}

const GoalGrid = (props:Props) => {

    const [grid] = useState<number[]>(props.grid);


    return (
        <>
        <div className="max-w-96 justify-stretch">
            <h2 className="mb-3">{props.title}</h2>
            <div className="grid grid-cols-3">
                {grid && grid.map((n, i) => (
                    <GoalSquare key={i.toString()+"a"} number={n} /> ))}          
            </div>
        </div>
        </>
    )
}

export default GoalGrid