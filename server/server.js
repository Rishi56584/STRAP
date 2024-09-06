const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/donationApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define schemas and models
const donateSchema = new mongoose.Schema({
    amount: String,
    name: String,
    phone: String,
    email: String,
    city: String
});

const joinUsSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
});

const RescueHereSchema = new mongoose.Schema({
    name: String,
    issue:String,
    mobile:String,
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  });

const Donate = mongoose.model('Donate', donateSchema);
const JoinUs = mongoose.model('JoinUs', joinUsSchema);
const RescueHere=mongoose.model("Rescue",RescueHereSchema);

// Routes
app.post('/donate', async (req, res) => {
   /* const newDonation = new Donate(req.body);
    newDonation.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send('Donation saved successfully');
    });*/
    try{console.log(req.body);
        // const newJoinUs = new JoinUs(req.body);
        // newJoinUs.save((err) => {
        //     if (err) return res.status(500).send(err);
        //     return res.status(200).send('Join Us form saved successfully');
        // });
        let response=await Donate.create(
            req.body
        );
        res.send(response);}
        catch{
            res.send("error");
        }
});

app.post('/joinus', async(req, res) => {
    try{console.log(req.body);
    // const newJoinUs = new JoinUs(req.body);
    // newJoinUs.save((err) => {
    //     if (err) return res.status(500).send(err);
    //     return res.status(200).send('Join Us form saved successfully');
    // });
    let response=await JoinUs.create(
        req.body
    );
    res.send(response);}
    catch{
        res.send("error");
    }
});
app.post("/registerHelp",async(req,res)=>{
    // console.log(req.body);
    let response=await RescueHere.create(req.body);
    res.send(response)
})

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
