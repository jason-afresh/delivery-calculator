const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function getDeliveries() {
    let response = 'Oops something went wrong';
    let deliveryDay = document.getElementById('delivery').value || -1;
    let lag = document.getElementById('lag').value || -1;
    document.getElementById('delivery').value = '';
    document.getElementById('lag').value = '';
    if(deliveryDay < 7 && deliveryDay > 0 && lag > 0) {
        let delivery = days[deliveryDay];
        let order;
        if(lag >= 7) {
            lag %= 7
        }
        if(deliveryDay - lag >= 0) {
            order = days[deliveryDay-lag];
        } else if(lag % 7 === 0) {
            order = days[deliveryDay];
        } else {
            order = days[deliveryDay+7-lag]
        }
        response = `Order DOW = ${order} delivery DOW = ${delivery}`
    }
    
    let result = document.getElementById('result');
    result.innerHTML = response
}
