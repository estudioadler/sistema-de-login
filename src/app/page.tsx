"use client"

import Link from "next/link"

export default function Home() {
  return (
    <ul className="flex flex-col gap-4">
      <li><Link href={"/loginPage"} className="bg-neutral-900 text-white py-2 px-4">Pagina de Login</Link></li>
      <li><Link href={"/register"} className="bg-neutral-900 text-white py-2 px-4">Pagina de registro</Link></li>
      <li><Link href={"/verifyEmail"} className="bg-neutral-900 text-white py-2 px-4">Pagina de verificar email</Link></li>
      <li><Link href={"/confirmEmail"} className="bg-neutral-900 text-white py-2 px-4">Pagina de confirmar email</Link></li>
      <li><Link href={"/registerConfirmed"} className="bg-neutral-900 text-white py-2 px-4">Pagina de registro confirmado</Link></li>
      <li><Link href={"/forgotPassword"} className="bg-neutral-900 text-white py-2 px-4">Pagina de esqueceu a senha</Link></li>
      <li><Link href={"/forgotPassword"} className="bg-neutral-900 text-white py-2 px-4">Pagina de confira seu email (link)</Link></li>
    </ul>
  )
}
