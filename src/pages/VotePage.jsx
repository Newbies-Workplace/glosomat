import React from "react";
import {useParams} from "react-router-dom";

export function VotePage() {
    const {
        id
    }=useParams()
        return (
            <div>
                Twoje id to {id}
            </div>
        )
    }

