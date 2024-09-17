'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import { Archive, CircleDollarSign, Clipboard, Layout,  Menu, SlidersHorizontal, User } from 'lucide-react'
import SidebarLink from './SidebarLink'





const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
}

  const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72  md:w-64'} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`

  const sidebarLinks = [
    { href: '/dashboard', icon: Layout, label: 'Dashboard' },
    { href: '/inventory', icon: Archive, label: 'Inventory' },
    { href: '/products', icon: Clipboard, label: 'Products' },
    { href: '/users', icon: User, label: 'Users' },
    { href: '/settings', icon: SlidersHorizontal, label: 'Settings' },
    { href: '/expenses', icon: CircleDollarSign, label: 'Expenses' },
  ];



  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? 'px-5' : 'px-8'}`}>
        <div>logo</div>
        <h1 className={`${isSidebarCollapsed ? 'hidden' : 'block'} font-extrabold text-2xl`}>LAYM</h1>
        <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
          <Menu className='w-4 h-4' />
        </button>
      </div>

      {/* LINKS */}
      <div className='flex-grow mt-8'>
      {sidebarLinks.map((link, index) => (
          <SidebarLink
            key={index}
            href={link.href}
            icon={link.icon}
            label={link.label}
            isCollapsed={isSidebarCollapsed}
          />
        ))}
      </div>
      {/* FOOTER */}
      <div className={`${isSidebarCollapsed ? 'hidden' : 'block'} mb-10`}>
        <p className='text-center text-xs text-gray-500'>&copy; 2024 Laym</p>
      </div>
    </div>
  )
}

export default Sidebar