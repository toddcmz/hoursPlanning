import CreateOrgForm from "./createOrgForm"
import type { Metadata } from 'next'

export const metadata:Metadata = {
  title: "Plan/Ours | Manage Org Details"
}

export default function CreateOrg() {

  return (
    <>
      <h1>Create a New Organization</h1>
      <div>
        <p>
          This page may be temporary - depends on whether user is allowed to add a new organization themselves.    
        </p>
      </div>
      <CreateOrgForm />
    </>
  )
}
