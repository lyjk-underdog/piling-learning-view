<template>
    <div class="c-navitem">
        <div class="c-navitem_body"></div>
        <div class="c-navitem_title">{{title}}</div>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        props:{
            title:{
                type:String,
                required:true
            }
        }
    })

</script>

<style lang="scss" scoped>
    @import './style/navitem.scss';
</style>
