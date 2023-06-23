import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Beranda', href: '/', current: true },
  { name: 'Profil', href: '/profil', current: false },
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
          <Link key={item.name} href={item.href} className={`px-3 py-2 rounded-md font-medium ${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>{item.name}</Link>
        ))}
      </nav>
      <Link href='/login' className='group font-bold text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
        Login<span className='inline-block group-hover:translate-x-1 duration-500 ml-2'>&#8594;</span>
      </Link>
    </header>
  )
}
