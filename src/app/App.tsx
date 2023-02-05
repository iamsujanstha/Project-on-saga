import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { PageRoutes } from "./routing/PageRoutes";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <PageRoutes />
            </BrowserRouter>
        </>
    );
}

export default App;
