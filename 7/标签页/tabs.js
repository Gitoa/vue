Vue.component('tabs',{
        props: {
            value: {
                type: [String, Number]
            }
        },
        template: ' \
            <div class="tabs"> \
                <div class="tabs-bar"> \
                    <div \
                        :class="tabCls(item)" \
                        v-for="(item, index) in navList" \
                        @click="handleChange(index)"> \
                        {{ item.label }} \
                    </div> \
                </div> \
                <div class="tabs-content"> \
                    <slot></slot> \
                </div> \
            </div>',
        data: function(){
            return {
                currentValue: this.value,
                navList: []
            }
        },
        methods: {
            tabCls: function(item){
                return [
                    'tabs-tab',
                    {
                        'tabs-tab-active': item.name === this.currentValue
                    }
                ]
            },
            handleChange: function(index){
                var nav = this.navList[index];
                var name = nav.name;
                this.currentValue = name;
                this.$emit('input', name);
                this.$emit('on-click', name);
            },
            getTabs: function(){
                return this.$children.filter(function(item){
                    return item.$options.name === 'pane';
                });
            },
            updateNav: function(){
                this.navList = [];
                var _this = this;
                this.getTabs().forEach(function(item, index){
                    _this.navList.push({
                        name: item.name || index,
                        label: item.label
                    });
                    if(!item.name) item.name = index;
                    if(index === 0){
                        if(!_this.currentValue){
                            _this.currentValue = pane.name || index;
                        }
                    }
                });
                this.updateStatus();
            },
            updateStatus: function(){
                var tabs = this.getTabs();
                var _this = this;
                tabs.forEach(function(tab){
                    return tab.show = tab.name === _this.currentValue;
                })
            }
        },
        watch: {
            value: function(val){
                this.currentValue = val;
            },
            currentValue: function(){
                this.updateStatus();
            }
        }
    }
)