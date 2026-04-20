import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [filaActiva, setFilaActiva] = useState(0);
  const [colActiva, setColActiva] = useState(0);
  const [casillaActiva, setCasillaActiva] = useState(false);
  const arrayNum = [1,2,3,4,5,6,7,8,9]
  const [sudoku, setSudoku]= useState([
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
  ])
 

  function activarCasilla(indexFila, indexCol){
    setFilaActiva(indexFila);
    setColActiva(indexCol);
    const idCasilla = indexFila.toString()+indexCol.toString();
    const casillaActiva = document.getElementById(idCasilla);
    casillaActiva.classList.remove('sudoku-casilla');
    casillaActiva.classList.add('sudoku-casilla-activa');
  }

  function rellenarNum(num){
    let sudokuAux = [...sudoku];
    sudokuAux[filaActiva][colActiva]= num;
    setSudoku(sudokuAux);
    const idCasilla = filaActiva.toString()+colActiva.toString();
    const casillaActiva = document.getElementById(idCasilla);
    console.log(casillaActiva);
    casillaActiva.classList.remove('sudoku-casilla-activa');
    casillaActiva.classList.add('sudoku-casilla');
  }
  return (
    <>
      <div className='number-list'>
        {arrayNum.map((num)=>{
          return(
            <button className='number-button' onClick={()=> rellenarNum(num)}>
              {num}
            </button>
          )
        })}
      </div>
      <div>
        {sudoku.map((fila, indexFila) => {
          return(
            <div>
              {fila.map((numFila,indexCol) => {
                return(
                  <button className='sudoku-casilla' id={indexFila.toString()+indexCol.toString()} onClick={()=> activarCasilla(indexFila, indexCol)}>
                    {numFila}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
