import React from 'react'
import { Link } from 'react-scroll'

export const NavBar = () => {
  return (
    <nav>
        <Link to="home" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">>
            Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
            About
        </Link>
        <Link to="skills" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
            Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
            Projects
        </Link>
        <Link to="contacts" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
            Contacts
        </Link>
    </nav>
  )
}


