<template>
    <div :class="itemClasses">
        <div :class="headerClasses" @click="toggle">
            <slot></slot>
        </div>
        <div :class="contentClasses" v-show="isActive">
            <div :class="boxClasses">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    const prefixCls = "ivu-collapse";
    export default {
        name: 'Panel',
        props: {
            name: {
                type: String
            }
        },
        data: function(){
            return {
                index: 0,
                isActive: false
            }
        },
        methods: {
            toggle: function(){
                this.$parent.toggle({
                    name: this.name || this.index,
                    isActive: this.isActive
                })
            }
        },
        computed: {
            itemClasses: function(){
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.isActive
                    }
                ];
            },
            headerClasses: function(){
                return `${prefixCls}-content`;
            },
            boxClasses: function(){
                return `${prefixCls}-content-box`;
            },
            contentClasses: function(){
                return `${prefixCls}-content`;
            }
        }
    }
</script>
<style>
</style>
