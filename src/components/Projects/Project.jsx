import React from "react"

export const Project = ({ title, date, description, tags, githubLink }) => {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-300 transition-transform transform hover:-translate-y-1"
    >
      <h3 className="text-2xl font-semibold text-emerald-700">{title}</h3>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="text-gray-700 mt-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-3 mt-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-teal-200 text-emerald-700 py-1 px-4 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
