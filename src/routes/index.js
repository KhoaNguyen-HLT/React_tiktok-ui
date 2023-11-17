import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Khoa from '~/pages/Khoa';
import Upload from '~/pages/Upload';
const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/khoa', Component: Khoa },
    { path: '/upload', Component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
