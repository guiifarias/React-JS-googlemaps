import React, {useState} from "react";
import Local from '@react-native-community/geolocation'

import logo from './logo.svg';
import './App.css';
import MapContainer from './pages/MapPage';

function  App() {
  
  const [lat,setLatitude]=useState(0)
  const [lon,setLongitude]=useState(0)

  const obterLocal=()=>{
    Local.getCurrentPosition(
        (pos)=>{
            setLatitude (pos.coords.latitude)
            setLongitude (pos.coords.longitude)

        },
    )
  }
  window.onload = obterLocal()
  return (
    <MapContainer lat={lat} lng={lon} />
  );
}

export default App;
