const express = require('express')
const app = express()
const cors = require('cors');
const axios = require('axios');
const port = 8800

app.use(cors())
app.get('/users', async (req, res) => {
	// Recebendo dados da API externa.
	const { data } = await axios('https://jsonplaceholder.typicode.com/users')
	console.log(data)
	return res.json(data)
});

app.listen(port, () => {
	console.log("Server running to port 1234...")
})