import React from "react"

export const AboutMe = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-800">About Me</h3>
      <p className="bg-gray-50 p-6 rounded-lg mt-4 shadow-lg text-gray-700">
        Motivated junior software engineer with two years of experience in
        coding, graphic, and text data processing. Passionate about solving
        complex problems and delivering efficient solutions in programming and
        data management.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg mt-6 shadow-lg text-gray-700">
        <h4 className="text-xl font-semibold text-gray-800">
          Skills & Strengths
        </h4>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>
            Programming: Proficient in developing efficient, clean, and
            maintainable code.
          </li>
          <li>
            Data Processing: Skilled in handling graphic and text data for
            various applications.
          </li>
          <li>
            Problem-Solving: Strong analytical skills for tackling complex
            technical challenges.
          </li>
          <li>
            Adaptability: Quick learner with the ability to adapt to new tools
            and technologies.
          </li>
          <li>
            Teamwork: Collaborative mindset with experience working in team
            environments.
          </li>
          <li>
            Attention to Detail: Focused on delivering high-quality results with
            precision.
          </li>
        </ul>
      </div>
    </section>
  )
}
