import {StudentType} from "../types";


export const student: StudentType = {
    id: 1,
    name: 'Nikita',
    age: 24,
    isActive: true,
    adress: {
        street: '6-ya Lesnaya',
        city: 'Vitebsk',
        country: 'Belarus'
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        }
    ]
}
