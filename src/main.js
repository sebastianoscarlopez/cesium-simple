import { Cartesian3, Ion, Cesium3DTileset, Math, Terrain, Viewer } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

window.onload = () => {
  Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYTUzNjU0Ny0xMTgyLTQ0NWItYWJhOC1hMWYzMDc2NTMyMTciLCJpZCI6MTYzNjQyLCJpYXQiOjE2OTM3MDE5MTd9.SWmsi_pUOyNOLYU6UZl3biE9HWhO0ioOAQ8qFU7uCIs';

  const viewer = new Viewer('cesiumContainer', {
    // terrain: Terrain.fromWorldTerrain(),
    // globe: false,
  });

  console.log("viewer", viewer);
  Cesium3DTileset.fromUrl(
    "https://storage.googleapis.com/mesh3d/mesh2021/tileset.json"
    // "http://localhost:8002/tileset.json"
  )
  .then(tileset => {
    viewer.scene.primitives.add(tileset);
    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(-58.4371312, -34.6134264, 320),
      // destination: Cartesian3.fromDegrees(-74.0444987716782, 40.689434025350025, 320),
      orientation: {
        heading: Math.toRadians(0.0),
        pitch: Math.toRadians(0.0),
      }
    });  
  })
  .catch(error => {
    console.log(error);
  });

  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation: {
      heading: Math.toRadians(0.0),
      pitch: Math.toRadians(-15.0),
    }
  });
};

