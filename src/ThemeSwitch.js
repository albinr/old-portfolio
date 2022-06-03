import React, { useState } from 'react';

function ThemeSwitch({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle  = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <input type="checkbox" onChange={onToggle} checked={isToggled} />
  );
}

export default ThemeSwitch;