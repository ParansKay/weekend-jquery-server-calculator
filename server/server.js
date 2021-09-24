//requires

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// uses 

app.use(express.static('server/public'));

// NEEDED for POST

app.use(bodyParser.urlencoded({extended: true}));

//////GLOBALS/////// 

//set up a constant with our port value
const port = 5000;
let theAnswer = [];

//spin up server

app.listen(port, ()=>{
    console.log( 'server up on:', port );
})

//routes 

app.get( '/5000', ( req, res ) =>{
    console.log( 'GET route hit' ); 
    res.send( 'Meow!' );
})

app.post( '/5000', ( req, res )=>{
    console.log( 'Calculator POST hit:', req.body );
    res.sendStatus( 200 ) // 200 = generic OK, 201 = created
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let operator = req.body.operator1;
    if( operator === '+' ){
        answer = num1 + num2;
        console.log( 'the answer is:', answer );
    }
    else if( operator === '-' ){
        answer = num1 - num2;
        console.log( 'the answer is:', answer );
    }
    else if( operator === '*' ){
        answer = num1 * num2;
        console.log( 'the answer is:', answer );  
    }
    else if( operator === '/' ){
        answer = num1 / num2;
        console.log( 'the answer is:', answer );
    }
})

//// 
