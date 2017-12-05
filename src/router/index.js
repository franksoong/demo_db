/*
 * @Author: soong
 * @Date: 2017-11-27 16:28:46
 * @Last Modified by: soong
 * @Last Modified time: 2017-11-27 16:31:18
 */

import Vue from 'vue';
import Router from 'vue-router';

import AppRoutes from './routes';


Vue.use(Router);
export default new Router({
    routes: [...AppRoutes],
});
