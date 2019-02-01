<template>
    <div>
        <v-row :gutter="10">
            <v-col span="12">first</v-col>
            <v-col span="10">second</v-col>
            <v-col span="2">third</v-col>
        </v-row>
    </div>
</template>

<script>
    import vRow from './row.vue';
    import vCol from './col.vue';

    export default {
        components: {
            vRow,
            vCol
        }
    }
</script>