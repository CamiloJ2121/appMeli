const items = 'items';
const showProducts = 4;

function productsModel(products) {
    let model = [];
 
    if(products && Object.keys(products).length > 0) {
        const list = products[items].slice(0, showProducts);
        Object.keys(list).map(key => {
            model.push(list[key]);
        });
    }
    return model;
}

export default productsModel;