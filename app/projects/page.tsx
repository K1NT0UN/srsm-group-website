import FadeInView from '@/components/FadeInView'
import ProjectsTabs from '@/components/ProjectsTabs'
import { currentProjects, pipelineProjects, completedProjects } from '@/lib/projects'

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">Our Portfolio</p>
            <h1 className="font-serif text-5xl md:text-7xl text-parchment leading-tight">
              Every Project, <span className="italic text-gold">a Legacy</span>
            </h1>
            <p className="text-parchment/60 mt-6 text-base max-w-xl mx-auto">
              From Hyderabad to Vizag to Bangalore — 24+ delivered projects and a pipeline that keeps growing.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="bg-parchment py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ProjectsTabs
            current={currentProjects}
            pipeline={pipelineProjects}
            completed={completedProjects}
          />
        </div>
      </section>
    </>
  )
}
