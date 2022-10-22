import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    number: String,
});

const ContactMessage = mongoose.model('ContactMessage', contactSchema);

export default ContactMessage;