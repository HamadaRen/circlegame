import React, { useEffect } from 'react';
import { useState } from 'react';
import './Cell.css';
import circle from '../../../circle.png';
import cross from '../../../cross.png';

type cellProps = {
  id: number;
  count: number;
  setCountUp: React.Dispatch<React.SetStateAction<number>>;
  isMark: 'circle' | 'cross' | null;
  setIsMark: React.Dispatch<React.SetStateAction<'circle' | 'cross' | null>>;
  circleArray: number[];
  crossArray: number[];
  setCircleArray: React.Dispatch<React.SetStateAction<number[]>>;
  setCrossArray: React.Dispatch<React.SetStateAction<number[]>>;
  disable: boolean;
  setDisable: React.Dispatch<React.SetStateAction<boolean>>;
  winMsg: string;
};
export const Cell = ({
  id,
  count,
  setCountUp,
  isMark,
  setIsMark,
  circleArray,
  crossArray,
  setCircleArray,
  setCrossArray,
  disable,
}: cellProps) => {
  [isMark, setIsMark] = useState<'circle' | 'cross' | null>(null);

  const countUp = () => {
    setCountUp(count + 1);
  };

  // let circleArray: number[] = []
  // let crossArray: number[] = []
  const handleClick = () => {
    if (!circleArray.includes(id) && !crossArray.includes(id)) {

      if (count % 2 === 0) {
        setCircleArray([...circleArray, id]);
      } else if (count % 2 !== 0) {
        setCrossArray([...crossArray, id]);
      }
      countUp();
    } else if (circleArray.includes(id) || crossArray.includes(id)) {
      alert('そこには置くことができません');
    }
  };

  // useEffect(() => {
  //   setIsMark(null);
  // }, [id]);

  return (
    <button className="cell" disabled={disable} onClick={handleClick} style={{ overflow: 'hidden', background: '' }}>
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* {isMark === 'circle' ? (
          <img src={circle} alt="" style={{ width: '100%' }} />
        ) : (
          isMark === 'cross' && <img src={cross} alt="" style={{ width: '100%' }} />
        )} */}

        {/* <img
          src={circleArray.includes(id) ? circle : crossArray.includes(id) ? cross : }
          // src={isMark === 'circle' ? circle : isMark === 'cross' ? cross : ''}
          alt=""
          style={{ width: '100%', height: '100%' }}
        /> */}
        
        {circleArray.includes(id) ? (
          <img src={circle} alt="" style={{ width: '100%', height: '100%' }} />
        ) : crossArray.includes(id) ? (
          <img src={cross} alt="" style={{ width: '100%', height: '100%' }} />
        ) : (
          <></>
        )}


        {/* {id} */}
      </div>
    </button>
  );
};

export default Cell;
