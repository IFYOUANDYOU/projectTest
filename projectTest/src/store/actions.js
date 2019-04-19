const actions = {
    Login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        // 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
        axios.post('login', user)
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            // 每次请求接口时，需要在headers添加对应的Token验证
            axios.defaults.headers.common['Authorization'] = token
            // 更新token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    LogOut({ commit, state }) {
        return new Promise((resolve, reject) => {
          axios.get('Logout')
            .then(response => {
              removeIsLogin()
              localStorage.removeItem('loginUsername');
              // 移除之前在axios头部设置的token,现在将无法执行需要token的事务
              delete axios.defaults.headers.common['Authorization'];
       resolve(response)
             })
            .catch(error => {
              reject(error)
            })
        })
    },

    //初始化购物车的数据
    INIT_CART({commit}, data){
      if(!!data){
        window.localStorage.setItem("cartlist",data);
      }
      let myTimer = setTimeout(() => {
        let results = data || JSON.parse(window.localStorage.getItem("cartlist") || '[]');
        commit("INIT_CART", results);
        clearTimeout(myTimer);
      },300)
    },
    //添加商品
    ADD_GOODS({commit},data){
      let myTimer = setTimeout(() => {
        let result = "ok";
        if(result = "ok"){
          commit("ADD_GOODS", data);
          clearTimeout(myTimer);
        }
      },300)
    },
    //减少商品
    REDUCE_GOODS({commit},data){
      let myTimer = setTimeout(() => {
        let result = "ok";
        if(result = "ok"){
          commit("REDUCE_GOODS", data);
          clearTimeout(myTimer);
        }
      },300)
    },
    //移除商品
    REMOVE_GOODS({commit},id){
      let myTimer = setTimeout(() => {
        let result = "ok";
        if(result = "ok"){
          commit("REMOVE_GOODS", id);
          clearTimeout(myTimer);
        }
      },300)
    },
    //商品数量变化
    NUMBER_CHANGE_GOODS({commit}, item){
      let myTimer = setTimeout(() => {
        let result = "ok";
        if(result = "ok"){
          commit("NUMBER_CHANGE_GOODS", item);
          clearTimeout(myTimer);
        }
      },300)
    },
    //select之后获取商品所有金额
    GET_SELECT_PRICE({commit}, items){
      let myTimer = setTimeout(() => {
        let result = "ok";
        if(result = "ok"){
          commit("GET_SELECT_PRICE", items);
          clearTimeout(myTimer);
        }
      },300)
    }
}

export default actions;