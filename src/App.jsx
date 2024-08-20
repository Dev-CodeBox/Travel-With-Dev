import { useState } from "react";
import Tours from "./Components/Tours";
import Data from "./Data";

function App() {
  const [tours, setTours] = useState(Data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className=" h-[100vh] flex items-center justify-center flex-col">
        <h2 className=" text-2xl m-[6vh] border-8 border-dashed border-blue-500 rounded-3xl px-[5vw] py-[1vh]">
          No Tours Left
        </h2>
        <button
          className="my-[18px] px-20 py-5 border-2 border-solid border-[#b4161b] cursor-pointer rounded-[10px] text-lg font-bold bg-[#b4161b21] hover:bg-[red] hover:text-white hover:transition-all"
          onClick={() => setTours(Data)}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
