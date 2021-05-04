import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Resume from '../docs/DerekLu-resume.pdf';

const Icons = () => {
  return (
    <div className="row icons">
      <a href="https://github.com/dereklu888">
        <FontAwesomeIcon icon={faGithub} alt="Github profile" />
      </a>
      <a href="https://www.linkedin.com/in/derek-lu-b06a48167/">
        <FontAwesomeIcon icon={faLinkedin} alt="LinkedIn profile" />
      </a>
      <a href="mailto:derek888@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} alt="Email" />
      </a>
      <a href={Resume}>
        <FontAwesomeIcon icon={faFilePdf} alt="Resume" />
      </a>
    </div>
  );
};

export default Icons;
