import { ThemeProvider } from "styled-components";
import { Container } from "./App.styles";
import MainScreen from "./screens/MainScreen/MainScreen";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainScreen />
      </Container>
    </ThemeProvider>
  );
}

export default App;
