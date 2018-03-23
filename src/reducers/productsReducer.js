"use strict";
const INIT_PRODUCTS = [
    {id:1, title: 'Apples', description: 'some red apples', price: 30,image:'https://www.bigbasket.com/media/uploads/p/s/10000428_7-bb-popular-toorarhar-dal.jpg'},
    {id:2, title: 'Oranges', description: 'Peale\'em all', price: 25,image:'https://www.bigbasket.com/media/uploads/p/s/40042841_2-bb-royal-toor-dalarhar-dal-desi.jpg'},
    {id:3, title: 'Bananas', description: 'Some potassium for you', price: 20,image:'https://www.bigbasket.com/media/uploads/p/s/10000446_8-bb-royal-raw-peanuts-mungaphalishengdana.jpg'},
    {id:4, title: 'Potatos', description: 'p for potato', price: 20,image:'https://www.bigbasket.com/media/uploads/p/s/40053931_2-bb-royal-moong-dal.jpg'},
    {id:5, title: 'Onions', description: 'Damm, you gotta brush', price: 35,image:'https://www.bigbasket.com/media/uploads/p/s/10000565_7-bb-royal-rajma-whitechitra.jpg'},
    {id:6, title: 'Ginger', description: 'Its good for your liver', price: 10,image:'https://www.bigbasket.com/media/uploads/p/s/10000563_7-bb-royal-rajma-kashmiri.jpg'}
];
export default function productsReducer(state=INIT_PRODUCTS, action={}) {
   
    switch(action.type) {
        case 'ADD_PRODUCT':
            return state.concat(action.payload);

        case 'DELETE_PRODUCT':
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];

        case 'UPDATE_PRODUCT':
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const newProductExtend = {
                ...state[indexToUpdate], title: action.payload.title
            };
            return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate+1)];

    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}