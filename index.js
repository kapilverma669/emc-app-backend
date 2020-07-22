const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');
const cors = require('cors');



const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(cors());

// mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true});


const data = {hello : 'hello world!!'};

// const testRequestSchema = {
//     eutName: String,
//     slNo: String
//   };

//   const TestRequest = mongoose.model("TestRequest", testRequestSchema);

console.log(JSON.stringify(data));

app.get('/', (req,res)=>{
    res.send(JSON.stringify(data));
});

app.post('/post', (req,res)=> {
    const data = req.body;
    console.log(data);
    // const testRequest = new TestRequest({
    //     eutName: req.body.eutName,
    //     slNo: req.body.slNo
    // });

    // testRequest.save((err)=>{
    //     if(!err){
    //         console.log("data successfully save");
    //     }
    // });
    res.send('data recieved');
} );

app.listen(4040, ()=>{
    console.log('server is running on port 4040');
});