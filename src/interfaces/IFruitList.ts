import produtos from 'data/FruitList.json'

export interface IFruitList {
    id:number
}

export type OrdenarFruitList = typeof produtos

export interface IFruit {
    img: string,
    name: string,
    id: number, 
    nutritions: {
        calories: number,
        carbohydrates: number,
        fat: number,
        protein: number,
        sugar: number
    }
}