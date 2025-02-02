import { useState } from "react";

const Header = () => {
    const [city, setCity] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    return (
        <header className="w-full bg-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">Climatic</h1>

            <input
              type="text"
              placeholder="Введите город..."
              value={city}
              onChange={handleSearch}
              className="px-4 py-2 rounded-md text-red-950 outline-none"
            />
        </header>
    )
}

export default Header;