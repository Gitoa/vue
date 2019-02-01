Vue.component('pageButton', {
    template: ' \
        <div id="pageButton"> \
            <button v-show="submitShow" @click="submit" :disabled="disabledOrNot">提交</button> \
            <button v-show="preShow" @click="handlePre">上一页</button> \
            <button v-show="nextShow" @click="handleNext" :disabled="disabledOrNot">下一页</button> \
            <button v-show="resetShow" @click="handleReset">重置</button> \
        </div>',
    computed: {
        submitShow: function(){
            return this.page === 2;
        },
        preShow: function(){
            return this.page > 0;
        },
        nextShow: function(){
            return this.page !== 2;
        },
        resetShow: function(){
            return true;
        }
    },
    props: {
        disabledOrNot: {
            type: Boolean,
            default: true
        },
        page: {
            type: Number
        },
        color: {
            type: String
        },
        forbidden: {
            type: Boolean
        }
    },
    methods: {
        submit: function(){
            this.$emit('submit');
        },
        handlePre: function(){
            this.$emit('prePage');
        },
        handleNext: function(){
            this.$emit('nextPage');
        },
        handleReset: function(){
            this.$emit('resetPage', this.page);
        }
    }
})