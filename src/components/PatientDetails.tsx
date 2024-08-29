import React from 'react'
import { Patient } from '../types'
import PatientDetailItem from './PatientDetailItem'
import { usePatientStore } from '../store'

type PatientDetailsProps = {
    patient: Patient
}


const deletePatient = usePatientStore((state) => state.deletePatient)
const PatientDetails = ({patient}:PatientDetailsProps) => {
  return (
    <div className='mx-5 px-5 py-10 bg-white shadow-md rounded-xl my-10'>
        <PatientDetailItem label='ID' info={patient.id}/>
        <PatientDetailItem label='Name' info={patient.name}/>
        <PatientDetailItem label='Owner' info={patient.owner}/>
        <PatientDetailItem label='Email' info={patient.email}/>
        <PatientDetailItem label='Discharge' info={patient.date.toString()}/>
        <PatientDetailItem label='Symptoms' info={patient.symptoms}/>
        <div className='flex justify-between  mt-10'>
          <button type='button' className='py-2 px-10 bg-indigo-600 font-bold rounded-lg uppercase text-white hover:bg-indigo-700'>
            Edit
          </button>
          <button onClick={() => {deletePatient(patient.id)}} type='button' className='py-2 px-10 bg-red-600 font-bold rounded-lg uppercase text-white hover:bg-red-700'>
            Delete
          </button>
        </div>
       
    </div>
  )
}

export default PatientDetails