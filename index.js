const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = process.env.PORT || 3005;
app.use(cors());
app.use(express.json());
//to create a todo
app.post('/ticket', async (req, res) => {
  try {
    const {
      tickettitle,
      roll,
      seat,
      imgname,
      showdate,
      venue,
      tourtitle,
      section
    } = req.body;
    const newTicket = await pool.query(
      'INSERT INTO ticketsys (tickettitle,section,roll,seat,imgname,showdate,venue,tourtitle) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * ',
      [tickettitle,roll, seat,imgname,showdate,venue,tourtitle,section]
    );
    res.json(newTicket.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//get all todos

app.get('/tickets', async(req, res) => {
  try {
    const allTickets = await pool.query('SELECT * FROM ticketsys');
    res.json(allTickets.rows);
    // res.send('tickets not available yet');
  } catch (err) {
    console.log(err.message);
  }
});

// //get a todo

// app.get('/ticket/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await pool.query('SELECT * FROM todo WHERE todo_id =$1', [id]);

//     res.json(todo.rows[0]);
//   } catch (err) {
//     console.log(err.message);
//   }
// });
// // edit a todo
// app.put('/ticket/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const upateTodo = await pool.query(
//       'UPDATE todo SET description =$1 WHERE todo_id =$2',
//       [description, id]
//     );

//     res.json('Todo was updated');
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //delete a todo

// app.delete('/ticket/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id =$1', [
//       id,
//     ]);

//     res.json('Todo has been deleted');
//   } catch (err) {
//     console.log(err.message);
//   }
// });

app.listen(port, () => {
  console.log('server is running on 3005');
});
