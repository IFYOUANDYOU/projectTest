import Vue from 'vue'
import IMessage from './IMessage'

const configs = {
    duration: 3000,
    animateTime: 300,
    install(Vue){
        if(typeof window !== 'undefined' && window.vue){
            Vue = window.vue;
        }
        Vue.component('iMessage',IMessage); // 注册组件IMessage

        function msg(type,text,callback){
            let msg , duration = configs.duration;
            if(typeof text == 'string'){
                msg = text;
            }else if(text instanceof Object){
                msg = text.text || '';
                if(text.duration) duration = text.duration;
            }
            let VueMessage = Vue.extend({
                data() {
                    return {
                        show: false
                    }
                },
                render(h){
                    let props = {
                        type,
                        text: msg,
                        show: this.show
                    }
                    return h('i-message',{props});
                }
            })
            let newMessage = new VueMessage();
            let vm = newMessage.$mount();
            let el = vm.$el;
            document.body.appendChild(el);
            vm.show = true;

            let myTime = setTimeout(() => {
                clearTimeout(myTime);
                vm.show = false;
                let myTimer = setTimeout(() => {
                    clearTimeout(myTimer);
                    document.body.removeChild(vm);
                    newMessage.$destory();
                    vm = null;
                    callback && (typeof callback === 'function') && callback();
                }, configs.animateTime)
            }, duration)
        }

        Vue.prototype.$iMessage = {
            info(text,callback){
                if(!text) return;
                msg('info',text, callback);
            },
            success(text,callback){
                if(!text) return;
                msg('success',text, callback);
            },
            wraning(text,callback){
                if(!text) return;
                msg('wraning',text, callback);
            },
            error(text,callback){
                if(!text) return;
                msg('error',text, callback);
            }
        }
    } 
}

export default configs;