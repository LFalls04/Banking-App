'use Client'

import React from 'react'
import Sidebar from "@/components/Sidebar";



export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const loggedIn = { firstName: 'Lathan', lastName: 'Falls'};


    return (
     <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        {children}
     </main>
    );
  }
  