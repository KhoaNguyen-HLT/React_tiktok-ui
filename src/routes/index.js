import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Khoa from '~/pages/Khoa';
const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/khoa', Component: Khoa },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
