'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import "./Navigation.css"
import Link from 'next/link'
export default function Navigation() {
  const pathname = usePathname()
  return (
    <div className='flex justify-end items-center'>
     <input type="checkbox" id="check" />
    <label    htmlFor="check" className="icons">
    <i className="fa-solid fa-bars" id="menu-icon"></i>

    <i className="fa-solid fa-xmark" id="close-icon"></i>
      
    </label>
    <nav className="navbar">
    <Link href="/" legacyBehavior>
      <a className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
        Accueil
      </a>
    </Link>
    <Link href="/contact" legacyBehavior>
      <a className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
        Contact
      </a>
    </Link>
  </nav>
</div>
  
   
  )
}
