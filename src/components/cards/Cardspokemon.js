import React from "react";
import { UseFetch } from "../UseFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
export const Cardspokemon = ({ url }) => {
    const estado = UseFetch(url)
    const { iniciando, data } = estado
    return (
        <div>
            {
                iniciando ?
                    <h1> Cargando Pokemones</h1> :
                    
                    <div className='card' style={{ width: '18rem' }}>
                        <div className='card-header'><p className='card-text text-uppercase'>National ID: {data.id}</p>
                        </div>
                        <div className='card-body'>
                            <img src={data.sprites.front_default} alt="Pokemon" />
                            <div className='card-progress'> 
                            <p className='card-text'>Ataque:</p> <ProgressBar variant="danger" now={data.stats[1].base_stat} label={`${data.stats[1].base_stat}`} />
                            <p className='card-text'>Defensa:</p>   <ProgressBar variant="warning" now={data.stats[5].base_stat} label={`${data.stats[5].base_stat}`}/>
                            <p className='card-text'>Velocidad:</p>   <ProgressBar variant="success" now={data.stats[2].base_stat}label={`${data.stats[2].base_stat}`} />
                            </div>
                        </div>
                        <div className='card-footer'>
                            <p className='card-text text-uppercase'>{data.forms[0].name}</p>
                        </div>

                    </div>
            }
        </div>
    )
}