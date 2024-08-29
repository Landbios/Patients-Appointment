
import { useForm }  from 'react-hook-form'
import Error from './Error'
import { DraftPatient } from '../types'
import { usePatientStore } from '../store'
export default function PatientForm() {
    const {addPatient} = usePatientStore()
    const {register,handleSubmit,formState: {errors},reset} = useForm<DraftPatient>()
    const registerPatient = (data:DraftPatient) =>{
        addPatient(data)
        reset()

    }
    return (

      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
  
          <p className="text-lg mt-5 text-center mb-10">
              Add Patients and {''}
              <span className="text-indigo-600 font-bold">Manage them</span>
          </p>
  
          <form 
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              noValidate
              onSubmit={handleSubmit(registerPatient)}
          >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Patient
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Patient Name" 
                        {...register('name', {required:'Patient name cant be empty'})}
                    />
                   {errors.name && (<Error>{errors.name?.message as string}</Error>)}
                   
                </div>
  
                <div className="mb-5">
                  <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                      Owner
                  </label>
                  <input  
                      id="caretaker"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Patient Owner"
                      {...register('owner', {required:'Patient owner cant be empty'})} 
                      
                      
                  />
                  
                  {errors.owner && (<Error>{errors.owner?.message as string}</Error>)}
                  
                </div>
  
              <div className="mb-5">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100"  
                    type="email" 
                    placeholder="Owner Email"
                    {...register("email", {
                        required: "Owner email cant be empty",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid Email'
                        }
                      })} 
                   
                />
             
                {errors.email && (<Error>{errors.email?.message as string}</Error>)}
                
              </div>
  
              <div className="mb-5">
                  <label htmlFor="date" className="text-sm uppercase font-bold">
                      Discharge 
                  </label>
                  <input  
                      id="date"
                      className="w-full p-3  border border-gray-100"  
                      type="date" 
                      {...register('date', {required:'You need to add a Discharge Date'})}
                     
                  />
          
                  {errors.date && (<Error>{errors.date?.message as string}</Error>)}
                  
              </div>
              
              <div className="mb-5">
                  <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                  Symptoms
                  </label>
                  <textarea  
                      id="symptoms"
                      className="w-full p-3  border border-gray-100"  
                      placeholder="Patient Symptoms" 
                      {...register('symptoms', {required:'Patient symptoms cant be empty'})}
                     
                  >

                  </textarea>
                 
                  {errors.symptoms && (<Error>{errors.symptoms?.message?.toString()}</Error>)}
                 
              </div>
  
              <input
                  type="submit"
                  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                  value='Guardar Paciente'
              />
          </form> 
      </div>
    )
  }