const mutations = {
    SET_TOKEN: (state, data)=>{
        state.token = data;
        window.localStorage.setItem("token",data);
    },
    SET_USER: (state, data)=>{
        state.user = data;
        window.localStorage.setItem("user",data);
    },

    //初始化购物车数据
    INIT_CART: (state,data) => {
        state.cartlist = data;
    },
    //添加商品
    ADD_GOODS: (state,data) => {
        console.log(data)
        let isIn = state.cartlist.some((item)=>{
            if(item.id == data.id){
                item.num ++;
            }
        })
        if(!isIn){
            state.cartlist.push(data);
        }
    },
    //减少商品
    REDUCE_GOODS(state,id){
        const cart = state.cartlist;
        for(let i in cart){
            if(cart[i].id == id){
                cart[i].num --;
                if(cart[i].num == 0){
                    cart.splice(i,1);
                    return;
                }
            }
        }
    },
    //移除商品
    REMOVE_GOODS(state,id){
        const cart = state.cartlist;
        for(let i in cart){
            if(cart[i].id == id){
                cart.splice(i,1);
            }
        }
    },
    //商品数量变化
    NUMBER_CHANGE_GOODS(state,item){
        const cart = state.cartlist;
        for(let i in cart){
            if(cart[i].id == item.id){
                if(cart[i].num == 0){
                    cart.splice(i,1);
                    return;
                }
                cart[i].num = item.num;
            }
        }
    },
    //select之后获取商品所有金额
    GET_SELECT_PRICE(state,items){
        let money = 0;
        items.forEach(item => {
            const num = parseFloat(item.num);
            const price = parseFloat(item.price);
            money += num * price;
        });
        state.selectPrice = money.toFixed(2);
    }
}

export default mutations;