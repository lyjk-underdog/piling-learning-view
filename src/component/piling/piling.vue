<template>
    <div class="c-piling">
        <div class="c-piling_body">
            <PileCanvas />
            <section class="l-step-progress">
                <StepProgress />
            </section>
        </div>
        <div class="c-piling_footer">
            <StepList />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import PileCanvas from './pile-canvas.vue';
import StepList from './step-list.vue';
import StepProgress from './step-progress.vue';

export default Vue.extend({
    components:{
        PileCanvas,
        StepList,
        StepProgress
    }
})
</script>

<style lang="scss" scoped>
@import './style/piling.scss';
</style>
