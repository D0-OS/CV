import React from "react"
import { FaTelegramPlane, FaGithub, FaEnvelope } from "react-icons/fa"

export const Banner = () => {
  return (
    <div className="flex flex-col items-center gap-6 ">
      <div className="flex gap-10">
        <a href="https://t.me/S_A_xD">
          <FaTelegramPlane className="w-8 h-8 text-emerald-600  hover:opacity-60 " />
        </a>
        <a href="https://github.com/D0-OS">
          <FaGithub className="w-8 h-8 text-emerald-600  hover:opacity-60" />
        </a>
        <a href="mailto:michaildubeshko@gmail.com">
          <FaEnvelope className="w-8 h-8 text-emerald-600 hover:opacity-60" />
        </a>
      </div>
      <div className="w-40 shrink-0">
        <img
          src="../avatar.jpg"
          alt="Mikhail Dubeshko"
          className="rounded-full shadow-lg border-2 border-gray-300"
        />
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-bold text-5xl text-gray-800">Mikhail Dubeshko</h1>
        <h2 className="text-3xl text-emerald-600 font-medium">
          Data analytics
        </h2>
      </div>
    </div>
  )
}
