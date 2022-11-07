import { Routes, Route, Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import PageContainer from "./layout";
import Navbar from "./components/Navbar";

import Main from "./container/Main";
import Detail from "./container/Detail";
import Border from "./container/Border";
function App() {
    return (
        <PageContainer>
            <Navbar />
            <Container
                maxWidth="desktop"
                sx={{
                    padding: "2rem 2rem 2rem 2rem",
                    minHeight: "100vh",
                }}
            >
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="detail" element={<Detail />}>
                        <Route path=":countryName" element={<Detail />} />
                    </Route>
                    <Route path="border" element={<Border />}>
                        <Route path=":countryCode" element={<Border />} />
                    </Route>
                </Routes>

                <Outlet />
            </Container>
        </PageContainer>
    );
}

export default App;
