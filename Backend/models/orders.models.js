import {Schema, model} from 'mongoose';

const orderSchema = new Schema({
    items:[
        {
            productId: String,
            name: String,
            quantity: Number,
            price: Number,
        }
    ],
    totalPrice:{
        type: Number,required: true,
    },
    date: {
        type: Date,default: Date.now
    },
});

export default model('Order', orderSchema);

