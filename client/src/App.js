import { useState, useEffect } from "react";

import './App.css';

import SightingsForm from "./components/SightingsForm";
import SightingsGrid from "./components/SightingsGrid";
import { deleteSighting as apiDeleteSighting, getSightings } from "./containers/SightingService";


function App() {

  const [birdSightings, setBirdSightings] = useState([]);

  useEffect(()=>{
    getSightings().then((allSightings)=>{
      setBirdSightings(allSightings);
    })
  }, []);

  const addSighting = (sighting) =>{
    const temp = birdSightings.map(s =>s);
    temp.push(sighting);
    setBirdSightings(temp);
  }

  // const removeSighting = (id) => {
  //   const temp = birdSightings.map(s =>s);
  //   const indexToDel = temp.map(s => s._id).indexOf(id);
  //   console.log(indexToDel);

  //   temp.splice(indexToDel, 1);
  //   setBirdSightings(temp);
  // }

  const deleteSighting = (id) => {
    apiDeleteSighting(id).then(() => {
      let temp = birdSightings.map (g => g);
      const toDel = birdSightings.map(g => g._id).indexOf(id);
      temp.splice(toDel, 1);
      setBirdSightings(temp);
    })
  }

  return (
    <>
      <SightingsForm addSighting={addSighting}/>
      <SightingsGrid sightings={birdSightings}  deleteSighting={deleteSighting}/>
    </>
  );
}

export default App;
