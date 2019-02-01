<template>
    <div>
        <v-button type="default" to="bilibili.com">click</v-button>
        <div>Hello {{ name }}</div>
    </div>
</template>

<script>
    import vButton from './button.vue';
    export default{
        components: {
            vButton
        },
        data () {
            return {
                name: "world"
            }
        }
    };
</script>


