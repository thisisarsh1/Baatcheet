"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import toast from 'react-hot-toast'
import {useRouter} from "next/navigation"
export default function Component() {
  const { data: session } = useSession()
  const router = useRouter();
  if (session) {
    toast.success('You are logged in!')
    console.log(session)
router.push('/Dashboard')
    return (
      <>

        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
    
  }
  
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}