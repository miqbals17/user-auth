import Image from 'next/image'
import Link from 'next/link'
import Style from './header.module.css';

const navigation = [
  { name: 'Beranda', href: '/', current: true },
  { name: 'Profil', href: '#', current: false },
  { name: 'Kontak', href: '#', current: false },
]

export default function Header() {
  return (
    <header className='bg-gray-800 flex justify-between items-center h-16 p-10'>
      <div>
        <Link href='/home'><Image src='/../public/logo.png' alt='LabQI-logo' width={45} height={45} /></Link>
      </div>
      <nav className='flex space-x-4'>
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className='text-white px-3 py-2 rounded-md font-medium hover:bg-white hover:text-gray-800'>{item.name}</Link>
        ))}
      </nav>
      <div className='transition duration-500 hover:translate-x-1 hover:bg-gray-900 rounded-lg p-2'>
        <Link href='/login' className='font-bold text-white'>Login <span>&#8594;</span></Link>
      </div>
    </header>
  )
}
