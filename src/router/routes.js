/*
 * @Author: soong
 * @Date: 2017-11-27 16:24:57
 * @Last Modified by: soong
 * @Last Modified time: 2017-12-05 17:17:22
 */

import Home from '../components/Home';
import NotFound from '../components/404';

const routes = [{
    path: '/',
    component: Home,
    name: 'Home',
}, {
    path: '/404',
    component: NotFound,
    name: 'NotFound',
}, {
    path: '*',
    redirect: {
        path: '/404',
    },
}];


export default routes;
