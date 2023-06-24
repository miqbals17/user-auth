import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Header />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Image className='mx-auto' src='/../public/logo.png' alt='LabQI-logo' height={75} width={75}/>
          <h2 className="mt-10 text-center text-2xl font-bold text-gray-900 leading-9">Masuk ke Akun Anda!</h2>
        </div>

        <div className="mt-10 sm:max-w-sm sm:mx-auto sm:w-full">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email">Alamat Email</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 ring-1 py-1.5 text-gray-900 placeholder:text-gray-400" />
              </div>
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="password" required className="block w-full rounded-md border-0 ring-1 py-1.5 text-gray-900" />
              </div>
            </div>

            <div>
              <button type="submit" className="w-full rounded-md bg-indigo-600 px-3 py-1.5 font-semibold text-white shadow-sm hover:bg-indigo-500">Login</button>
              <div className="mt-2">
                <p>Pengguna Baru? <Link href='/register' className="text-indigo-600">Register</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
