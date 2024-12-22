import React from "react"

export const Education = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-800">Education</h3>
      <a href="https://mmf.bsu.by/ru/">
        <div className="bg-gray-50 p-6 rounded-lg mt-4 shadow-lg flex gap-3 items-center">
          <img
            src="../mmfLogo.svg"
            className="w-20 h-20 rounded-full shadow-lg border-2 border-gray-300 bg-emerald-600"
            alt="MMF"
          />
          <p className="text-3xl text-gray-700">
            <strong>Belarusian State University</strong> - Faculty of Mechanics
            and Mathematics (2023-2027)
          </p>
        </div>
      </a>
    </section>
  )
}
