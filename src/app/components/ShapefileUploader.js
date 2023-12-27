// components/ShapefileUploader.js
import React from 'react';
import shp from 'shpjs';

const ShapefileUploader = () => {
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const geojson = await shp(file);
    // Handle the GeoJSON data, e.g., send it to the server
  };

  return (
    <div>
      <input type="file" accept=".zip" onChange={handleUpload} />
    </div>
  );
};

export default ShapefileUploader;
