import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Beranda', href: '/', current: true },
  { name: 'Profil', href: '/profil', current: false },
  { name: 'Kontak', href: '#', current: false },
]

export default function Header() {
  return (
    <header className='bg-gray-800 flex justify-between items-center h-16 p-10'>
      <Disclosure as='button' className='sm:hidden'>
        {({open}) => (
          <>
            <Disclosure.Button className='inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white'>
              {open ? <XMarkIcon className='block h-6 w-6' /> : <Bars3Icon className='block h-6 w-6'/>}
            </Disclosure.Button>
            <Disclosure.Panel>
              Tes Disclosure
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div>
        <Link href='/home'><Image src='/../public/logo.png' alt='LabQI-logo' width={45} height={45} /></Link>
      </div>
      <nav className='hidden space-x-4 sm:flex'>
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className={`px-3 py-2 rounded-md font-medium ${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>{item.name}</Link>
        ))}
      </nav>
      <Link href='/login' className='hidden sm:inline group font-bold text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
        Login<span className='inline-block group-hover:translate-x-1 duration-500 ml-2'>&#8594;</span>
      </Link>
    </header>
  )
}
