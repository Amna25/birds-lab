import { deleteSighting } from "../containers/SightingService";

const SightingCard = ({sighting, deleteSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id)
            
      
    }

    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
}

export default SightingCard;
