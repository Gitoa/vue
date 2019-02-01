<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    import { oneOf, findComponentDownward, findBrothersComponents } from './utils.js';

    const prefixCls = 'ivu-row';

    export default {
        name: 'Row',
        props: {
            gutter: {
                type: Number,
                default: 0
            },
            type: {
                validator (value) {
                    return oneOf(value,['flex']);
                }
            },
            align: {
                validator (value) {
                    return oneOf(value, ['top', 'middle', 'bottom']);
                }
            },
            justify: {
                validator (value) {
                    return oneOf(value, ['center', 'start', 'end', 'space-around', 'space-between']);
                }
            },
            className: String
        },
        data () {
            return {

            }
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: !this.type,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                        [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        marginLeft: this.gutter / -2 + 'px',
                        marginRight: this.gutter / -2 + 'px'
                    };
                }
                return style;
            }
        },
        methods: {
            updateGutter (val) {
                const Col = findComponentDownward(this, 'iCol');
                const Cols = findBrothersComponents(Col, 'iCol', false);
                if (Cols.length) {
                    Cols.forEach((child) => {
                        if (val !== 0) {
                            child.gutter = val;
                        }
                    });
                }
            }
        },
        watch: {
            gutter (val) {
                this.updateGutter(val);
            }
        }
    }
</script>