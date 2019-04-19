const getters = {
    totalPrice(state){
        let money = 0;
        state.cartlist.forEach(item => {
            const num = parseFloat(item.num);
            const price = parseFloat(item.price);
            money += num * price;
        });
        return money.toFixed(2);
    }
}

export default getters;