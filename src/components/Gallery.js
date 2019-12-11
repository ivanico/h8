import React from "react";


export const Gallery = (props) => {
    return (
        <ul>
            {props.photoslist.map(photo => {
                return(
                    <li key={photo.id}><img src={photo.thumbnailUrl} /></li>
                )
            })}
        </ul>
    )
}