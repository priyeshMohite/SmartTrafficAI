import { Marker } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

const ambulanceIcon = new L.Icon({
  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
  iconSize: [42, 42],
  iconAnchor: [21, 21],
});

function AnimatedVehicle({ destination }) {
  const dispatchCenter = [19.0760, 72.8777];

  const [position, setPosition] = useState(dispatchCenter);

  useEffect(() => {
    if (!destination) {
      setPosition(dispatchCenter);
      return;
    }

    let progress = 0;

    const interval = setInterval(() => {
      progress += 0.02;

      if (progress >= 1) {
        progress = 1;
        clearInterval(interval);
      }

      const lat =
        dispatchCenter[0] +
        (destination[0] - dispatchCenter[0]) * progress;

      const lng =
        dispatchCenter[1] +
        (destination[1] - dispatchCenter[1]) * progress;

      setPosition([lat, lng]);
    }, 60);

    return () => clearInterval(interval);
  }, [destination]);

  return (
    <Marker
      position={position}
      icon={ambulanceIcon}
    />
  );
}

export default AnimatedVehicle;