import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Modal from "@/components/Modal";

interface Data {
  email: string,
  password: string
}

async function registerData(data: Data) {
  try {
    const res = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const response = await res.json();
    return (response);

  } catch (err: any) {
    console.log(err.message);
  }

}

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = registerData(formData);

    router.push('/')
  }

  return (
    <>
      <Header />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Image className='mx-auto' src='/../public/logo.png' alt='LabQI-logo' height={75} width={75} />
          <h2 className="mt-10 text-center text-2xl font-bold text-gray-900 leading-9">Daftar Akun Baru</h2>
        </div>

        <div className="mt-10 sm:max-w-sm sm:mx-auto sm:w-full">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="outline-0 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="password" required className="outline-0 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
              </div>
            </div>

            <div>
              <button type="submit" className="flex justify-center w-full rounded-md bg-indigo-600 px-3 py-1.5 font-semibold text-white shadow-sm hover:bg-indigo-500">Login</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah Memiliki Akun? <Link href='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
          </p>
        </div>
      </div>
    </>
  )
}
