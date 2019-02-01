<template>
    <div>
        <h1>首页</h1>
        {{ count }}
        <button @click="handleIncrement">+1</button>
        <button @click="handleDecrease">-1</button>
    </div>
</template>
<script>
    export default {
        computed: {
            count () {
                return this.$store.state.count;
            }
        },
        methods: {
            handleIncrement: function(){
                this.$store.commit('increment');
            },
            handleDecrease: function(){
                this.$store.commit('decrease');
            }
        }
    }
</script>
