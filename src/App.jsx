import { AboutMe } from "./components/AboutMe/AboutMe"
import { Banner } from "./components/Banner/Banner"
import { Education } from "./components/Education/Education"
import { ExperienceList } from "./components/Experience/ExperienceList"
import { ProjectsList } from "./components/Projects/ProjectsList"
import { Sidebar } from "./components/Sidebar/Sidebar"

function App() {
  return (
    <div className="mx-auto py-6 px-6 bg-gray-100 rounded-lg">
      <div className="flex flex-col gap-10">
        <Banner />
        <hr className="mt-4 border-t border-emerald-600" />
      </div>
      <div className="mt-5 flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-8 md:gap-12">
          <Education />
          <AboutMe />
          <ExperienceList />
          <ProjectsList />
        </div>
        <div className="shrink-0 md:w-40 border-l border-emerald-600">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App
