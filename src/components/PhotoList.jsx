import { useState, useEffect } from "react";
import PhotoItem from "./PhotoItem";

function PhotoList(){

    const api_url = 'https://reqres.in/api';
    const [photoList, setPhotoList] = useState([]);

    async function getPhotos(){
        const result = await fetch(`${api_url}/users`);
        const data = await result.json();
        setPhotoList(data.data)
    };

    useEffect(()=>{
        getPhotos();
    }, [])


    return (
        <div className="photo-list-container">
            <h3>Lista de usuarios</h3>
            <div className="photo-list">
                { photoList.map((photo)=>{
                    return(
                        <PhotoItem key={photo.item} data={photo}></PhotoItem>
                    )
                })}
            </div>
            
        </div>
    )
}

export default PhotoList;