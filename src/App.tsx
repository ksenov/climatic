import Header from "./components/Header";
import WeatherMain from "./components/WeatherMain";

import useGeolocation from "./hooks/useGeolocation";


function App() {
  // const { location, error } = useGeolocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <WeatherMain weatherType="Clouds" temperature={20}/>
    </div>
  );
}

export default App;
