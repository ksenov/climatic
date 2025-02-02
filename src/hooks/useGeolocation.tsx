import { useEffect, useState } from "react";

const useGeolocation = () => {
    const [location, setLocation] = useState<{ lat: number, lon: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            if (!navigator.geolocation) {
                setError("Geolocation is not supported by your browser");
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (err) => {
                    console.error("Error getting geolocation:", err);
                    setError("Geolocation permission denied. Using default location.");
                    setLocation({ lat: 59.9343, lon: 30.3351 })
                }
            )
        }, []);

        return { location, error };
}

export default useGeolocation;