import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "./routes";
import { useScrollToTop } from "./hooks";

function App() {
    useScrollToTop();

    return (
        <Routes>
            {homeRoutes.map((route) => {
                let Layout = Fragment;
                const Page = route.component;

                if (route.layout) {
                    Layout = route.layout;
                } else {
                    Layout = Fragment;
                }

                return (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
