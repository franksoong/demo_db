/*
 * @Author: soong
 * @Date: 2017-12-05 17:06:45
 * @Last Modified by: soong
 * @Last Modified time: 2017-12-05 17:15:35
 */


<template>
    <el-card>
        <div slot='header'>
            <span>{{titile}}</span>
        </div>
        <div>{{content}}</div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            titile: '404',
            content: 'page missing',
        };
    },

};
</script>

<style scoped>

</style>
