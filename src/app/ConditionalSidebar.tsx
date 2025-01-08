'use client'

import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { usePathname } from 'next/navigation'

export function ConditionalSidebar() {
  const pathname = usePathname()
  if (pathname.startsWith('/studio')) return null
  return  <Sidebar />
  
}

export function ConditionalFooter() {
  const pathname = usePathname()
  if (pathname.startsWith('/studio')) return null
  return <Footer />
}
