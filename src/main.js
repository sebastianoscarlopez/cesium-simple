import { Cartesian3, createOsmBuildingsAsync, Ion, Math, Terrain, Viewer } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

window.onload = () => {
  Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNjI1ZGZkYy01ZmE1LTRkOWYtYmYwZi1jOGFlYmUxZjI1YjgiLCJpZCI6MTYzNjQyLCJpYXQiOjE2OTM0NDczNzd9.wfJDC4VVEonMFKJzVpajKXZ0jTtFOUt1DVnqGgqwSOw';

  const viewer = new Viewer('cesiumContainer', {
    terrain: Terrain.fromWorldTerrain(),
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

