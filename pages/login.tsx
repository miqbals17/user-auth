import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <Header />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Image className='mx-auto' src='/../public/logo.png' alt='LabQI-logo' height={75} width={75}/>
          <h2 className="mt-10 text-center text-2xl font-bold text-gray-900 leading-9">Masuk ke Akun Anda!</h2>
        </div>

        <div>
          <form action="#" method="POST">
            <div>
              <label htmlFor="">Alamat Email</label>
              <div>
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 ring-1 py-1.5 text-gray-900 placeholder:text-gray-400" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
