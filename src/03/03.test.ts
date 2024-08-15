import {StudentType} from "../types"
import {addSkill, makeStudentActive, repairHouse, toFireStaff, toHireStaff} from "./03";
import {CityType} from "../types";

let city: CityType
let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Nikita',
        age: 24,
        isActive: false,
        address: {
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
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address:{number:100,street: {title:"white street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address:{number:100,street: {title:"happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address:{number:101,street: {title:"happy street"}}
            }
        ],
        governmentBuildings:[
            {
                type:'Hospital', budget:200000,staffCount:200,
                address:{
                    street: {
                        title:"central str"
                    }
                }
            },
            {
                type:'Fire-Station', budget:500000,staffCount:1000,
                address:{
                    street: {
                        title:"south str"
                    }
                }
            }
        ],
        citizensNumber:1000000
    }
})

test('new tech skill will be added to student', () => {

    addSkill(student, "React")

    expect(student.technologies[3].title).toBe("React");
    expect(student.technologies[3].id).toBe(4)

})
test('student is active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)

})
test('House should be repaired', ()=>{
    repairHouse(city.houses[0]);

    expect(city.houses[0].repaired).toBe(true)
})
test("staff should be increased", ()=>{
    toFireStaff(city.governmentBuildings[0],20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})
test("House should be repaired", ()=>{
    toHireStaff(city.governmentBuildings[0],20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})