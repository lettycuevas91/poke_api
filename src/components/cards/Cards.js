import React from "react";
import { Cardspokemon } from "./Cardspokemon";
import './cards.css';
export const Cards=({results})=>{
    return(
        <div className="container">
            <ul className="cards">{
                      results.map( p=>(
                        <li className="cards-item" key={p.name}>
                            <Cardspokemon url={p.url}/>
                        </li>
                    ))
            }
            </ul>

        </div>
    
    )
}