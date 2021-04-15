import React, {useState, useEffect} from 'react'


export default function App(){
  const [location, setLocation] = useState({})

  useEffect(() => {
    navigator.geolocation.watchPosition(positionReceived)

  }, []);

  function positionReceived({ coords }){

    const {latitude, longitude} = coords
    setLocation({ latitude, longitude })
  }

  return(
    <>
    latitude: {location.latitude}<br/>
    longitude: {location.longitude}
    </>

  );
}
