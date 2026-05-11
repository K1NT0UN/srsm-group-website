import Link from 'next/link'
import FadeInView from '@/components/FadeInView'

const coreStrengths = [
  '24+ completed projects across residential, commercial, and mixed-use segments',
  'Debt-free balance sheet — no existing loans or credit facilities',
  'In-house civil engineering team ensuring quality control and execution excellence',
  'Long-standing relationships with architects, contractors, and accountants',
  'Active RERA registration underway for the flagship Kollur project',
]

const entities = [
  { name: 'SR Builders and Developers', segment: 'Residential & Villas', active: true },
  { name: 'SM Builders', segment: 'Residential & Commercial', active: true },
  { name: 'SM Builders and Developers', segment: 'Residential', active: true },
  { name: 'SM Projects', segment: 'Residential & Mixed-Use', active: true },
  { name: 'SM Constructions', segment: 'Residential & Commercial', active: false },
  { name: 'SM Infra Developers', segment: 'Residential', active: false },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-forest pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">Who We Are</p>
            <h1 className="font-serif text-5xl md:text-7xl text-parchment leading-tight">
              About <span className="italic text-gold">SRSM Group</span>
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* About the Company */}
      <section className="bg-parchment py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeInView direction="left">
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">Our Legacy</p>
            <h2 className="font-serif text-4xl text-forest mb-6 leading-snug">
              25 Years of Building <span className="italic">with Purpose</span>
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-5">
              SRSM Group is a Hyderabad-based conglomerate with over 25 years of legacy in construction and real estate development.
              Operating through six legal entities, the Group has delivered 24+ residential and commercial projects across Hyderabad,
              Vizag, and Bangalore.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              The Group has built its reputation on quality construction, timely delivery, and a customer-first philosophy.
              With a strong pipeline of upcoming projects in Borampet, Nagole, and Medchal, SRSM Group is poised for its
              next phase of significant growth.
            </p>
          </FadeInView>

          <FadeInView direction="right" delay={0.1}>
            <div className="bg-linen p-8 border-l-4 border-gold">
              <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">Core Strengths</p>
              <ul className="space-y-4">
                {coreStrengths.map((s, i) => (
                  <li key={i} className="flex gap-3 text-charcoal-light text-sm leading-relaxed">
                    <span className="text-gold mt-0.5 shrink-0">◆</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-forest py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInView>
            <p className="text-xs tracking-[0.5em] uppercase text-gold/70 mb-6">Mission</p>
            <blockquote className="font-serif text-3xl md:text-4xl text-parchment leading-snug italic mb-8">
              &ldquo;To deliver homes and spaces that enrich lives — built with integrity, crafted with precision,
              and rooted in the communities we serve.&rdquo;
            </blockquote>
            <p className="text-parchment/60 text-sm">
              Cities of Operation: Hyderabad · Vizag · Bangalore
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Group Entities */}
      <section className="bg-linen py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.5em] uppercase text-gold mb-3">Structure</p>
              <h2 className="font-serif text-4xl text-forest">Group Entities</h2>
            </div>
          </FadeInView>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {entities.map((entity, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <div className={`p-6 border ${entity.active ? 'border-gold/30 bg-parchment' : 'border-charcoal/10 bg-parchment/50'}`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg text-forest leading-snug">{entity.name}</h3>
                    <span className={`text-[10px] tracking-widest uppercase px-2 py-0.5 shrink-0 ${entity.active ? 'bg-gold/10 text-gold' : 'bg-charcoal/5 text-charcoal-light/50'}`}>
                      {entity.active ? 'Active' : 'Closed'}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-light/70">{entity.segment}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-parchment py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.5em] uppercase text-gold mb-3">The People Behind</p>
              <h2 className="font-serif text-4xl text-forest">Leadership</h2>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Promoter */}
            <FadeInView delay={0} className="md:col-span-1">
              <div className="bg-linen border border-gold/20 p-8">
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mb-5">
                  <span className="font-serif text-2xl text-forest">VR</span>
                </div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-1">Founder & Promoter</p>
                <h3 className="font-serif text-2xl text-forest mb-2">Mr. Vasu Raavi</h3>
                <p className="text-xs text-charcoal-light/60 uppercase tracking-wider mb-4">Vision · Strategy · Legacy</p>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Starting from humble beginnings in Nellore, Andhra Pradesh, Mr. Vasu Raavi built the SRSM Group from
                  the ground up over more than two decades. His hands-on involvement — from land acquisition to project
                  delivery — has shaped the Group&apos;s culture of quality and integrity.
                </p>
              </div>
            </FadeInView>

            {/* Co-Directors placeholder */}
            {[
              { initials: '—', role: 'Co-Director', tagline: 'Operations · Execution' },
              { initials: '—', role: 'Co-Director', tagline: 'Sales · Customer Relations' },
            ].map((person, i) => (
              <FadeInView key={i} delay={(i + 1) * 0.1}>
                <div className="bg-linen border border-gold/10 p-8 opacity-60">
                  <div className="w-14 h-14 rounded-full bg-forest/5 flex items-center justify-center mb-5">
                    <span className="font-serif text-2xl text-forest/40">{person.initials}</span>
                  </div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-1">{person.role}</p>
                  <h3 className="font-serif text-xl text-forest/50 mb-2">To be announced</h3>
                  <p className="text-xs text-charcoal-light/40 uppercase tracking-wider">{person.tagline}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Projects */}
      <section className="bg-linen py-20 px-6">
        <FadeInView>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">Our Work</p>
            <h2 className="font-serif text-3xl text-forest mb-6">Explore 24+ Completed Projects</h2>
            <Link
              href="/projects"
              className="inline-block px-8 py-4 bg-forest text-parchment text-sm tracking-widest uppercase hover:bg-forest-dark transition-colors duration-200"
            >
              View All Projects
            </Link>
          </div>
        </FadeInView>
      </section>
    </>
  )
}
