import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Networking = () => {
  return (
    <div className="section-networking">
      <ul>
        <li>
          <a href="https://github.com/felagos/" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/felipe-lagos-s%C3%A1nchez-811a87130/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
      </ul>
    </div>
  );
};
