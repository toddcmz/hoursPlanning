"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreateOrgForm() {

  const router = useRouter()

  const [orgName, setOrgName] = useState('')


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Organization Name"
        required
        onChange={(e) => setOrgName(e.target.value)}
        value={orgName}
      />
    </form>
  )
}
