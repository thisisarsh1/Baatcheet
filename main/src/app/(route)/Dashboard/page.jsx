
import { getServerSession } from 'next-auth'
import React from 'react'

async function page() {
    const sessions  = await getServerSession()
  return (
    <pre>{JSON.stringify(sessions)}</pre>
  )
}

export default page
