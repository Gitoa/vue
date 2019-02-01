Vue.component('page1',{
    props: {
        name: {
            type: String,
        },
        label: {
            type: String,
            default: ''
        } 
    },
    template: ' \
        <div class="page" v-show="show"> \
            <p>1.请问您的性别是</p> \
            <input type="radio"  v-model="picked" value="female" id="female"> \
            <label for="male">女</label> \
            <input type="radio" v-model="picked" value="male" id="male"> \
            <label for="female">男</label> \
            <input type="radio" v-model="picked" value="secret" id="secret"> \
            <label for="secret">秘密</label> \
        </div>' ,
    data: function(){
        return {
            show: true,
            valid: false,
            picked: ""
        }
    },
    methods: {
        resetPage: function(){
            this.picked = "";
        },
        checkDisabled: function(){
            if(this.picked){
                this.$parent.disableButton = false;
            }else{
                this.$parent.disableButton = true;
            }
        }
    },
    watch: {
        picked: function(){
            this.checkDisabled();
        }
    }
});

Vue.component('page2', {
    props: {
        name: {
            type: String,
        },
        label: {
            type: String,
             default: ''
        }
    },
    template: ' \
        <div class="page" v-show="show" id="page2"> \
            <p>2.请选择您的兴趣爱好:</p> \
            <input type="checkbox" v-model="checked" value="reading" id="reading"> \
            <label for="reading">读书</label> \
            <br> \
            <input type="checkbox" v-model="checked" value="swimming" id="swimming"> \
            <label for="swimming">游泳</label> \
            <br> \
            <input type="checkbox" v-model="checked" value="running" id="running"> \
            <label for="running">跑步</label> \
            <br> \
            <input type="checkbox" v-model="checked" value="movie" id="movie"> \
            <label for="movie">电影</label> \
            <br> \
            <input type="checkbox" v-model="checked" value="music" id="music"> \
            <label for="music">音乐</label> \
        </div>',
    data: function(){
        return {
            show: false,
            valid: false,
            checked: []
        }
    },
    methods: {
        checkDisabled: function(){
            if(1<this.checked.length && this.checked.length<4){
                this.$parent.disableButton = false;
            }else{
                this.$parent.disableButton = true;
            }
        },
        resetPage: function(){
            this.checked = [];
        }
    },
    watch: {
        checked: function(){
            this.checkDisabled();
        }
    }
});

Vue.component('page3', {
    props: {
        name: {
            type: String,
        },
        label: {
            type: String,
            default: ''
        }
    },
    template: '\
        <div class="page" v-show="show"> \
            <p>3.请对自己进行自我介绍:</p> \
            <textarea v-model="text" placeholder="输入..."></textarea> \
        </div>',
    data: function(){
        return {
            show: false,
            valid: false,
            text: ''
        }
    },
    methods: {
        resetPage: function(){
            this.text = '';
        },
        checkDisabled: function(){
            if(this.text.length < 100){
                this.$parent.disableButton = true;
            }else{
                this.$parent.disableButton = false;
            }
        }
    },
    watch: {
        text: function(){
            this.checkDisabled();
        }
    }
})