import { create } from "zustand"
import { DraftPatient, Patient } from "./types"
import { v4 as uuidv4 } from 'uuid'
import { persist } from "zustand/middleware"
import { toast } from "react-toastify"

type PatientState = {
    patients: Patient[],
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void,
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {

    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(
    persist((set) => ({
    patients: [],
    activeId: '',
    addPatient: (data) => {
        const newPatient = createPatient(data)

        set((state) => ({
            patients: [...state.patients, newPatient]
        }))

    },

    deletePatient: (id) => {
        toast.error('Patient Deleted Successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });

        set((state) => ({
            patients: state.patients.filter(patient => patient.id != id)
        }))

    },
    getPatientById: (id) => {
        set(() => ({ activeId: id }))
    },
    updatePatient: (date) => {
        set((state) => ({ patients: state.patients.map(patient => patient.id == state.activeId ? { id: state.activeId, ...date } : patient), activeId: '' }))
    }
}), {name:'patient-storage'}))