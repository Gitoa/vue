var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1,
                selected: false
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1,
                selected: false
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1,
                selected: false
            }
        ],
        selectedAll: false,
        selectMsg: "全选"
    },
    methods: {
        handleAdd: function(index){
            if(this.list[index].count>9) return;
            this.list[index].count ++;
        },
        handleReduce: function(index){
            if(this.list[index].count === 0) return;
            this.list[index].count --;
        },
        handleRemove: function(index){
            this.list.splice(index, 1);
        },
        handleSelect: function(){
            this.selectedAll = !this.selectedAll;
            this.selectMsg = this.selectedAll?"全不选":"全选"
            var _this = this;
            this.list.forEach(function(item){
                item.selected = _this.selectedAll;
            })  
        }
    },
    computed: {
        totalPrice: function(){
            var total = 0;
            for(item of this.list){
                let price = item.selected?item.price:0;
                total += price * item.count
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    }
})