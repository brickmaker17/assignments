const express = require('express');
const bountyRouter = express.Router();
const bountyModel = require('../models/database');

bountyRouter.route('/')
    .post((req, res) => {
        let newBounty = new bountyModel(req.body);
        newBounty.save((err, savedBounty) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedBounty);
            }
        });
    })


    .get((req, res) => {
        bountyModel.find(req.query, (err, foundBounty) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundBounty);
            }
        });
    })

bountyRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params;
        bountyModel.findById(id, (err, foundBounty) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundBounty);
            }
        });
    })

        
    .delete((req, res) => {
        let { id } = req.params;
        bountyModel.findByIdAndRemove(id, (err, removedBounty) => {
            if (err) {
                console.error(err);
            } else {
                res.send(removedBounty);
            }
        });
    })

    .put((req, res) => {
        let { id } = req.params;
        bountyModel.findByIdAndUpdate(id, req.body, {new: ture},(err, updatedBounty) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updatedBounty);
            }
        });
    })

module.exports = bountyRouter;



