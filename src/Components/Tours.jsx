import Card from "./Cards";
function Tours({ tours, removeTour }) {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <h2 className=" text-5xl m-[6vh] border-8 border-dashed border-blue-500 rounded-3xl px-[5vw] py-[1vh] flex flex-row items-center gap-3">
          {" "}
          Travel With Dev
          <img src="https://img.icons8.com/?size=100&id=Ne2dRmiLH9k4&format=png&color=000000"></img>
        </h2>
      </div>
      <div className=" flex justify-center flex-wrap max-w-[1300px] m-auto">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}
export default Tours;
