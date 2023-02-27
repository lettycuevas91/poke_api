import React, { useState} from "react";
import { UseFetch } from "../UseFetch"
import { Cards } from "../cards/Cards"
export const Pokemon = () => {
   
    const [url, SetUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20%22')
    const estado = UseFetch(url)
    const { iniciando, data } = estado
      return (
        
            <div>
            {
                iniciando ?
                    <h1>
                        cargando...
                    </h1> :
                   
                   <Cards results={data.results}></Cards>    
            }
        </div>
    )
}
export default Pokemon