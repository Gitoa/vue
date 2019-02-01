Vue.directive('clickoutside', {
    bind: function(el, binding, vnode){
        function documentHandler(e){
            if(el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                binding.value();
            }
        }
        el.__vueClickOutSide__ = documentHandler;
        document.addEventListener('click', documentHandler);
        document.onkeydown = function(){
            if(event.keyCode == 27){
                binding.value();
            }
        }
    },
    unbind: function(el, binding){
        document.removeEventListener('click', el.__vueClickOutSide__);
        delete el.__vueClickOutSide__;
    }
})