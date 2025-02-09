import Header from "./components/Header";
import WeatherMain from "./components/WeatherMain";
import WeatherDetails from "./components/WeatherDetails";
import { WeatherProvider } from "./context/WeatherContext";


function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen w-full bg-gray-100">
        <Header/>
        <WeatherMain />
        <WeatherDetails />
      </div>
    </WeatherProvider>
  );
}

export default App;
