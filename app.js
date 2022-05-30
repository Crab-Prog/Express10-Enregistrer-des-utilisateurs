const { setupRoutes } = require('./routes');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

setupRoutes(app);

// app.get('/api/movies', (req, res) => {
//   let sql = 'SELECT * FROM movies';
//   const sqlValues = [];

//   if (req.query.color) {
//     sql += ' WHERE color = ?';
//     sqlValues.push(req.query.color);
//   }

//   if (req.query.max_duration) {
//     if (req.query.color) {
//       sql += ' AND duration <= ?';
//     } else {
//       sql += ' WHERE duration <= ?';
//     }

//     sqlValues.push(req.query.max_duration);
//   }

//   connection.promise().query(sql, sqlValues)
//     .then(([result]) => {
//       res.json(result);
//     })
//     .catch((err) => {
//       console.err(err);
//       res.sendStatus(500).send('Error retrieving movies from database');
//     });
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
