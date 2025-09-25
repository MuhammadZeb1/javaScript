import React from 'react'

function Skills() {
  const [skills, setSkills] = React.useState([])

  const checkBoxController = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    if (isChecked) {
      // اگر checked ہے تو نئی skill add کرو
      setSkills([...skills, value])
    } else {
      // اگر unchecked ہے تو skill remove کرو
      setSkills(skills.filter((skill) => skill !== value))
    }
  }

  return (
    <div>
      <div>
        <input type="checkbox" id="php" value="php" onChange={checkBoxController} />
        <label htmlFor="php">PHP</label>
      </div>
      <div>
        <input type="checkbox" id="react" value="react" onChange={checkBoxController} />
        <label htmlFor="react">React</label>
      </div>
      <div>
        <input type="checkbox" id="node" value="node" onChange={checkBoxController} />
        <label htmlFor="node">Node</label>
      </div>
      <div>
        <input type="checkbox" id="js" value="js" onChange={checkBoxController} />
        <label htmlFor="js">JS</label>
      </div>

      {/* Selected skills show کرو */}
      <h1>Selected Skills: {skills.join(', ')}</h1>
    </div>
  )
}

export default Skills
