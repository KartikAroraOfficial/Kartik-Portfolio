import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Tech from './Tech';
import Experience from './Experience';
import Works from './Works';
import Feedbacks from './Feedbacks';
import Contact from './Contact';
import { SectionWrapper } from '../hoc';

const TechWithSection = SectionWrapper(Tech, "tech");
const WorksWithSection = SectionWrapper(Works, "work");
const ExperienceWithSection = SectionWrapper(Experience, "experience");
const ContactWithSection = SectionWrapper(Contact, "contact");
const AboutWithSection = SectionWrapper(About, "about");
const FeedbacksWithSection = SectionWrapper(Feedbacks, "feedbacks");

const withSections = {
  About: AboutWithSection,
  Tech: TechWithSection,
  Works: WorksWithSection,
  Experience: ExperienceWithSection,
  Contact: ContactWithSection,
  Feedbacks: FeedbacksWithSection,
  Hero,
  Navbar,
  EarthCanvas,  
  BallCanvas, 
  ComputersCanvas,
  StarsCanvas,
}

export default withSections;
