import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";
import { AuthContextProvider } from "./shared/contexts/AuthContext/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <MainRoutes/>
        <GlobalStyle/>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
export default App;
