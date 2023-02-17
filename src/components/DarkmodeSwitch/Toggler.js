import React, { useCallback } from "react";

import styled from "styled-components";
import { UiToggle } from "../../Styles/Uitoggle.Styled";
import { useDarkmodeStore } from "./useDarkmodeStore";

export const ThemeToggler = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 1000;
`;
export const Toggler = () => {
  const { mode, setMode } = useDarkmodeStore();

  const changeTheme = useCallback(() => {
    let change = mode === "light" ? "dark" : "light";

    setMode(change);
  }, [mode, setMode]);

  return (
    <ThemeToggler>
      <span role="img" aria-label="lightmode">
        🌞
      </span>
      <div name="darkModeSwitch">
        <UiToggle>
          <input type="checkbox" id="darkModeSwitch" name="darkModeSwitch" checked={mode === "dark"} onChange={() => changeTheme()} />
          <label htmlFor="darkModeSwitch">
            <div></div>
          </label>
        </UiToggle>
      </div>
      <span role="img" aria-label="darkModeSwitch">
        🌙
      </span>
    </ThemeToggler>
  );
};
