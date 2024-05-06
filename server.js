const { log } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const internSchema = require('./model');
const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://aadhi:123456admin@data.ltxktja.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Route handler for the root path "/"
app.get('/', (req, res) => {
    res.send('Welcome to the Intern Management System!');
});

// Route handler to add a new intern
app.post('/addinterns', async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body to check if data is being sent correctly
    const { name } = req.body;
    try {
        const newIntern = new internSchema({ name });
        await newIntern.save();
        const interns = await internSchema.find();
        return res.json(interns);
    } catch (error) {
        console.error('Error adding intern:', error.message);
        return res.status(500).json({ error: error.message }); // Return the specific error message
    }
});

// Route handler to get all intern data
app.get('/interns', async (req, res) => {
    try {
        const interns = await internSchema.find();
        return res.json(interns);
    } catch (error) {
        console.error('Error fetching interns:', error.message);
        return res.status(500).json({ error: error.message }); // Return the specific error message
    }
});

app.listen(3000, () => console.log('Server is running'));
