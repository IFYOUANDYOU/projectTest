import Vue from 'vue'
import iTotast from './iTotast'

const totast = Vue.extend(iTotast);

function showTotast(text, duration = 2000){
    const dom = new totast({
        el: document.createElement("div"),
        data(){
            return {
                text,
                show: true
            }
        }
    })
    document.body.appendChild(dom.$el);
    let myTimer = setTimeout(() => {
        dom.show = false;
        clearTimeout(myTimer);
    }, duration)
}
function regTotast(){
    Vue.prototype.$totast = showTotast;
}


export default regTotast;