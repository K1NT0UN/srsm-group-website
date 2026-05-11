import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import FadeInView from '@/components/FadeInView'
import { currentProjects } from '@/lib/projects'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Mission Statement */}
      <section className="bg-parchment py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInView>
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">Our Purpose</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-snug mb-8">
              Built on Trust. <span className="font-light text-gold">Delivered with Excellence.</span>
            </h2>
            <p className="text-charcoal-light leading-relaxed text-base md:text-lg mb-10">
              For over 25 years, SRSM Group has built homes that stand as testaments to craftsmanship and integrity.
              Debt-free, in-house engineered, and community-focused — we don&apos;t just construct buildings,
              we shape neighbourhoods.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-forest text-sm tracking-widest uppercase font-semibold border-b border-gold pb-0.5 hover:text-gold transition-colors duration-200"
            >
              Our Story <span className="text-gold">→</span>
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* Current Projects */}
      <section className="bg-linen py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.5em] uppercase text-gold mb-3">Ongoing</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest">Flagship Project</h2>
            </div>
          </FadeInView>

          {currentProjects.map((project, i) => (
            <FadeInView key={i} delay={0.1} className="max-w-4xl mx-auto">
              <div className="bg-parchment border border-gold/20 p-10 md:p-14 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <p className="text-xs tracking-[0.4em] uppercase text-gold/70 mb-2">{project.company}</p>
                    <h3 className="font-serif text-4xl md:text-5xl text-forest mb-3 font-light">{project.name}</h3>
                    <p className="text-charcoal-light text-sm mb-4">{project.location} · {project.type}</p>
                    <p className="text-charcoal-light leading-relaxed max-w-xl">{project.description}</p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <span className="inline-block px-4 py-1.5 border border-gold text-gold text-xs tracking-widest uppercase mb-4">
                      {project.status}
                    </span>
                    {project.targetCompletion && (
                      <p className="text-xs text-charcoal-light/70 mt-2">{project.targetCompletion}</p>
                    )}
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-gold/10">
                  <Link
                    href="/projects"
                    className="text-forest text-sm tracking-widest uppercase font-semibold border-b border-gold pb-0.5 hover:text-gold transition-colors"
                  >
                    View All Projects →
                  </Link>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Contact CTA */}
      <section className="bg-parchment py-24 px-6">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">
              Ready to Find Your <span className="font-light text-gold">Perfect Home?</span>
            </h2>
            <p className="text-charcoal-light mb-10 leading-relaxed">
              Whether you&apos;re looking to invest, buy, or simply learn more — our team is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enquire"
                className="px-8 py-4 bg-forest text-parchment text-sm tracking-widest uppercase hover:bg-forest-dark transition-colors duration-200"
              >
                Enquire Now
              </Link>
              <Link
                href="/enquire#site-visit"
                className="px-8 py-4 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-forest transition-colors duration-200"
              >
                Book a Site Visit
              </Link>
            </div>
          </div>
        </FadeInView>
      </section>
    </>
  )
}
