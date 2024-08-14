import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ViewJob from "./pages/ViewJob.jsx";
import NotFound from "./pages/NotFound.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/job/:id" element={<ViewJob />} />
                <Route path="*" element={<NotFound />} />
                {/* list all page with routes here */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes