import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div>
      <h3>Text Editor</h3>
      <p>Create a single-line text editor in Python that allows users to view, edit, append, clear, save, and load a single line of text.
        Use string manipulation, basic I/O functions, and a simple menu interface for interaction.</p>

      <h3>Text To Speech Convertor</h3>
      <p>Build a Python program that converts text input into speech using libraries like pyttsx3 or gTTS.
        The program takes user input, generates spoken audio, and plays it back to the user.</p>
    </div>
    <a className='top' href='#head'>Back to top</a>
  </section>
);

export default Projects;

