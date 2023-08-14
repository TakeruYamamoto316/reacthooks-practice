import { CountProvider } from "./CountProvider";
import "./styles.css";
import { First } from "./First";

export default function App() {
  return (
    <div className="App">
      <CountProvider>
        <First />
      </CountProvider>
    </div>
  );
}
