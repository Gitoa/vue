<template>
    <component :is="tagName" :class="classes" :disabled="disabled" @click="handleClickLink" v-bind="tagProps">
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </component>
</template>

<script>
    import { oneOf } from './utils.js';
    import mixinsLink  from './link.js';
    
    const prefixCls = 'ivu-btn';

    export default {
        name: 'Button',
        mixins: [ mixinsLink ],
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
                },
                default: 'default'
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            loading: Boolean,
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            long: {
                type: Boolean,
                default: false
            },
            ghost: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showSlot: true
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: this.size !== 'default',
                        [`${prefixCls}-loading`]: this.loading != null && this.loading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
                        [`${prefixCls}-ghost`]: this.ghost
                    }
                ];
            },
            isHrefPattern () {
                const {to} = this;
                return !!to;
            },
            tagName () {
                const {isHrefPattern} = this;
                return isHrefPattern ? 'a' : 'button';
            },
            tagProps () {
                const {isHrefPattern} = this;
                if (isHrefPattern) {
                    const {linkUrl, target} = this;
                    return {href: linkUrl, target};
                } else {
                    const {htmlType} = this;
                    return {type: htmlType};
                }
            }
        },
        methods: {
            handleClickLink (event) {
                this.$emit('click', event);
                const openInNewWindow = event.ctrlkey || event.metaKey;
                this.handleCheckClick(event, openInNewWindow);
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    }
</script>
