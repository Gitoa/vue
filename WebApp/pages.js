Vue.component('pages',{
    props: ['currentPage'],
    data: function(){
        return {
            pageList: [],
            showPage: this.currentPage,
            disableButton: true
        }
    },
    template: ' \
        <div class="pages"> \
            <page1 name="1" label="1"></page1> \
            <page2 name="2" label="2"></page2> \
            <page3 name="3" label="3"></page3> \
            <pageButton :page="showPage" :disabledOrNot="disableButton" color="000000" :status="true" @submit="submit" @prePage="prePage" @nextPage="nextPage" @resetPage="resetPage"></pageButton> \
        </div>',
    methods: {
        getPage: function(){
            return this.$children;
        },
        updateStatus: function(){
            this.pageList = this.getPage();
            var _this = this;
            this.pageList.forEach(function(item, index){
                item.show = index === _this.showPage;
                if(item.show){
                    item.checkDisabled();
                }
            })
        },
        submit: function(){},
        prePage: function(){
            this.showPage --;
        },
        nextPage: function(){
            this.showPage ++;
        },
        resetPage: function(index){
            this.pageList = this.getPage();
            this.pageList[index].resetPage();
        }
    },
    watch: {
        showPage: function(){
            this.updateStatus();
        }
    }
})