import SightingCard from './SightingCard'

const SightingsGrid = ({sightings, deleteSighting}) => {
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id}  deleteSighting={deleteSighting} />
    });
    
    return (
        <>
            {sightingsList}
        </>
    );

}

export default SightingsGrid;