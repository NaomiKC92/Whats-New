import React from 'react';
import './Menu.css'

const Menu = ({switchTopic}) => {
  return (
    <div className='menu-items'>
      <button id='local' onClick={switchTopic}>Local</button>
      <button id='entertainment' onClick={switchTopic}>Entertainment</button>
      <button id='science' onClick={switchTopic}>Science</button>
      <button id='health' onClick={switchTopic}>Health</button>
      <button id='technology' onClick={switchTopic}>Technology</button>
    </div>
  )
}

export default Menu;