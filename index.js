//import { NameCheck } from './players/players';

const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'static')));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static" + "/landingpage.html");
  });


app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });



//   app.post('/namecheck', (req, res)=>{
//      console.log('Server Side -->', req.body);
//      const resp =  NameCheck(req.body.name)

//      console.log('RESPONSE CHECK ERRS!', resp);
//      res.json({
//         msg: 'OKEY',
//         blah:'stuff'
//      })


//   })