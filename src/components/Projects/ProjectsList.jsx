import React from 'react'
import { PROJECTS } from '../../constants/project'
import { Project } from './Project'

export const ProjectsList = () => {
  return (
    <div className="space-y-8">
    <h3 className="text-3xl font-bold text-gray-800">Projects</h3>
    {PROJECTS.map((project, index) => (
      <Project
        key={index}
        title={project.title}
        date={project.date}
        description={project.description}
        tags={project.tags}
        githubLink={project.githubLink}
      />
    ))}
  </div>
  )
}
