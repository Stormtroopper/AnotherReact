import { useEffect, useState } from "react";
import "./index.css";
import { Square } from "./components/Square";
// function Square({ value, onClick }) {
//   return (
//     <button onClick={onClick} className="square">
//       {value}
//     </button>
//   );
// }
function App() {
  const [square, setsquare] = useState(Array(9).fill(""));
  const [Xturn, setXturn] = useState(true);
  const[status,setstatus]=useState('')
  function handleClick(getCurrent) {
    let cpy = [...square];
    if( getWinner(getCurrent)|| cpy[getCurrent])return;
    cpy[getCurrent] = Xturn ? "X" : "O";
    setXturn(!Xturn);
    setsquare(cpy);
  }
  useEffect(()=>{
if(!getWinner(square)&& square.every(item=>item!=='')){
  setstatus("Its a draw .Try Again!")
}else if(getWinner(square)){
  setstatus(`Winner is ${getWinner(square)}`)
}else{
  setstatus(`Next player is ${Xturn?'X':'O'}`)
}
  },[square,Xturn])
  function handleRestart(){
    setXturn(true)
    setsquare(Array(9).fill(''))
  }
  function getWinner(square) {
    const winner = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [2,5,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7]
    ];
    for(let i=0;i<winner.length;i++){
      const [a,b,c]=winner[i]
      if(square[a]&&square[a]===square[b]&&square[a]===square[c]){
        return square[a]
      }
    }
    return null
  }
  return (
    <>
      <h2 className="text-muted text-center fs-1">Welcome to Tic Tac Toe</h2>
      <div className="container" id="tic-tac-toe">
        <div className="row">
          <Square value={square[0]} onClick={() => handleClick(0)} />
          <Square value={square[1]} onClick={() => handleClick(1)} />
          <Square value={square[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={square[3]} onClick={() => handleClick(3)} />
          <Square value={square[4]} onClick={() => handleClick(4)} />
          <Square value={square[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={square[6]} onClick={() => handleClick(6)} />
          <Square value={square[7]} onClick={() => handleClick(7)} />
          <Square value={square[8]} onClick={() => handleClick(8)} />
        </div>
       <h2 className="font-bold">{status}</h2> 
       <button className="btn btn-danger" onClick={handleRestart}>Restart</button>
      </div>
    </>
  );
}

export default App;
