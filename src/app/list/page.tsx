import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Divider from '@/components/divider'
import { ToastContainer } from 'react-toastify'
const page = () => {
  return (
  <>
   <SidebarProvider>
      <AppSidebar />
        <SidebarTrigger />
        <div className='flex h-screen w-full'>
        <Divider/>
        </div>
    </SidebarProvider>
    <ToastContainer/>
  </>
  )
}

export default page