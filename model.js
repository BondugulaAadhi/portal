const mongoose = require('mongoose');

// Define schema
const internSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        required: false // Making uniqueId optional
    },
    name: {
        type: String,
        required: true // Making name required
    },
    contactInfo: {
        type: String,
        required: false // Making contactInfo optional
    },
    role: {
        type: String,
        required: false // Making role optional
    },
    performance: {
        type: String,
        required: false // Making performance optional
    },
    documentsLink: {
        type: String,
        required: false // Making documentsLink optional
    }
});

// Create model based on schema
const Intern = mongoose.model('Intern', internSchema);

module.exports = Intern;
