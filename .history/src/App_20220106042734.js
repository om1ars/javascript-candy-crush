import { useEffect, useState } from "react";

const width = 8;
const candyColors = ["blue, green", "orange", "red", "purple", "red", "yellow"];

function App() {
  const [currentColor, setCurrentColor] = useState([]);
  const checkFroColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnofThree = [i, i + width, i + width * 2];
      const decidedColor = currentColor[i];
      console.log(decidedColor)
    }
  };

  checkFroColumnOfThree()
  const createBoard = () => {
    const randomColorArrangeMent = [];
    for (let i = 0; i < width * width; i++) {
      const randomDomNumber = Math.floor(Math.random() * candyColors.length);
      const randomColor = candyColors[randomDomNumber];
      randomColorArrangeMent.push(randomColor);
    }
    setCurrentColor(randomColorArrangeMent);
  };

  useEffect(() => {
    createBoard();
  }, []);

  console.log(currentColor);

  return (
    <div className="app">
      <div className="game">
        {currentColor.map((candyColor, i) => (
          <img key={i} style={{ backgroundColor: candyColor }} />
        ))}
      </div>
    </div>
  );
}

export default App;
