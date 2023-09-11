// ! cart er vitore kichu ache kin acheek korbo
const searchItemInLCS = () => {
    const item = localStorage.getItem('cart');
    // ! ekta array return korbe
    if (item) {
        return JSON.parse(item);
    }
    return [];
}

const saveToLCS = (cart) => {
    const stringfy = JSON.stringify(cart);
    localStorage.setItem('cart', stringfy);
}

const addToCart = (id) => {
    // ! kichu thakleo push korbo na thakleo array te id ta push korbo
    const cart = searchItemInLCS();
    cart.push(id);
    // save to LC
    saveToLCS(cart);
}

export {addToCart, searchItemInLCS}