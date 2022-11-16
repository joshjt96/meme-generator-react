import React from "react"

export default function Star(props) {

    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={toggleFavorite}
            />
        )
    };


    <Star isFilled={isFavorite}/>