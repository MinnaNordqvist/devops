let aPriceList;

export const setPriceList = priceList => {
    aPriceList = priceList;
};

export const getPrice = (itemId, quantity) => {
    var total = 0;
    var item = getItem(itemId); 
    const {prices} = item;

    for(var x = prices.length - 1; x >= 0; x--){
        if(quantity >= prices[x].qty){
            total = quantity * prices[x].price;
            break;
        }
    }
    return total;
};

function getItem(itemId){
        for(var i = 0; i < aPriceList.length; i++){
            if(aPriceList[i].itemid == itemId){
                return aPriceList[i];
            }
        }  
    return;    
};

export const priceList = {
    setPriceList,
    getPrice
};