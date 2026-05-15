import Hero from './components/Hero';
import Section from './components/Section';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import { resume } from './data/resume';
import './App.css';

export default function App() {
  return (
    <>
      <Hero name={resume.name} contact={resume.contact} clearance={resume.clearance} />
      <main className="page">
        <Section title="Professional Summary">
          <p className="summary-text">{resume.summary}</p>
        </Section>
        <Section title="Core Skills">
          <Skills skills={resume.skills} />
        </Section>
        <Section title="Professional Experience">
          <Experience experience={resume.experience} />
        </Section>
        <Section title="Certifications">
          <Certifications certifications={resume.certifications} />
        </Section>
        <Section title="Education">
          <Education education={resume.education} />
        </Section>
      </main>
    </>
  );
}
