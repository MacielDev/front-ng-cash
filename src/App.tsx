import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
    </div>
  );
}
export default App;
