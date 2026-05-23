import { useEffect, useRef } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'

function App() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const refs = revealRefs.current.filter(Boolean) as HTMLElement[]
    refs.forEach((el) => observer.observe(el))
    return () => refs.forEach((el) => observer.unobserve(el))
  }, [])

  const r = (i: number) => (el: HTMLElement | null) => {
    revealRefs.current[i] = el
  }

  return (
    <>
      {/* Sticky header */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <span className="text-[var(--color-text-h)] font-semibold tracking-tight text-lg">
            spiegelhauer
          </span>
          <nav className="flex gap-8 text-sm text-[var(--color-text)]">
            <a href="#craft" className="hover:text-[var(--color-text-h)] transition-colors">
              Work
            </a>
            <a href="#story" className="hover:text-[var(--color-text-h)] transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="text-[var(--color-accent)] hover:opacity-80 transition-opacity font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-svh flex flex-col justify-center items-center text-center px-6 pt-14 overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 z-0">
          <MeshGradient
            colors={['#0f1119', '#1a1c2e', '#2d1f1a', '#1c2326']}
            distortion={0.6}
            swirl={0.3}
            speed={0.08}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-[var(--color-bg)]/40" />
        {/* Content */}
        <div className="relative z-10">
        <p className="animate-fade-up text-sm tracking-widest uppercase text-[var(--color-accent)] mb-6">
          Copenhagen, Denmark
        </p>
        <h1 className="animate-fade-up animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-text-h)] leading-none mb-6">
          Lucas Levin
        </h1>
        <p className="animate-fade-up animate-fade-up-delay-2 text-lg sm:text-xl text-[var(--color-text)] max-w-lg leading-relaxed mb-10">
          Fullstack engineer with 10+ years building robust Node.js backends and polished React
          frontends.
        </p>
        <a
          href="#contact"
          className="animate-fade-up animate-fade-up-delay-3 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-text-h)] text-[var(--color-bg)] font-medium text-sm tracking-wide accent-glow no-underline"
        >
          Get in touch
          <span className="text-base">→</span>
        </a>
        </div>
      </section>

      {/* Separator */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-[var(--color-border)]" />
      </div>

      {/* Craft — Support section */}
      <section id="craft" className="py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <div ref={r(0)} className="reveal">
            <p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-4">
              What I do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-h)] mb-6">
              Fullstack craftsmanship
            </h2>
            <p className="text-[var(--color-text)] leading-relaxed max-w-xl">
              I build from database to deployment. TypeScript across the stack, React on the front,
              Node.js on the back — with a deep understanding of how they connect.
            </p>
          </div>

          <div ref={r(1)} className="reveal mt-20 grid sm:grid-cols-2 gap-16">
            <div>
              <div className="text-sm font-mono text-[var(--color-accent)] mb-3">01</div>
              <h3 className="text-xl font-semibold text-[var(--color-text-h)] mb-2">Frontend</h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                React, Next.js, TypeScript. Design systems, accessibility, and performance. I care
                about the pixel on screen as much as the code behind it.
              </p>
            </div>
            <div>
              <div className="text-sm font-mono text-[var(--color-accent)] mb-3">02</div>
              <h3 className="text-xl font-semibold text-[var(--color-text-h)] mb-2">Backend</h3>
              <p className="text-[var(--color-text)] leading-relaxed text-sm">
                Node.js, APIs, databases. Event-driven architectures, message queues, and the
                patterns that keep systems reliable at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-[var(--color-border)]" />
      </div>

      {/* Story — Detail section */}
      <section id="story" className="py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <div ref={r(2)} className="reveal">
            <p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-h)] mb-8">
              A decade of building for the web
            </h2>
            <div className="space-y-5 text-[var(--color-text)] leading-relaxed">
              <p>
                Based in Copenhagen, I've spent over ten years shipping software — from early-stage
                startups to established platforms. I'm drawn to the full picture: how data flows,
                how interfaces feel, and how teams build together.
              </p>
              <p>
                The stack I reach for is Node.js and React — not because they're popular, but
                because they're productive. TypeScript across the board. Postgres when it fits, Redis
                when it needs to be fast.
              </p>
              <p>
                Outside of code, I'm interested in design, developer tooling, and the small details
                that make software feel right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-[var(--color-border)]" />
      </div>

      {/* Contact — Final CTA */}
      <section id="contact" className="py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-xl text-center">
          <div ref={r(3)} className="reveal">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-h)] mb-4">
              Let's work together
            </h2>
            <p className="text-[var(--color-text)] leading-relaxed mb-10">
              Open to freelance projects, consulting, and interesting collaborations. Based in
              Copenhagen but comfortable working remotely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:lucas@spiegelhauer.fyi"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-medium text-sm tracking-wide accent-glow no-underline"
              >
                lucas@spiegelhauer.fyi
              </a>
              <a
                href="https://github.com/lucaslevin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-h)] font-medium text-sm tracking-wide hover:border-[var(--color-accent)] transition-colors no-underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--color-text)]">
          <span>© {new Date().getFullYear()} Lucas Levin</span>
          <span>Copenhagen, Denmark</span>
        </div>
      </footer>
    </>
  )
}

export default App