import axios from "axios";
import { IFruit } from "interfaces/IFruit";
import { IFruitList } from "interfaces/IFruitList";
import { useState } from "react";

export function API () {
    const [fruitList, setFruitList] = useState<IFruit[]>([])
    
    axios.get<IFruitList<IFruit>>('https://www.fruityvice.com/api/fruit/all')
        .then(resposta => {
            setFruitList(resposta.data.results)
        })

    return fruitList
}