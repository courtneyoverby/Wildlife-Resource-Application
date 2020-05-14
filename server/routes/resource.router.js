const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.resource);
  const queryText = `SELECT * FROM "resources"`;
  pool
    .query(queryText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("Error making SELECT for resources:", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  const newResource = req.body;
  const queryText = `INSERT INTO resources ("name", "hours", "number", "address", "information")
                      VALUES ($1, $2, $3, $4, $5)`;
  const queryValues = [
    newResource.name,
    newResource.hours,
    newResource.number,
    newResource.address,
  ];
  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error completing SELECT resource query", err);
      res.sendStatus(500);
    });
});

router.delete("/", (req, res) => {
  const itemId = req.params.id;
  const queryText = `DELETE FROM "resources" WHERE "id" = $1;`;

  pool
    .query(queryText, [itemId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error deleting resource:", err);
      res.sendStatus(500);
    });
});

router.put("/", (req, res) => {
  const queryString = `UPDATE "resources" SET "name"=$1, "hours"=$2, "number"=$3, "address"=$4, "information"=$5, WHERE "id"=$6;`;

  pool
    .query(queryString, [
      req.params.id,
      req.params.name,
      req.params.hours,
      req.params.number,
      req.params.address,
      req.params.information,
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;
