const express = require('express');
const routes = express.Router();
const ProductResource = require('./resources/product.resource');

routes.get('/', (req, res) => {
    res.send({ data: 'OK' });
});

routes.get('/products', ProductResource.index);
routes.get('/products/:id', ProductResource.show);
routes.post('/products', ProductResource.register);
routes.put('/products/:id', ProductResource.update);
routes.delete('/products/:id', ProductResource.destroy);

module.exports = routes;
