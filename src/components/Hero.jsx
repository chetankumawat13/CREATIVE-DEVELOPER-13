import React, { useEffect, useRef, useState } from 'react'

const Hero = () => {
    const boardRef = useRef(null);
  const blockSize = 30;

  const [grid, setGrid] = useState({ rows: 0, cols: 0 });

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const cols = Math.floor(board.clientWidth / blockSize);
    const rows = Math.floor(board.clientHeight / blockSize);

    setGrid({ rows, cols });
  }, []);
  return (
    <div className='hero'>
        <div className="top">
            <div className="ttop">
                <h1>CREATIVE</h1>
                <h1>DEVELOPER</h1>
            </div>
            <div className="tbottom">
                <p>I design and build immersive digital experiences where clean code meets strong visual identity — crafting interfaces that feel smooth, intentional, and alive.</p>
                <p>I’m a passionate creative developer who blends clean code, motion, and thoughtful UI to turn ideas into fast, scalable, and visually striking digital experiences.</p>
            </div>
        </div>
        <div className="bottom" ref={boardRef}>
        {Array.from({ length: grid.rows * grid.cols }).map((_, i) => (
          <div className="block" key={i}></div>
        ))}
        <img className='i1' src="/hero.png" alt="" />
        <img className='i2' src="/s1.png" alt="" />
        <img src="/s2.png" alt="" className="i3" />
        <img src="/s3.png" alt="" className="i4" />
        <img src="/s4.png" alt="" className="i5" />
        <img src="/s5.png" alt="" className="i6" />
        <img src="/s6.png" alt="" className="i7" />
        <img src="/s7.png" alt="" className="i8" />
        <img src="/s8.png" alt="" className="i9" />
      </div>
    </div>
  )
}

export default Hero