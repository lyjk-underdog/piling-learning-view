<template>
    <div class="c-step-progress">
        <Progress title="进度条" :gridNums="43" :percentage="50" />
    </div>
</template>

<script>
import Vue from 'vue';
import { Progress } from '@/component/common/progress';

export default Vue.extend({
    components:{
        Progress
    }
})
</script>
