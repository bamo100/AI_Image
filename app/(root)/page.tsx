"use client";

import { connectToDatabase } from '@/lib/database/mongoose'
import { UserButton } from '@clerk/nextjs'



const Home = () => {
  const hi = async () => {
    const yeah = await connectToDatabase()

    if(!yeah) {
      return "Not Connected";
    }

    return "connected!";
  }

  return (
    <div>
       <p>Home</p>
       {/* <UserButton afterSignOutUrl='/' /> */}
       {/* <h1>{process.env.MONGODB_URL}</h1> */}
       <button onClick={hi}>Connect</button>
    </div>
  )
}

export default Home