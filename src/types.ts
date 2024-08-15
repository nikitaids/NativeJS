export type CityType = {
    title:string
    houses:Array<HousesType>
    governmentBuildings:Array<governmentBuildingsType>
    citizensNumber:number
}
//houses
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address:HouseAdressType
}

export type HouseAdressType = {
    number?: number,
    street:StreetType
}

export type StreetType = {
    title: string
}

//governmentBuildings
export type governmentBuildingsType = {
    type: "Hospital"|"Fire-Station"
    budget:number
    staffCount:number,
    address:HouseAdressType
}


//student
export type TechnologiesType = {
    id: number,
    title: string
}

export type AdressType = {
    street: string
    city: string
    country: string
}

export type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AdressType,
    technologies: Array<TechnologiesType> ///не знаю правильно ли
}
