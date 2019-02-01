<template>
    <collapse v-model="value" :accordion="true">
        <panel name="1">
            史蒂夫.乔布斯
            <p slot="content">苹果公司创办人</p>
        </panel>
        <panel name="2">
            斯蒂夫.盖瑞.沃资尼亚可
            <p slot="content">斯蒂夫的资料</p>
        </panel>
        <panel name="3">
            乔纳森.伊夫
            <p slot="content">乔纳森的资料</p>
        </panel>
    </collapse>
</template>
<script>
    import collapse from './collapse.vue';
    import panel from './panel.vue';
    export default {
        components: {
            collapse,
            panel
        },
        data: function(){
            return {
                value: '1'
            }
        }
    }
</script>
<style scoped>

</style>
