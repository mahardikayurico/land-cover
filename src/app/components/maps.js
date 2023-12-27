"use client";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const { BaseLayer } = LayersControl;

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 17);
  return null;
}

export default function MapCoordinates() {
  const [geoData, setGeoData] = useState({
    lat: -7.793802706097266,
    lng: 110.36660394663049,
  });

  const center = [geoData.lat, geoData.lng];
  return (
    
    <MapContainer
      center={center}
      zoom={0}
      style={{ height: "400px", width: "100%" }}
    >
      <LayersControl position="topright">
        <BaseLayer checked name="Satellite - Google">
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            attribution="&copy; Google"
          />
        </BaseLayer>
        <BaseLayer name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
         {/* <TileLayer
        url="https://code.earthengine.google.com/d1f150b2d881bc8121c2207106cc5d27"
        attribution="Land Cover Map"
      /> */}
      </LayersControl>
      <ChangeView
        coords={center}
      />
    </MapContainer>
  );
}
