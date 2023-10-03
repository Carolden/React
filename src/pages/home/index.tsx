import { ExternalLink } from '@/components/ExternalLink';
import { Profile } from '@/components/Profile';
import styles from "./index.module.css";
import { Experience } from '@/components/Experiences/index';
import { Project } from '@/components/Project/index';
import { Footer } from '@/components/Footer';
import { StartButton } from '@/components/StartButton';


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Profile />
        <div className={styles.socialMedia}>
          <ExternalLink link="https://www.linkedin.com/in/carlosoldenburg/" title="Linkedin"/>
          <ExternalLink link="https://github.com/Carolden" title="GitHub" />
          <ExternalLink link="#" title="Instagram" />
        </div>
        <h2>Experiência</h2>
        <Experience job='Auxiliar Administrativo' year='2018'/>
        <Experience job='Técnico de Informática' year='2020'/>
        <Experience job='Analista de Desenvolvimento de Sistemas' year='2023'/>
      </div>
      <Project img='/assets/ahMuleque.jpg' alt='Charles Henriquepédia' route='teste'/>
      <Project img='/assets/ahMuleque.jpg' alt='Charles Henriquepédia' route='teste'/>
      <Project img='/assets/ahMuleque.jpg' alt='Charles Henriquepédia' route='teste'/>
      <Footer />
      <StartButton />
    </main>
  );
}
