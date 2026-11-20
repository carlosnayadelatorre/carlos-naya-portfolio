import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import {projects,profile} from './data';

export const metadata:Metadata=process.env.NEXT_PUBLIC_SITE_URL?{alternates:{canonical:'/'}}:{};

const experience=[
  {date:'Apr 2024 — Present',company:'Faserplast AG',role:'Warehouse & Logistics Assistant',text:'Order fulfilment, inventory, shipment preparation and quality control in Switzerland.'},
  {date:'Oct 2023 — Apr 2024',company:'SPAR Handels AG',role:'Warehouse Operator',text:'Fresh-product and cold-chain operations in a high-volume distribution environment.'},
  {date:'Jul 2021 — Aug 2023',company:'Shingari Foods',role:'Logistics Manager',text:'Led a four-person team and coordinated a three-vehicle distribution fleet.'},
  {date:'Jan 2017 — Mar 2021',company:'Groundforce & Swissport',role:'Check-in & Boarding Agent',text:'International passenger service and time-critical operations at Barcelona Airport.'},
];

export default function Home(){return <><Header/><main id="main">
  <section className="hero wrap" aria-labelledby="hero-title">
    <div className="hero-kicker"><p className="eyebrow">AI & Business Automation</p><p className="hero-location">Open to opportunities in Switzerland</p></div>
    <h1 id="hero-title">Business challenges.<br/><span>Intelligent solutions.</span></h1>
    <div className="hero-bottom"><div className="hero-statement"><p>I design AI-powered workflows, connect business systems and turn complex operations into efficient, scalable processes.</p><div className="hero-actions"><a className="button primary" href="#work">Explore the work</a><a className="text-link" href="/Carlos-Naya-CV.pdf" target="_blank" rel="noreferrer">View my CV</a></div></div><div className="hero-aside"><span className="eyebrow">Business understanding.<br/>Technical execution.</span><p>Business Operations<br/>Process Optimization<br/>Digital Transformation</p></div></div>
    <div className="hero-foot"><span>Business Administration · Applied AI · Operations Experience</span><span>Airtable · n8n · Make · APIs · Applied AI</span></div>
  </section>

  <section id="work" className="work-section wrap" aria-labelledby="work-title">
    <div className="section-heading"><p className="eyebrow">Selected work</p><div><h2 id="work-title">The business problem.<br/>The system behind it.</h2><p>Connected operations, content intelligence, document workflows and conversational automation.</p></div></div>
    <div className="project-list">{projects.map(p=><article className={'project-row project-'+p.slug} key={p.slug}>
      <div className="project-copy"><p className="eyebrow accent">{p.category}</p><h3><Link href={'/projects/'+p.slug+'/'}>{p.brand==='Invoice Processing'?'Intelligent Invoice Processing':p.brand}</Link></h3><p className="project-subtitle">{p.name}</p><p className="project-intro">{p.intro}</p><p className="project-value">{p.value}</p><p className="project-stack">{p.shortTools}</p><Link className="text-link" href={'/projects/'+p.slug+'/'}>Explore the case study</Link></div>
      <figure className="project-media"><Link href={'/projects/'+p.slug+'/'} aria-label={'Explore '+p.name}><div className={'image-stage'+(p.slug==='invoice-processing'?' invoice-dual':'')}><img src={p.image} alt={p.caption} loading="lazy"/>{p.slug==='invoice-processing'&&<img src="/evidence/invoice-results.jpg" alt="Actual structured Google Sheets output from the five synthetic invoice tests" loading="lazy"/>}</div></Link><figcaption><strong className="proof-value">{p.metricValue}</strong><span className="proof-label">{p.metricLabel}</span><span>{p.visualNote}</span></figcaption></figure>
    </article>)}</div>
  </section>

  <section id="about" className="about-section"><div className="wrap about-grid"><div><p className="eyebrow">Business perspective</p><h2>Operations is<br/>my starting point.</h2><figure className="about-portrait"><img src="/images/carlos-naya-portrait.webp" width="640" height="800" alt="Portrait of Carlos Naya" loading="lazy" decoding="async"/></figure></div><div className="about-copy"><p className="lead">I’m Carlos Naya. I bring business operations experience into the design of AI and automation systems.</p><p>I’ve coordinated teams, distribution and time-critical service operations. That experience shapes how I build: understand the process, connect the right information and make the result useful to the people doing the work.</p><p>My work combines a business degree, specialist AI and automation training, and practical implementation across business systems, APIs and document workflows.</p><div className="profile-facts"><span>Switzerland · B permit</span><span>English B2 · German A2</span><span>Spanish & Catalan · Native</span></div><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">More about my background on LinkedIn</a></div></div></section>

  <section className="capabilities-section wrap" aria-labelledby="capabilities-title"><div className="section-heading"><p className="eyebrow">Capabilities</p><h2 id="capabilities-title">Business context.<br/>Technical depth.</h2></div><div className="capability-table">
    <div><h3>Business operations systems</h3><p>Relational data models, intake, ownership, project workflows and role-specific interfaces. Structure that brings the operational picture together.</p><span>Airtable · Google Workspace · Process design</span></div>
    <div><h3>Automation & integration</h3><p>Connected applications, structured handoffs and document flows. Translating business requirements into working integrations.</p><span>Make · n8n · REST APIs · Webhooks · Apps Script</span></div>
    <div><h3>Applied AI & validation</h3><p>Document intelligence, retrieval with source citations and voice tools connected to business workflows. Validation against source documents and recorded system actions.</p><span>OpenAI · Gemini · RAG · Vector search · Vapi · Python</span></div>
  </div></section>

  <section id="experience" className="experience-section wrap"><div className="section-heading"><p className="eyebrow">Experience</p><div><h2>Built on real<br/>operational experience.</h2><p>People, constraints and the decisions that keep work moving.</p></div></div><div className="experience-table">{experience.map(e=><div key={e.company} className="experience-row"><span className="date">{e.date}</span><div><h3>{e.company}</h3><span className="role">{e.role}</span></div><p>{e.text}</p></div>)}</div></section>

  <section className="education-section wrap"><p className="eyebrow">Education & credentials</p><div className="education-grid"><div><span>Completed Jan 2026 · 720 hours</span><h3>AI & Automation</h3><p>CenteIA PRO · CenteIA Education</p><p className="education-note">Advanced AI & Automation Training · since April 2026</p></div><div><span>2017 — May 2021</span><h3>Business Administration</h3><p>Bachelor’s Degree · Universitat de Barcelona</p></div><div><span>Microsoft · July 2025</span><h3>Azure AI Fundamentals</h3><a className="text-link" href="https://www.credly.com/badges/21633afd-7bf6-49b0-a93b-1f5fe4689797/public_url" target="_blank" rel="noreferrer">View AI-900 credential</a></div></div></section>

  <section id="contact" className="contact-section"><div className="wrap"><p className="eyebrow">Let’s talk</p><h2>Better operations<br/>start with the right people.</h2><div className="contact-bottom"><p>Looking for someone who connects business thinking with technical execution?<br/>Let’s discuss your AI, automation or digital operations team in Switzerland.</p><a className="button contact-button" href={'mailto:'+profile.email}>Discuss an opportunity</a></div><a className="email-link" href={'mailto:'+profile.email}>{profile.email}</a></div></section>
</main><Footer/></>}
