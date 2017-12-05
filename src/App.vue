<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>

<style lang='scss'>
@import './styles/vars.scss';

:root {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
}



body {
    margin: 0px;
    padding: 0px;
    font-family: $--font-family;
    font-size: $--font-size;
    -webkit-font-smoothing: antialiased;
}
</style>
