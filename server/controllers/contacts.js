import express from 'express';
import mongoose from 'mongoose';

import ContactMessage from '../models/contactMessage.js';

const router = express.Router();

export const getContacts = async (req, res) => {
    try {
        const contactMessages = await ContactMessage.find();

        res.status(200).json(contactMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createContact = async (req, res) => {
    const contact = req.body;

    const newContact = new ContactMessage(contact);

    try {
        await newContact.save();

        res.status(201).json(newContact);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateContact = async (req, res) => {
    const { id: _id } = req.params;
    const contact = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No contact with that id.");

    const updatedContact = await ContactMessage.findByIdAndUpdate(_id, { ...contact, _id }, { new: true });

    res.json(updatedContact);
}

export const deleteContact = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No contact with that id.");

    await ContactMessage.findByIdAndRemove(id);

    res.json({ message: 'Contact deleted successfully.' })
}