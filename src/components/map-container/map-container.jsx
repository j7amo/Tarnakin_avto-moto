import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import locationPin from '../../assets/img/location-pin.svg';

const MAP_CONTAINER_WIDTH = '431px';
const DEFAULT_LAT = 59.96820293650412;
const DEFAULT_LNG = 30.31651929172663;
const ZOOM_LEVEL = 15;
const API_KEY = 'AIzaSyCoSlfX414rTxk0YaOP8E4bvVxRmX4lMlg';

function MapContainer() {
  const mapStyles = {
    width: MAP_CONTAINER_WIDTH,
  };

  const defaultCenter = {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={ZOOM_LEVEL} center={defaultCenter}>
        <Marker position={defaultCenter} icon={locationPin} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
