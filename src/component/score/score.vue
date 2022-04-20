<template>
    <div class="c-score">
        <Card mainTitle="我的得分" subTitle="My score">
            <div class="c-score_body">
                <section class="l-cur-score">
                    <div class="c-cur-score">
                        <div class="c-cur-score_header">
                            <img src="@/assets/img/score-icon.png" >
                            <span>当前得分</span>
                        </div>
                        <span class="c-cur-score_score-font">
                            100.0
                        </span>
                    </div>
                </section>
                <section class="l-score-info">
                    <div class="c-score-info">
                        <div class="c-score-info_row" v-for="(item,index) in infoList" :key="index">
                            <i></i>
                            <span class="c-score-info_key">{{item.key}}</span>
                            <span class="c-score-info_value">{{item.value}}</span>
                        </div>
                    </div>
                </section>
            </div>
        </Card>
    </div>
</template>

<script>
import Vue from 'vue';
import { Card } from '@/component/common/card';

export default Vue.extend({
    components:{
        Card
    },
    data(){
        return {
            infoList:[
                {
                    key:'用时：',
                    value: '31s'
                },
                {
                    key:'错误次数：',
                    value:2
                },
                {
                    key:'连击数：',
                    value:100
                }
            ]
        }
    }
})
</script>

<style lang="scss" scoped>
@import './style/score.scss';
</style>
