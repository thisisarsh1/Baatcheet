"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
const SessionWrapper=({ children })=> {
  return (
    <div>
       <Toaster position="top-center" reverseOrder={false} />
      <SessionProvider>{ children }</SessionProvider>
    </div>
  )
}

export default SessionWrapper
