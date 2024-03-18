import Link from 'next/link'

import Icon from '@/components/Icon'
import Nav from '@/components/Nav'
import ProjectImages from '@/components/Project/ProjectImages'
import { type ProjectTypes } from '@/types/projects'

interface ProjectDetailsProps {
  project: ProjectTypes
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const paragraphs = project.description.split('\n')

  return (
    <section className='flex flex-col min-h-screen gap-8 pb-8 p-8'>
      <Nav />
      <div className='flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-x-4 '>
        <div className='flex flex-col gap-8 col-span-6'>
          <div className='flex flex-col gap-1'>
            <h1 className='font-bold uppercase text-xl sm:text-xxl'>
              {project.name}
            </h1>
            <div className='flex gap-4 flex-wrap'>
              {project.tags.map((tag, key) => (
                <span
                  className='text-xs font-bold border-[0.5px] border-white rounded-full px-2 py-1 box-border'
                  key={key}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className='flex gap-8 h-fit flex-col sm:flex-row'>
            <a
              href={project.link}
              target='_blank'
              className='flex gap-4 h-fit w-full sm:w-fit box-border items-center justify-center uppercase text-s sm:text-xs border-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white'
            >
              link to website
              <Icon className='w-6 h-6' name='internet' />
            </a>
            <a
              href={project.github}
              target='_blank'
              className='flex gap-4 h-fit w-full sm:w-fit box-border items-center justify-center uppercase text-s sm:text-xs border-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white'
            >
              link to github
              <Icon className='w-6 h-6' name='github' />
            </a>
          </div>
          <div className='flex flex-col gap-4 pb-8'>
            {paragraphs.map((paragraph, index) => (
              <p className='text-m' key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <Link
            href='/'
            className='flex gap-4 h-fit w-fit items-center justify-center uppercase text-s box-border border-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white'
          >
            <div className='flex relative w-6 h-6'>
              <Icon name='arrow-down' className='w-6 h-6 rotate-90' />
            </div>
            back to homepage
          </Link>
        </div>
        <ProjectImages images={project.images} alt={project.name} />
      </div>
    </section>
  )
}

export default ProjectDetails
