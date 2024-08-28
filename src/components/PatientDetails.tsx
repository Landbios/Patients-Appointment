import React from 'react'
import { Patient } from '../types'
import PatientDetailItem from './PatientDetailItem'


type PatientDetailsProps = {
    patient: Patient
}



const PatientDetails = ({patient}:PatientDetailsProps) => {
  return (
    <div className='mx-5 px-5 py-10 bg-white shadow-md rounded-xl my-10'>
        <PatientDetailItem label='ID' info={patient.id}/>
        <PatientDetailItem label='Name' info={patient.name}/>
        <PatientDetailItem label='Owner' info={patient.owner}/>
        <PatientDetailItem label='Email' info={patient.email}/>
        <PatientDetailItem label='Discharge' info={patient.date.toString()}/>
        <PatientDetailItem label='Symptoms' info={patient.symptoms}/>
        
       
    </div>
  )
}

export default PatientDetails