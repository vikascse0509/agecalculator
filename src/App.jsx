import { useState } from 'react'
import './App.css'

function App() {
  const [dob, setDob] = useState('')
  const [age, setAge] = useState(null)

  const ageCalc = () =>{
    if(dob){
    const dobDate = new Date(dob)
    const ageInMs = Date.now() - dobDate.getTime()
    const ageDate = new Date(ageInMs)

    const ageVal = Math.abs(ageDate.getFullYear() - 1970)
    setAge(ageVal)
  }else{
    setAge('Please enter your date of birth!')
  }
  }

  return (
    <>
      <div className='flex flex-col w-[800px] text-center items-center justify-center rounded-[10px] mx-auto my-0 p-[20px] bg-green-200'>
        <h1 className='text-[34px] mb-[20px]'>Age Calculator</h1>
        <div>
          <label className='flex mb-[10px] justify-center text-[24px]' htmlFor="">Select your date of birth :</label>
          <input value={dob} onChange={(e) => setDob(e.target.value)} className='w-[400px] border border-solid border-[white] p-[10px] mb-[20px] text-[16px] rounded-[5px]' type="date" />
        </div>
        <div>
        <button onClick={ageCalc} className='py-[16px] px-[8px] font-bold bg-red-500 border-none rounded-[5px] cursor-pointer text-white mb-[10px]'>Calculate Age</button>
        </div>
        {age !== null && 
          <p className='text-black font-bold'>{typeof age === 'string' ? age : `Your age is ${age} years.`}</p>
        }
      </div>
    </>
  )
}

export default App
