"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, LayersControl, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const { BaseLayer } = LayersControl;

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 17);
  return null;
}
const mapid = 'projects/ee-ramadhan/assets/PL_KLHK_Raster_v1/KLHK_PL_2021_raster_v1'; 

export default function MapCoordinates() {
  const [geoData, setGeoData] = useState({
    lat: -7.793802706097266,
    lng: 110.36660394663049,
  });

  const center = [geoData.lat, geoData.lng];


  const url = `https://earthengine.googleapis.com/map/${mapid}/{z}/{x}/{y}`;
  return (
    <MapContainer
      center={center}
      zoom={0}
      style={{ height: "400px", width: "100%" }}
    >
      <LayersControl position="topright">
        <BaseLayer checked name="Google Earth Engine">
          <TileLayer url={url} attribution="&copy; Google Earth Engine" />
        </BaseLayer>
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
      </LayersControl>
      <ChangeView coords={center} />
    </MapContainer>
  );
}
