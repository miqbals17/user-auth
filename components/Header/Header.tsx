import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
  current: String,
}

const navigation = [
  { name: 'Beranda', href: '/', current: false },
  { name: 'Profil', href: '/profil', current: false },
  { name: 'Kontak', href: '/kontak', current: false },
]

export default function Header(props: Props) {
  navigation.map((item) => item.current = false);
  navigation[navigation.findIndex((item) => (item.name === props.current))].current = true;

  return (
    <>
      <Disclosure as='nav' className='bg-gray-800'>
        {({ open }) => (
          <>
            <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-20 items-center justify-between'>
              <Link href='/'><Image src='/../public/logo.png' width={45} height={45} alt='LabQI-Logo'></Image></Link>
              <div className='hidden sm:block'>
                <div className='flex space-x-4'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className={`text-base rounded-md px-3 py-2 text-sm font-medium ${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>{item.name}</Link>
                  ))}
                </div>
              </div>
              <Link href='/login' className='hidden sm:inline-block group font-bold text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
                Masuk <span className='inline-block group-hover:translate-x-1 duration-500'>&#8594;</span>
              </Link>
              <div className='flex sm:hidden'>
                <Disclosure.Button className='rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white'>
                  {open ? (<XMarkIcon className='block h-6 v-6' />) : (<Bars3Icon className='block h-6 v-6' />)}
                </Disclosure.Button>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  )
}
