import { ExternalLink } from '@/components/ExternalLink';
import { Profile } from '@/components/Profile';
import data from '../../data.json'
import styles from "./index.module.css";
import { ProjectImage } from '@/components/ProjectImage';
import { Experience } from '@/components/Experiences/experience';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Profile />
        <div className={styles.socialMedia}>
          <ExternalLink
            link="https://www.linkedin.com/in/carlosoldenburg/"
            title="Linkedin"
          />
          <ExternalLink link="https://github.com/Carolden" title="GitHub" />
          <ExternalLink link="#" title="Instagram" />
        </div>
        <Experience job='Técnico de Informática' year='2019'/>
        <Experience job='Analista de Desenvolvimento de Sistemas' year='2023'/>

      </div>
    </main>
  );
}
