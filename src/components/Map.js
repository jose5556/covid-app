import React, { useEffect } from 'react';
import L, { map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    
    const marker = L.marker([51.5, -0.09]).addTo(map);
    marker.bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
    
    return () => {
      map.remove();
    }
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default Map;