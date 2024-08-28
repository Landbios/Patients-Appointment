import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"
function PatientsList() {

  const patienst = usePatientStore(state => state.patients)
  console.log(patienst)
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patienst.length ? (

        <>

          <h2 className="font-black text-3xl text-center">Patients List</h2>
          <p className="text-xl mt-5 mb-10 text-center">Manage your {''}<span className="text-indigo-600 font-bold">Patients and appointments</span></p>
          {patienst.map(patient => (<PatientDetails key={patient.id} patient={patient}/>))}
          


        </>) :

        (<>
          <h2 className="font-black text-3xl text-center">There isn't any patient</h2>
          <p className="text-xl mt-5 mb-10 text-center">Begin adding some patients and they will appear<span className="text-indigo-600 font-bold"> Here</span></p>

        </>
        )}

    </div>
  )
}

export default PatientsList