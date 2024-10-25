import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className='fixed left-0 right-0 flex justify-between bg-purple-500 h-14 items-center text-2xl font-semibold w-[95%] m-auto rounded-md'>
                <div className='ml-8'>Saba Owais</div>
                <div>
                    <ul className='flex'>
                        <Link href={"/"}><li className='mr-8'>Home</li></Link>
                        <Link href={"/components/about"}><li className='mr-8'>About</li></Link>
                        <Link href={"/components/contact"}><li className='mr-8'>Contact</li></Link>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
