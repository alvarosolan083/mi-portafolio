import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css'; 

const Skills = () => {
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setRenderKey(prevKey => prevKey + 1), 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section key={renderKey} className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>Skills</h2>
        <div className="fila">
          {/* Technical Skill */}
          <div className="col">
            <h3>Technical Skills</h3>
            <SkillItem name="HTML & CSS" level="50%"/>
            <SkillItem name="JavaScript" level="50%"/>
            <SkillItem name="React JS" level="50%"/>
            <SkillItem name="Angular" level="50%"/>
            <SkillItem name="Node" level="50%"/>
          </div>
          {/* Professional Skills */}
          <div className="col">
            <h3>Professional Skills</h3>
            <SkillItem name="Comunicación" level="75%"/>
            <SkillItem name="Trabajo en Equipo" level="70%"/>
            <SkillItem name="Creatividad" level="70%"/>
            <SkillItem name="Dedicación" level="100%"/>
            <SkillItem name="Responsabilidad" level="100%"/>
          </div>
        </div>
      </div>
    </section>
  );
}

const SkillItem = ({name, level}) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = level;
    }
  }, [level]);

  return (
    <div className="skill">
      <span>{name}</span>
      <div className="barra-skill">
        <div ref={progressRef} className="progreso" style={{width: '0%'}}>
          <span>{level}</span>
        </div>
      </div>
    </div>
  )
}

export default Skills;
