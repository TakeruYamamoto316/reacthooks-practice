import { TextProvider } from "./TextProvider";
import "./styles.css";
import { First } from "./First";

export default function App() {
  return (
    <TextProvider>
      <First />
    </TextProvider>
  );
}
