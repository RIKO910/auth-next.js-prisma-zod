import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

const Page = async () => {
    const session = await getServerSession(authOptions);
   if (session?.user){
       return <h2>Admin page {session?.user.username}</h2>
   }
  return <h2>Please login to see this admin page</h2>
};

export default Page;