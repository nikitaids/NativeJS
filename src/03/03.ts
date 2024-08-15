import {governmentBuildingsType, HousesType, StudentType} from '../types'
import {CityType} from "../types";

export const addSkill = (student: StudentType, technology: string) => {

    student.technologies.push({
        id: 4,
        title: technology
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive=true
}

export const repairHouse = (house:HousesType) => {
    house.repaired = true
}

export const toFireStaff = (building:governmentBuildingsType, staff:number)=>{
    building.staffCount-=staff
}

export const toHireStaff = (building:governmentBuildingsType, staff:number)=>{
    building.staffCount+=staff
}