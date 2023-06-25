import React, { useState } from 'react';
import Modal from './Modal';
import './Projects.css';

function Projects({ imageSrc, title, description, tags }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project">
      <div className="project-left">
        <img
          src={imageSrc}
          alt={title}
          style={{ width: '100%', maxWidth: '300px' }}
          onClick={openModal}
        />
      </div>

      <div className="project-right">
        <p></p>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          <br />
        </p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <Modal imageSrc={imageSrc} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Projects;
