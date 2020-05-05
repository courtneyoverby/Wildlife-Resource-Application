const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log(req.user);
  const queryText = `SELECT * FROM "resources"`;
  pool
    .query(queryText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("Error making SELECT for resources:", error);
      res.sendStatus(500);
    });
});

// router.post("/", (req, res, next) => {

//   const queryText =
//     'INSERT INTO "resources" (name, hours, number, address, photo) VALUES ($1, $2, $3, $4, $5)';
//   pool
//     .query(queryText, [username, password])
//     .then(() => res.sendStatus(201))
//     .catch(() => res.sendStatus(500));
// });

module.exports = router;
