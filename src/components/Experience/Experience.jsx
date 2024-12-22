import React from "react"

export const Experience = ({ company, role, date, description, link }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
      <a href={link}>
        <h4 className="text-3xl font-bold text-gray-700">{company}</h4>
        <p className="text-xl text-emerald-600 font-bold">{role}</p>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="text-gray-700 mt-2">{description}</p>
      </a>
    </div>
  )
}
