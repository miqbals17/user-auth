import Metadata from '@/components/Head/metadata'
import Header from '@/components/Header/Header'
import { Disclosure } from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

export default function Profil() {
  return (
    <>
      <Metadata title='Profil' />
      <div className='sm:hidden'>
        <Disclosure as='nav' className='bg-gray-800'>
          {({open}) => (
          <>
          <Disclosure.Button className='p-2 text-gray-400 hover:bg-gray-700 hover:text-white'>
            {open ? <XMarkIcon className='block h-6 w-6' aria-hidden='true' /> : <Bars3Icon className='block h-6 w-6' aria-hidden='true' />}
          </Disclosure.Button>
          <Disclosure.Panel className='text-gray-500'>
              Yes! you can purchase a license that you can share with your entire team.
          </Disclosure.Panel>
          </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
