import "./Map.css";
import { MapContainer, Marker, TileLayer, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
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
        center={[-0.024751799321233225, 109.33841193739606]}
        zoom={16}
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
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
