<template>
    <div>
        随机增加:
        <Counter :number="number"></Counter>
    </div>
</template>
<script>
    import Counter from './Counter.vue';

    export default {
        components: {
            Counter
        },
        methods: {
            handleAddRandom (num) {
                this.number += num;
            }
        },
        data () {
            return {
                number: 0
            }
        },
        created () {
            this.$bus.on('add', num => {
                this.number += num;
            });
        },
        beforeDestroy () {
            this.$bus.off('add', this.handleAddRandom);
        }
    }
</script>