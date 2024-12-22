import React from "react"
import { Skills } from "./Skills"
import { Languages } from "./Languages"

export const Sidebar = () => {
  return (
    <div className="space-y-8 border-l">
      <Skills />
      <Languages />
    </div>
  )
}