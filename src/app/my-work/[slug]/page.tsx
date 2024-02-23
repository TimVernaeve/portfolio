import { notFound } from 'next/navigation'

import projectsJson from '@/assets/projects.json'
import ProjectDetails from '@/components/Project'
import { type ProjectTypes } from '@/types/projects'

interface ProjectProps {
  params: {
    slug: string
  }
}

const Project = ({ params }: ProjectProps) => {
  const { slug } = params

  let projectFound = false

  let project: ProjectTypes | undefined

  for (const year in projectsJson) {
    if (Object.prototype.hasOwnProperty.call(projectsJson, year)) {
      project = projectsJson[year as keyof typeof projectsJson].find(
        (p) => p.slug === slug
      )
      if (project) {
        projectFound = true
        break
      }
    }
  }

  return (
    <main className='flex h-full flex-col'>
      {projectFound && <ProjectDetails project={project as ProjectTypes} />}
      {!projectFound && notFound()}
    </main>
  )
}

export default Project
