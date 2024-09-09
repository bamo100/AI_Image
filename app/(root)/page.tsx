"use client";

import { connectToDatabase } from '@/lib/database/mongoose'
import { UserButton } from '@clerk/nextjs'



const Home = () => {
  return (
    <div>
       <p>Home</p>
       {/* <UserButton afterSignOutUrl='/' /> */}
       {/* <h1>{process.env.MONGODB_URL}</h1> */}
    </div>
  )
}

export default Home