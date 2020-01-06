const mongoose = require('mongoose');
const Product = mongoose.model('Product');

mongoose.set('useFindAndModify', false);

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const products = await Product.paginate({}, { page , limit: 5 });
        return res.json(products);
    },
    async show(req, res) {
        const id = req.params.id;
        const product = await Product.findById(id);
        return res.json(product);
    },
    async register(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async update(req, res) {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        return res.json(product);
    },
    async destroy(req, res) {
        const id = req.params.id;
        await Product.findByIdAndDelete(id);
        return res.send();
    }
}
