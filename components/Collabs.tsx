import Image from "next/image";
import { useState } from "react";
import { Collab } from '../custom-types';

export default function Collabs({ collabTracks }:{ collabTracks:Collab[] }) {
    const [collabs, setCollabs] = useState([] as SpotifyApi.TrackObjectFull[]);
    return <div>
        <p>COLLABS</p>
        <div>{collabTracks.map((track:Collab)=>{
            return <div key={track.id}>
                <div>{track.name}</div>
                <div>{track.artists[0].name}</div>
                <Image src={track.img.url} alt={track.name} width={160} height={160}/>
                <br/>
            </div>;
        })}</div>
    </div>;
}