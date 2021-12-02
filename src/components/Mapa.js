import { useState } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'


export default function Mapa() {

    const [coordenadas, setCoordenadas] = useState([-12.0433, -77.028]);

    const AñadirMarcador = () => {
        const map = useMapEvents({
            click: (e) => {
                const {lat, lng} = e.latlng
                setCoordenadas([lat, lng]);
            },
        });
        return null
    }

    return (
        
        <MapContainer center={coordenadas} zoom={15} style={{ height: "200px", width: "100px" }}>
            {/* Tile Layer es la fuente de datos para leaflet */}
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AñadirMarcador />
            <Marker position={coordenadas} />
        </MapContainer>
        
    )
}
