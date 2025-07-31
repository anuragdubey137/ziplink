const express = require('express');
const app = express();
app.use(express.json());

const LinkRouter =express.Router();

LinkRouter.post('/', (req, res) => {
    // Logic to create a new link
    res.status(201).send({ message: 'Link created successfully' });
})
LinkRouter.put('/', (req, res) => {
   res.status(200).send({ message: 'Link updated successfully' });

})
LinkRouter.get('/', (req, res) => {
    res.status(200).send({ message: 'Links retrieved successfully' });
})

module.exports = {LinkRouter};
