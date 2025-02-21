import Header from "./components/Header";
import WeatherMain from "./components/WeatherMain";
import WeatherDetails from "./components/WeatherDetails";
import { useWeather, WeatherProvider } from "./context/WeatherContext";


function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen w-full bg-sky-100">
        <Header/>
        <WeatherContent/>
      </div>
    </WeatherProvider>
  );
}

const WeatherContent = () => {
  const { weather } = useWeather();
  
  if (!weather) return <div className="flex justify-center text-center"><p>Выберите город</p></div>;
  
  return (
    <>
      <WeatherMain />
      <WeatherDetails />
    </>
  );
};

export default App;
