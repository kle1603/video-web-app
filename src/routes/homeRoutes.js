import configs from "../configs";

import Layout from "../layouts/Layout";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Contact from "../pages/Contact";

const homeRoutes = [
    {
        id: 1,
        path: configs.routes.home,
        component: Home,
        layout: Layout,
    },
    {
        id: 2,
        path: configs.routes.detail,
        component: Detail,
        layout: Layout,
    },
    {
        id: 3,
        path: configs.routes.contact,
        component: Contact,
        layout: Layout,
    },
];

export default homeRoutes;
