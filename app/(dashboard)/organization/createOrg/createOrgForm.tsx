"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreateOrgForm() {

  const router = useRouter()

  const [orgName, setOrgName] = useState('')
  const [orgTimezone, setOrgTimezone] = useState('')
  const [orgCurrency, setOrgCurrency] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
  }

  return (
    <form className="createNewOrgForm" onSubmit={handleSubmit}>
      <input 
        className="createNewOrgFormField"
        type="text" 
        placeholder="Organization Name"
        required
        onChange={(e) => setOrgName(e.target.value)}
        value={orgName}
      />
      <select 
        className="createNewOrgFormField"
        required
        onChange={(e) => setOrgTimezone(e.target.value)}
        value={orgTimezone}
      >
        <option value="Select Timezone">Select Timezone</option>
        <option value="Pacific">Pacific</option>
        <option value="Mountain">Mountain</option>
        <option value="Central">Central</option>
        <option value="Eastern">Eastern</option>
      </select>
      <select 
        className="createNewOrgFormField"
        required
        onChange={(e) => setOrgCurrency(e.target.value)}
        value={orgCurrency}
      >
        <option value="Select Currency">Select Currency</option>
        <option value="Dollars">Dollars</option>
        <option value="Euros">Euros</option>
        <option value="Yen">Yen</option>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Dogecoin">Dogecoin</option>
      </select>
      <button
        className = "btn-primary"
        disabled={isLoading} // isLoading is either true or false in useState above. when loading, disables button
      >
        {isLoading && <span>Adding...</span> }
        {!isLoading && <span>Create Organization</span>}
      </button>
    </form>
  )
}
