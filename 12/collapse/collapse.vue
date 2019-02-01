<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'ivu-collapse';
    export default {
        name: 'Collapse',
        props: {
            accordion: {
                type: Boolean,
                default: false
            },
            value: {
                type: [Array, String]
            }
        },
        data: function(){
            return {
                currentValue: this.value 
            };
        },
        methods: {
            getActiveKey: function(){
                let activeKey = this.currentValue || [];
                const accordion = this.accordion;
                if (!Array.isArray(activeKey)) {
                    activeKey = [activeKey];
                }
                if (accordion && activeKey.length > 1) {
                    activeKey = [activeKey[0]]
                }
                for (let i = 0; i < activeKey.length; i++) {
                    activeKey[i] = activeKey[i].toString();
                }
                return activeKey;
            },
            setActive: function() {
                const activeKey = this.getActiveKey();
                this.$children.forEach((child, index) => {
                    const name = child.name || index.toString();
                    let isActive = false;
                    if (self.accordion) {
                        isActive = activeKey === name;
                    } else {
                        isActive = activeKey.indexOf(name) > -1;
                    }
                    child.isActive = isActive;
                    child.index = index;
                });
            },
            toggle: function(data){
                const name = data.name.toString();
                let newActiveKey = [];
                if (this.accordion) {
                    if (!data.isActive) {
                        newActiveKey.push(name);
                    }
                } else {
                    let activeKey = this.getActiveKey();
                    const nameIndex = activeKey.indexOf(name);
                    if (data.isActive) {
                        if (nameIndex > -1) {
                            activeKey.splice(nameIndex, 1);
                        }
                    } else {
                        if (nameIndex < 0){
                            activeKey.push(name);
                        }
                    }
                    newActiveKey = activeKey;
                }
                this.currentValue = newActiveKey;
                this.$emit('input', newActiveKey);
                this.$emit('on-change', newActiveKey);
            }
        },
        computed: {
            classes: function(){
                return `${prefixCls}`;
            }
        },
        watch: {
            value: function(val){
                this.currentValue = this.value;
            },
            currentValue: function(){
                this.setActive();
            }
        },
        mounted: function(){
            this.setActive();
        }
    }
</script>
<style>
</style>