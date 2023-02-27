import React from "react";
import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from "react-bootstrap";
import {searchpokemon } from "./api";
const Navbar = () => {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();
    const searcher = (e) => {
        setSearch(e.target.value);
    }
    const onClick = async (e) => {
        const data = await searchpokemon(search);
        setPokemon(data);
    }
    return (
        <div className="searchbar-container">
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
             
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" width="70px" heigdth="70px" alt="Pokeball Clipart Svg - Pokeball Icon @clipartmax.com" />
            <a class="navbar-brand" href="#">Poke Cards</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="form-group mx-sm-3">
          <input type="text" class="form-control" placeholder="Buscar pokemon..." onChange={searcher} />
          </div>
          <button type="button" class="btn btn-warning" onClick={onClick}>Buscar</button>
        </nav>        
        <div>{pokemon && <div>
            <div className='card' style={{ width: '18rem' } }    >   
                          <div className='card-header'><p className='card-text text-uppercase' key={pokemon.id}>National ID: {pokemon.id}</p>

                        <div className='card-body'>
                            <img src={pokemon.sprites.front_default} alt="Pokemon" />
                            <div className='card-progress'>
                                <p className='card-text'>Ataque:</p> <ProgressBar variant="danger" now={pokemon.stats[1].base_stat} label={`${pokemon.stats[1].base_stat}`} />
                                <p className='card-text'>Defensa:</p>   <ProgressBar variant="warning" now={pokemon.stats[5].base_stat} label={`${pokemon.stats[5].base_stat}`} />
                                <p className='card-text'>Velocidad:</p>   <ProgressBar variant="success" now={pokemon.stats[2].base_stat} label={`${pokemon.stats[2].base_stat}`} />
                            </div>
                        </div>
                        <div className='card-footer'>
                            <p className='card-text text-uppercase'>{pokemon.forms[0].name}</p>
                        </div>
                         </div>
                         </div></div>
              } </div>
      </div>
    )
}
export default Navbar