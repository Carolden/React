import { ExternalLink } from '@/components/ExternalLink';
import { Profile } from '@/components/Profile';
import styles from "./index.module.css";
import { Experience } from '@/components/Experiences/index';
import { Project } from '@/components/Project/index';
import { Footer } from '@/components/Footer';
import { StartButton } from '@/components/StartButton';
import { BackButton } from '@/components/BackButton';
import { Name } from '@/components/Name';
import Link from 'next/link'
import data from '../../data.json'
import { ProjectImage } from '@/components/ProjectImage';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.sideBar}>
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
        <div className={styles.projects}>
          {data.map((project) => {
            return (
              <Link key={project.id} href={`project/${project.id}`} className={styles.projectLink}>
                <ProjectImage img={project.imagem} alt={project.titulo} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.footer}>
        <Name />
        <Footer />
        <StartButton />
      </div>
    </main>
  );
}
