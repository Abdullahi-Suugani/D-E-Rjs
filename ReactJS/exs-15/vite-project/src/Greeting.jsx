import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Greeting() {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={switchLanguage}>
        Switch to {language === "English" ? "Spanish" : "English"}
      </button>

      <h1>{language === "English" ? "Hello!" : "¡Hola!"}</h1>
    </div>
  );
}

export default Greeting;
