import AppRouter from "./App/Routers/AppRouter";
import { ThemeProvider } from "styled-components";
import { useDarkmodeStore } from "./components/DarkmodeSwitch/useDarkmodeStore";
import { lightTheme, darkTheme } from "./App/AppTheme/AppTheme";
import { GlobalStyles } from "./Styles/Global";
import { Toggler } from "./components/DarkmodeSwitch/Toggler";

export const App = () => {
  /** get value of theme from the themestore */
  const { mode } = useDarkmodeStore();

  /**set theme to dark or light */
  const themeMode = mode === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Toggler />
        <AppRouter />
      </ThemeProvider>
    </>
  );
};
