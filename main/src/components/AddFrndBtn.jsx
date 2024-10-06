"use client"
import React from 'react'
import { useState } from "react";
import { cn } from "@/lib/utils";
import axios, { AxiosError } from 'axios';
import {z} from 'zod';
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import toast from "react-hot-toast";
import { addFrndSchema } from '@/validation/addFrnd';

function AddFrndBtn() {

  const [email, setEmail] = useState("");
const AddFrnd =async()=>{
    try{
const ValidatedEmail =addFrndSchema.parse({email})
await axios.post('/api/addFrnd',{email:ValidatedEmail})
toast.success('Request Sent')
    }
    catch(e){
    if(e instanceof z.ZodError){
        toast.error('Request Didnt Sent(Validation Error)')
    }
    if (e instanceof AxiosError){
        toast.error('Request Didnt Sent(axios error)')
    }
    else{
        toast.error('Request Didnt Sent')
    }

}
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
      Send a friend request to a friend by email
    </h2>
   

    <form className="my-8">
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </LabelInputContainer>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <div className="flex flex-col space-y-4">
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="button" onClick={()=>AddFrnd()}
        >
          
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Send Request
          </span>
          <BottomGradient />
        </button>

        
      </div>
    </form>


  </div>
);
}

const BottomGradient = () => {
return (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);
};

const LabelInputContainer = ({ children, className }) => {
return (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);
};
}
export default AddFrndBtn
