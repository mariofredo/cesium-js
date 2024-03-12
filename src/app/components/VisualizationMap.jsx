'use client';
import React, {useEffect, useState} from 'react';
import {
  Cartesian3,
  createOsmBuildingsAsync,
  Ion,
  Math as CesiumMath,
  Terrain,
  Viewer,
} from 'cesium';

export default function VisualtizationMap() {
  // The URL on your server where CesiumJS's static files are hosted.
  const [isLoaded, setIsLoaded] = useState(false);
  const load3DMap = async () => {
    window.CESIUM_BASE_URL = '/Cesium';

    console.log('test');

    // Your access token can be found at: https://ion.cesium.com/tokens.
    // Replace `your_access_token` with your Cesium ion access token.

    Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNmFlNmUzOS04YTIzLTQ5MDItOWU4OC01YTZhYTNhZjFkYzQiLCJpZCI6MjAxMDAwLCJpYXQiOjE3MTAyMTUyNjh9.yL0HzRaOk95ZY6dOU0XnfzwDAL9Uy_c2rQop23Gy5Ks';

    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Viewer('cesiumContainer', {
      terrain: Terrain.fromWorldTerrain(),
    });

    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    // viewer.camera.flyTo({
    //   destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    //   orientation: {
    //     heading: CesiumMath.toRadians(0.0),
    //     pitch: CesiumMath.toRadians(-15.0),
    //   },
    // });

    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTileset = await createOsmBuildingsAsync();
    viewer.scene.primitives.add(buildingTileset);
  };

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    } else if (isLoaded) {
      load3DMap();
    }
  }, [isLoaded]);
  return <div id='cesiumContainer'></div>;
}
