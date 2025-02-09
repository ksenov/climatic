import Header from "./components/Header";
import WeatherMain from "./components/WeatherMain";
import { WeatherProvider } from "./context/WeatherContext";


function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gray-100">
        <Header/>
        <WeatherMain />
      </div>
    </WeatherProvider>
  );
}

export default App;
