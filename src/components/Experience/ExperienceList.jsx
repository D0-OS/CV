import React from 'react'
import { EXPERIENCE } from '../../constants/experience'
import { Experience } from './Experience'

export const ExperienceList = () => {
    return (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-gray-800">Experience</h3>
        {EXPERIENCE.map((experience, index) => (
          <Experience
            key={index}
            company={experience.company}
            role={experience.role}
            date={experience.date}
            description={experience.description}
            link={experience.link}
          />
        ))}
      </div>
    )
  }
