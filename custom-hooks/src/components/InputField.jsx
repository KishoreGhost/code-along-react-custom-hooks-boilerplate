import React, { useState } from 'react'
import Storage from './Storage'

const InputField = () => {

    let [value, setValue] = useState("")
    let [storedValue, setStoredValue] = Storage("Key")

    function inputData (e){
        let data = e.target.value;
        setValue(data)
        setStoredValue(data)
    }
      
  return (
    <>
        <input type="text"
        placeholder = "OH hii.."
        onChange = {inputData}
        />
        <p>This is the Data: {value}</p>
    </>
  )
}

export default InputField
