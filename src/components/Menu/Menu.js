import React from 'react';
import './Menu.css'

const Menu = ({switchTopic}) => {
  return (
    <nav>
      <h1>What's New?</h1>
      <div className='menu-btns'>
        <button id='local' onClick={switchTopic}>Local</button>
        <button id='entertainment' onClick={switchTopic}>Entertainment</button>
        <button id='science' onClick={switchTopic}>Science</button>
        <button id='health' onClick={switchTopic}>Health</button>
        <button id='technology' onClick={switchTopic}>Technology</button>
      </div>
    </nav>
  )
}

export default Menu;