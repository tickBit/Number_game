import { useEffect, useState } from "react"

import Square from "./Square"

type Props = {
    title: string
    grid: number[]
    klick: boolean
}

const Grid = (props:Props) => {

    const initGrid = [0,0,0,0,0,0,0,0,0];

    const [grid, setGrid] = useState<number[]>(initGrid);
    const [won, setWon] = useState(false);

    const handleNumbers = (p:number) => {

        const workArr:number[] = [];

        grid.forEach((n,i) => {
            workArr[i] = n;
        });

        const x = p % 3;
        const y = Math.floor(p / 3);

        if (workArr[x + y * 3] !==0) return;

        if (workArr[x + y * 3] === 0) workArr[x + y * 3] = 1;

            

                if (x - 1 >= 0) {
                    if (workArr[x - 1 + y * 3] !== 0) { if (workArr[x - 1 + y * 3] === 4) workArr[x - 1 + y * 3] = 1; else workArr[x - 1 + y * 3] = workArr[x - 1 + y * 3] + 1; }
                }
                
                if (x + 1 <= 2) {
                    if (workArr[x + 1 + y * 3] !== 0) { if (workArr[x + 1 + y * 3] === 4) workArr[x + 1 + y * 3] = 1; else workArr[x + 1 + y * 3] = workArr[x + 1 + y * 3] + 1; }
                }

                if (y - 1 >= 0) {
                    if (workArr[x + (y - 1) * 3] !== 0) { if (workArr[x + (y - 1) * 3] === 4) workArr[x + (y - 1)*3] = 1; else workArr[x + (y - 1)*3] = workArr[x + (y - 1)*3] + 1; }
                }

                if (y + 1 <= 2) {
                    if (workArr[x + (y + 1) * 3] !== 0) { if (workArr[x + (y + 1) * 3] === 4) workArr[x + (y + 1)*3] = 1; else workArr[x + (y + 1)*3] = workArr[x + (y + 1)*3] + 1; }
                }
            
        

        setGrid(workArr);
        
    }

    useEffect(() => {
        
        const retry = () => {
            setGrid([0,0,0,0,0,0,0,0,0]);
            setWon(false);
        }

        if (props.klick || !props.klick) {
            retry();
        }

    }, [props.klick]);


    useEffect(() => {

        const init = () => {

            if (JSON.stringify(grid) == JSON.stringify(props.grid)) {
                setWon(true);
            }

            
        }

        init()
    
        }, [grid, props.grid, won]);

    return (
        <>
        {won && (
        <div className="absolute z-40 top-50">
            <span className="flex animate-ping text-red-500 text-4xl z-40">Congratulations!</span>
        </div>
        )}

        <div className="max-w-96 justify-stretch">
            <h2 className="mb-3">{props.title}</h2>
            <div className="grid grid-cols-3">
                {grid && grid.map((n, i) => (
                    <Square key={i} number={n} onClick={() => handleNumbers(i)} /> ))}
            </div>
        </div>
        </>
    )
}

export default Grid