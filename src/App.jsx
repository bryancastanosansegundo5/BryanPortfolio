import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portrait from './assets/bryan-portrait-natural.webp'
import cv from './assets/Curriculum Vitae - Bryan Castano San Segundo.pdf'
import { projects, moreProjects, experience, earlier, education, toolGroups } from './portfolioData'
import './index.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className={`inline-block transition-transform duration-300 ${diagonal ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : 'group-hover:translate-x-1'}`}>{diagonal ? '↗' : '→'}</span>
}

function SectionHeading({ number, title, aside }) {
  return (
    <div className="reveal flex flex-col gap-5 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
      <div className="flex items-start gap-5 md:gap-12">
        <span className="pt-2 font-mono text-xs text-accent">{number}</span>
        <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">{title}</h2>
      </div>
      {aside && <p className="max-w-xs text-sm leading-relaxed text-muted md:text-right">{aside}</p>}
    </div>
  )
}

function App() {
  const root = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.hero-kicker', { opacity: 0, y: 18, duration: 0.65 })
      .from('.hero-line', { yPercent: 110, duration: 1.05, stagger: 0.12 }, '-=0.3')
      .from('.hero-photo', { clipPath: 'inset(100% 0 0 0)', scale: 1.08, duration: 1.15 }, '-=0.9')
      .from('.hero-after', { opacity: 0, y: 20, duration: 0.7, stagger: 0.08 }, '-=0.55')

    gsap.utils.toArray('.reveal').forEach((element) => {
      gsap.from(element, {
        opacity: 0, y: 42, duration: 0.85, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true },
      })
    })

    gsap.to('.reading-progress', {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: true },
    })
  }, { scope: root })

  const closeMenu = () => setMenuOpen(false)

  return (
    <div ref={root} className="min-h-screen overflow-hidden bg-ink text-cream">
      <div className="reading-progress fixed left-0 top-0 z-50 h-[3px] w-full origin-left scale-x-0 bg-accent" />
      <a className="skip-link" href="#contenido">Ir al contenido</a>

      <header className="relative z-40 border-b border-line/70">
        <div className="shell flex h-20 items-center justify-between gap-5">
          <a href="#inicio" className="group font-display text-xl font-bold tracking-tight sm:text-2xl" onClick={closeMenu} aria-label="Bryan Castaño, volver al inicio">BC<span className="text-accent">.</span></a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-[13px] text-muted md:flex">
            <a className="nav-link" href="#proyectos">Proyectos</a>
            <a className="nav-link" href="#experiencia">Experiencia</a>
            <a className="nav-link" href="#formacion">Formación</a>
            <a className="nav-link" href="#sobre-mi">Sobre mí</a>
          </nav>
          <a href="mailto:bryan.sanse@gmail.com" className="group hidden items-center gap-3 text-sm font-medium text-cream transition-colors hover:text-accent md:inline-flex">Hablemos <Arrow diagonal /></a>
          <button className="inline-flex h-10 w-10 items-center justify-center border border-line text-lg md:hidden" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? '×' : '☰'}</button>
        </div>
        {menuOpen && <nav className="absolute left-0 right-0 top-full flex flex-col border-b border-line bg-ink px-6 py-3 shadow-2xl md:hidden" aria-label="Navegación móvil">
          {[['Proyectos', '#proyectos'], ['Experiencia', '#experiencia'], ['Formación', '#formacion'], ['Sobre mí', '#sobre-mi'], ['Contacto', '#contacto']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="border-b border-line/60 py-4 font-display text-2xl last:border-0">{label}</a>)}
        </nav>}
      </header>

      <main id="contenido">
        <section id="inicio" className="hero relative isolate pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-20">
          <div className="hero-orbit pointer-events-none absolute inset-0 -z-10" />
          <div className="shell hero-layout">
            <div className="hero-title relative z-10">
              <p className="hero-kicker mb-6 flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] text-accent sm:mb-8 sm:text-xs"><span className="h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_18px_#d99578]" /> DESARROLLADOR FULL STACK · ESPAÑA</p>
              <h1 className="font-display text-[clamp(4.1rem,9.5vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.078em] text-cream">
                <span className="block overflow-hidden pb-[0.09em]"><span className="hero-line block">Bryan</span></span>
                <span className="block overflow-hidden pb-[0.09em]"><span className="hero-line block">Castaño<span className="text-accent">.</span></span></span>
              </h1>
            </div>
            <div className="hero-after hero-picture">
              <div className="portrait-frame relative aspect-square overflow-hidden">
                <img className="hero-photo h-full w-full object-cover object-center" src={portrait} alt="Retrato de Bryan Castaño" fetchPriority="high" />
              </div>
            </div>
            <div className="hero-details relative z-10">
              <div className="grid max-w-xl gap-5 border-t border-line pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="hero-after max-w-md text-lg leading-[1.55] text-cream/85 sm:text-xl">Diseño y desarrollo soluciones digitales que funcionan de verdad, del dato a la interfaz.</p>
                <a href="#proyectos" className="hero-after text-link group inline-flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-accent">Ver proyectos <Arrow diagonal /></a>
              </div>
              <div className="hero-after hero-actions mt-7">
                <a href={cv} download className="action-primary group inline-flex items-center gap-3 bg-accent px-5 py-3 text-sm font-semibold text-ink">Descargar CV <Arrow diagonal /></a>
                <a href="https://www.linkedin.com/in/bryan-castaño-san-segundo/" target="_blank" rel="noreferrer" className="action-secondary group inline-flex items-center gap-3 border border-line px-5 py-3 text-sm font-medium">LinkedIn <Arrow diagonal /></a>
                <a href="https://github.com/bryancastanosansegundo5" target="_blank" rel="noreferrer" className="action-secondary group inline-flex items-center gap-3 border border-line px-5 py-3 text-sm font-medium">GitHub <Arrow diagonal /></a>
              </div>
            </div>
          </div>
          <div className="shell hero-after mt-12 flex items-center justify-between border-t border-line pt-5 text-xs text-muted lg:mt-16">
            <span>Disponible para nuevos retos</span><span className="hidden sm:block">Desliza para explorar</span><span aria-hidden="true" className="text-accent">↓</span>
          </div>
        </section>

        <section id="proyectos" className="shell scroll-mt-20 pb-28 pt-14 md:pb-40 md:pt-20">
          <SectionHeading number="01" title="Trabajo seleccionado" aside="Una muestra de proyectos donde combino producto, desarrollo e interacción." />
          <div className="mt-12 grid gap-x-8 gap-y-20 md:mt-20 md:grid-cols-2">
            {projects.map((project) => <article key={project.name} className="project-card reveal">
              <a href={project.live} target="_blank" rel="noreferrer" className="project-visual group block overflow-hidden border border-line bg-[#241d1c] p-2 sm:p-3" aria-label={`Ver ${project.name} en directo`}>
                <div className="flex h-8 items-start justify-between gap-3 px-2">
                  <span className="flex gap-1.5 pt-1" aria-hidden="true"><i className="h-1.5 w-1.5 rounded-full bg-muted/60" /><i className="h-1.5 w-1.5 rounded-full bg-muted/60" /><i className="h-1.5 w-1.5 rounded-full bg-muted/60" /></span>
                  <span className="truncate font-mono text-[10px] text-muted">{project.name}</span>
                  <span className="project-open text-base leading-none text-accent" aria-hidden="true">↗</span>
                </div>
                <div className="aspect-[16/9] overflow-hidden border border-line/70 bg-ink">
                  <img src={project.image} alt={`Captura del proyecto ${project.name}`} loading="lazy" className="project-shot h-full w-full object-contain object-center" />
                </div>
              </a>
              <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-line pb-4">
                <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
                <span className="shrink-0 text-xs text-muted">{project.type}</span>
              </div>
              <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-2">{project.stack.map((tech) => <span key={tech} className="border border-line px-3 py-1.5 text-[11px] text-cream/75">{tech}</span>)}</div>
              <div className="mt-6 flex items-center gap-6 text-sm"><a className="text-link group font-medium text-accent" href={project.live} target="_blank" rel="noreferrer">Ver proyecto <Arrow diagonal /></a>{project.repo && <a className="text-link group text-muted hover:text-cream" href={project.repo} target="_blank" rel="noreferrer">Código <Arrow diagonal /></a>}</div>
            </article>)}
          </div>
          <div className="reveal mt-32 border-t border-line pt-6 md:mt-44">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-5"><h3 className="font-display text-3xl tracking-tight sm:text-4xl">Más proyectos y experimentos</h3><a className="text-link group text-sm font-semibold text-accent" href="https://github.com/bryancastanosansegundo5" target="_blank" rel="noreferrer">Ver GitHub <Arrow diagonal /></a></div>
            <div>{moreProjects.map(([name, type, url]) => <a key={name} className="more-project group grid items-center gap-2 border-t border-line/70 py-4 sm:grid-cols-[1fr_1fr_auto] sm:gap-5" href={url} target="_blank" rel="noreferrer"><span className="font-display text-lg sm:text-xl">{name}</span><span className="text-xs text-muted">{type}</span><span className="more-project-arrow text-xl text-accent">↗</span></a>)}</div>
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-20 bg-panel/65 py-28 md:py-40">
          <div className="shell">
            <SectionHeading number="02" title="Experiencia" aside="Mi recorrido une desarrollo, sistemas y comprensión del negocio." />
            <div className="mt-16 lg:mt-24">{experience.map((job) => <article key={`${job.company}-${job.period}`} className="experience-row reveal grid gap-4 border-t border-line py-8 md:grid-cols-[0.75fr_1.35fr_1.8fr] md:gap-8 md:py-11">
              <span className="font-mono text-xs text-accent md:pt-2">{job.period}</span>
              <div><h3 className="font-display text-2xl font-medium leading-tight sm:text-3xl">{job.role}</h3><p className="mt-2 text-sm text-accent">{job.company}</p></div>
              <p className="max-w-[55ch] text-sm leading-[1.8] text-muted md:pt-1">{job.description}</p>
            </article>)}</div>
            <div className="reveal mt-7 border-t border-line pt-7 lg:grid lg:grid-cols-[0.75fr_3.15fr] lg:gap-8"><p className="mb-5 font-mono text-xs text-muted lg:mb-0">Anteriormente</p><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{earlier.map(([company, role, period]) => <div key={`${company}-${period}`} className="border-l border-accent/50 pl-4"><p className="text-sm font-medium">{role}</p><p className="mt-1 text-xs leading-relaxed text-muted">{company} · {period}</p></div>)}</div></div>
          </div>
        </section>

        <section id="formacion" className="shell scroll-mt-20 py-28 md:py-40">
          <SectionHeading number="03" title="Siempre aprendiendo" aside="Una base técnica sólida y una nueva especialización en inteligencia artificial y datos." />
          <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-2">{education.map((item) => <article key={item.title} className={`reveal education-card flex min-h-52 flex-col justify-between border p-6 sm:p-8 ${item.current ? 'border-accent bg-accent text-ink' : 'border-line bg-panel/45'}`}>
            <div className="flex items-start justify-between gap-4"><span className={`text-xs font-medium ${item.current ? 'text-ink/70' : 'text-muted'}`}>{item.qualification}</span>{item.current && <span className="h-2 w-2 rounded-full bg-ink" aria-label="En curso" />}</div>
            <div><h3 className="mt-8 max-w-[20ch] font-display text-[clamp(1.6rem,3vw,2.5rem)] font-medium leading-[1.1] tracking-tight">{item.title}</h3>{item.detail && <p className={`mt-3 text-xs ${item.current ? 'text-ink/70' : 'text-muted'}`}>{item.detail}</p>}</div>
          </article>)}</div>
        </section>

        <section id="sobre-mi" className="scroll-mt-20 border-y border-line bg-[#1e1818] py-28 md:py-40">
          <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="reveal"><span className="font-mono text-xs text-accent">04 / Sobre mí</span><h2 className="mt-8 max-w-[9ch] font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Tecnología con criterio humano.</h2></div>
            <div className="reveal lg:pt-8">
              <p className="max-w-[48ch] font-display text-2xl leading-[1.35] tracking-tight text-cream sm:text-3xl">Me gusta entender el problema antes de escribir la primera línea de código.</p>
              <p className="mt-7 max-w-[65ch] text-sm leading-[1.9] text-muted">Soy Bryan, desarrollador full stack con experiencia en aplicaciones web, sistemas empresariales e integraciones. He trabajado tanto en producto visual como en procesos internos que necesitan ser fiables. Ahora amplío ese recorrido con una especialización en Inteligencia Artificial y Big Data.</p>
              <div className="mt-12 space-y-8">{toolGroups.map(([category, ...tools]) => <div key={category} className="border-t border-line pt-5 sm:grid sm:grid-cols-[135px_1fr] sm:gap-6"><h3 className="mb-3 text-xs text-accent sm:mb-0">{category}</h3><p className="text-sm leading-[1.9] text-cream/80">{tools.join(' / ')}</p></div>)}</div>
              <a href={cv} download className="text-link group mt-11 inline-flex items-center gap-4 border-b border-accent pb-2 text-sm font-semibold text-accent">Descargar CV <Arrow diagonal /></a>
            </div>
          </div>
        </section>

        <section id="contacto" className="shell scroll-mt-20 py-28 md:py-40">
          <div className="reveal border-t border-line pt-6"><span className="font-mono text-xs text-accent">05 / Contacto</span></div>
          <div className="reveal mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div><h2 className="max-w-[10ch] font-display text-[clamp(3.7rem,8.6vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">¿Hacemos algo <span className="text-accent">bueno?</span></h2><p className="mt-8 max-w-md text-base leading-relaxed text-muted">Si buscas a alguien que pueda moverse entre frontend, backend y producto, me encantará conocer el reto.</p></div>
            <div className="flex flex-col gap-5 lg:items-end"><a className="group break-all border-b border-accent pb-2 font-display text-xl text-accent sm:text-2xl" href="mailto:bryan.sanse@gmail.com">bryan.sanse@gmail.com <Arrow diagonal /></a><a className="group text-sm text-cream/80 hover:text-accent" href="tel:+34657423330">+34 657 423 330 <Arrow diagonal /></a></div>
          </div>
          <div className="reveal mt-28 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-6 text-xs text-muted"><span>© {new Date().getFullYear()} Bryan Castaño San Segundo</span><div className="flex gap-6"><a className="hover:text-accent" href="https://www.linkedin.com/in/bryan-castaño-san-segundo/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="hover:text-accent" href="https://github.com/bryancastanosansegundo5" target="_blank" rel="noreferrer">GitHub ↗</a><a className="hover:text-accent" href="#inicio">Volver arriba ↑</a></div></div>
        </section>
      </main>
    </div>
  )
}

export default App
