const width = 8;
const candyColors = ["blue, green", "orange", "red", "purple", "red", "yellow"];

function App() {
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const randomDomNumber = Math.floor(Math.random() * candyColors.length)

      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];

    }
  };

  return <div className="App"></div>;
}

export default App;
