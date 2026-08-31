import { LanguageProvider } from "./LanguageContext";
import Greeting from "./Greeting";

function App() {
  return (
    <LanguageProvider>
      <Greeting />
    </LanguageProvider>
  );
}

export default App;
