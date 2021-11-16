const express = require('express');
let jsonData = require('./vehicle.json');
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/vehicles', (req, res) => {
	
	const offset = req.query.offset;
	const limit = req.query.limit;
	
	// const startIndex = (page - 1) * limit;
	// const lastIndex = page * limit;
	
	const lastIndex = parseInt(offset) + parseInt(limit);
	
	console.log(jsonData.vehicleUptimeList.length, offset, lastIndex);
	
	const result = jsonData.vehicleUptimeList.slice(offset, lastIndex);
	
	res.json(result);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
