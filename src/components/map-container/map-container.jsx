import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import locationPin from '../../assets/img/location-pin.svg';
import { MAP_CONTAINER_WIDTH,DEFAULT_LAT, DEFAULT_LNG, ZOOM_LEVEL, API_KEY } from '../../const';

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
