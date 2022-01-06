import { useEffect } from "react";

const width = 8;
const candyColors = ["blue, green", "orange", "red", "purple", "red", "yellow"];

function App() {
  const [currentColor, setCurrentColor]
  const createBoard = () => {
    const randomColorArrangeMent = [];
    for (let i = 0; i < width * width; i++) {
      const randomDomNumber = Math.floor(Math.random() * candyColors.length);
      const randomColor = candyColors[randomDomNumber];
      randomColorArrangeMent.push(randomColor);
    }
    console.log(randomColorArrangeMent);
  };

  useEffect(() => {
  createBoard()

  },[])

  return <div className="app">
<div className="game">
  {}
</div>
  </div>;
}

export default App;
