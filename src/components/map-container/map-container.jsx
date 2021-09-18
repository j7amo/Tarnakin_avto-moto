import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import locationPin from '../../assets/img/location-pin.svg';

function MapContainer() {
  const mapStyles = {
    width: '431px',
  };

  const defaultCenter = {
    lat: 59.96820293650412,
    lng: 30.31651929172663,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCoSlfX414rTxk0YaOP8E4bvVxRmX4lMlg">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker position={defaultCenter} icon={locationPin} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
