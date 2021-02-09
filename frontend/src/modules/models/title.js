const categories = 'categories';
const showCategories = 6;

function productsModel(products) {
    let model = [];
 
    if(products && Object.keys(products).length > 0) {
        const items = products[categories].slice(0, showCategories);
        Object.keys(items).map(key => {
            model.push(items[key].name);
        });
        model = model.join(' > ');
    }
    return model;
}

export default productsModel;