const width = 8;
const candyColors = ["blue, green", "orange", "red", "purple", "red", "yellow"];

function App() {
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[i];
    }
  };

  return <div className="App"></div>;
}

export default App;
