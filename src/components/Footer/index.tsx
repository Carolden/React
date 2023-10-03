import style from './index.module.css';
import styleExternalLink from './../ExternalLink/index.module.css'
import { ExternalLink } from '../ExternalLink';

export function Footer() {
    return (
        <div>
            <ExternalLink link="https://www.linkedin.com/in/carlosoldenburg/" title="Linkedin"/>
            <ExternalLink link="https://github.com/Carolden" title="GitHub" />
            <ExternalLink link="#" title="Instagram" />        
        </div>
    )
}