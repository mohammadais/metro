import { getRoutes } from './lib/getRoutes';


function App() {
  // console.log(getStationLine("City Park"));
  // console.log(changeLine("GREEN"));
  // console.log(getNextStations("Welcome"));

  const currentStation = "Rajiv Chowk";
  const destination = "Mandi House";

  getRoutes(currentStation, destination);

  return (
    <div className="App">
    </div>
  );
}

export default App;
