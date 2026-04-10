import "./Map.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = L.divIcon({
  className: "custom-marker-wrap",
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="42" viewBox="0 0 30 42">
    <path d="M15 1C7.3 1 1 7.3 1 15c0 10.2 14 26 14 26s14-15.8 14-26C29 7.3 22.7 1 15 1z" fill="#1a6b3c"/>
    <circle cx="15" cy="15" r="7.5" fill="white"/>
    <circle cx="15" cy="15" r="4" fill="#27ae60"/>
  </svg>`,
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -44],
});

type MarkerType = {
  name: string;
  address: string;
  lat: number;
  lng: number;
};
type Proops = {
  markers: MarkerType[];
};
function Map({ markers }: Proops) {
  return (
    <>
      <MapContainer
        center={[-0.028545847792099788, 109.34076983365841]}
        zoom={14}
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={markerIcon}
          >
            <Popup className="custom-popup">
              <div className="popup-name">{marker.name}</div>
              {marker.address && (
                <div className="popup-address">{marker.address}</div>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
export default Map;
