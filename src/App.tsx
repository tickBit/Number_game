import { useEffect, useState } from 'react'
import Grid from './components/Grid'

import './App.css'
import GoalGrid from './components/GoalGrid'

function App() {

  const initGrid = [0,0,0,0,0,0,0,0,0];

  const [grid, setGrid] = useState<number[]>(initGrid);
  const [done, setDone] = useState(false);
  const [klick, setKlick] = useState(false);

  const cleanup = () => {
    setDone(false);
    setGrid(initGrid)
  }

  useEffect(() => {

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

        const init = () => {

            for (let i = 0; i < 9; i++) {
                const positions:number[] = [];

                grid.forEach((n, i) => {
                    if (n === 0) {
                        positions.push(i);
                    }
                });

                const pos = Math.floor(Math.random() * (positions.length + 1));
                const position = positions[pos];

                handleNumbers(position);

                if (grid.indexOf(0) === -1) setDone(true);

            }
        }

        init();
        
        return () => {

        }

    }, [grid, done]);

  return (
    <>
      <div className='flex-block justify-center'>
        <h1 className='text-4xl'>Number game</h1>
        <div className='flex mt-6 align-center justify-center gap-8'>
          {done === true && (
          <>
          <GoalGrid title="The Goal" grid={grid} />
          <Grid title="You" grid={grid} klick={klick} />
          </>
          )}
        </div>
        <div className='flex-block justify-center'>
          <button className="mt-5 border-red-200 p-2 rounded-xl bg-red-400 hover:bg-red-300 active:bg-red-700" onClick={ () => cleanup() }>New game</button>
          <button className="mt-5 ml-6 border-green-200 p-2 rounded-xl bg-green-400 hover:bg-green-300 active:bg-green-700" onClick={() => setKlick(!klick)}>Retry</button>
        </div>
      </div>
    </>
  )
}

export default App
