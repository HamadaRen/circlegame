import { Cell } from './cell/Cell';
import './Board.css';
import { useEffect, useState } from 'react';
import React from 'react';

export const Board = () => {
  const [count, setCountUp] = useState<number>(0);
  const [isMark, setIsMark] = useState<'circle' | 'cross' | null>(null);
  const [circleArray, setCircleArray] = useState<number[]>([]);
  const [crossArray, setCrossArray] = useState<number[]>([]);
  const [disable, setDisable] = useState<boolean>(false)

  const [winMsg, setWinMsg] = useState<string>('');

  let array: number[] = [];
  for (let num = 1; num <= 9; num++) {
    array.push(num);
  }


  const lines: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  useEffect(() => {
    if(circleArray.length <= 2){
      return;
    }else{
      const resultCircle = lines.map((numArray) => numArray.every((value) => circleArray.includes(value)))
      
      console.log(resultCircle)
      if (resultCircle.includes(true)) {
        setWinMsg('○の勝ち');
        setDisable(true)
        return;
      }
    }
    
    // const resultCircle = lines[0].every((num) => circleArray.includes(num));
    

    if(crossArray.length <= 2){
      return;
    }else{
      const resultCross = lines.map((numArray) => numArray.every((value) => crossArray.includes(value)))
  
      console.log(resultCross)
      if (resultCross.includes(true)) {
        setWinMsg('×の勝ち');
        setDisable(true)
        return;
      }
    }
    // const resultCross = lines[0].every((num) => crossArray.includes(num))

  }, [circleArray, crossArray]);

  // if (circleArray.includes(lines[0])) {
  //   alert('○の勝ち')
  // } else if (crossArray.includes(lines[0])) {
  //   alert('×の勝ち');
  // }

  return (
    <>
      <div className="board">
        {array.map((num) => (
          <Cell
            key={num}
            id={num}
            count={count}
            setCountUp={setCountUp}
            isMark={isMark}
            setIsMark={setIsMark}
            circleArray={circleArray}
            crossArray={crossArray}
            setCircleArray={setCircleArray}
            setCrossArray={setCrossArray}
            disable={disable}
            setDisable={setDisable}
            winMsg={winMsg}
          />
        ))}
      </div>
      {winMsg && <h1>{winMsg}</h1>}
    </>
  );
};
export default Board;
