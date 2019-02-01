<template>
    <div>
        {{ number }}
        <button @click="handleAddRandom">随机增加</button>
    </div>
</template>
<script>
    export default {
        props: {
            number: {
                type: number
            }
        },
        methods: {
            handleAddRandom () {
                const num = Math.floor(Math.random () * 100 + 1);
                this.$but.emit('add', num);
            }
        }
    }