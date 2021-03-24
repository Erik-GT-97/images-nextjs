import React from 'react'
import Link  from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <menu>
                <Link href='/'>
                  <a>Elizabeth</a>
                </Link>
                <Link href='/anya'>
                  <a>Anya</a>
                </Link>
            </menu>
        </nav>
    )
}

export default Navbar