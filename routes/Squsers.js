const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const userModel = require("../models").Squser;
const balanceModel = require("../models").Balance;
const transactionModel = require("../models").Transaction;
router.get("/users", (req, res) => {
  userModel.findAll().then(
    (users) => {
      res.json(users);
    },
    (error) => {
      res.json(error);
    }
  );
});
router.get("/balances", (req, res) => {
  balanceModel.findAll().then(
    (balances) => {
      res.json(balances);
    },
    (error) => {
      res.json(error);
    }
  );
});
router.get("/transactions", (req, res) => {
  transactionModel.findAll().then(
    (trans) => {
      res.json(trans);
    },
    (error) => {
      res.json(error);
    }
  );
});
router.post("/adduser", (req, res) => {
  userModel
    .create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    .then(
      (user) => {
        res.json(user);
      },
      (error) => {
        res.json(error);
      }
    );
});
router.post("/userbalance", (req, res) => {
  balanceModel
    .create({ balance: req.body.balance, userId: req.body.userId })
    .then(
      (balance) => {
        res.json(balance);
      },
      (error) => {
        res.json(error);
      }
    );
});
router.post("/usertransaction", (req, res) => {
  transactionModel
    .create({
      transcation_date: req.body.transcation_date,
      transaction_amount: req.body.transaction_amount,
      userId: req.body.userId,
    })
    .then(
      (trans) => {
        res.json(trans);
      },
      (error) => {
        res.json(error);
      }
    );
});
module.exports = router;
