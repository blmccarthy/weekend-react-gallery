const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('in PUT', req.params);
    const galleryId = [req.params.id];
    const sqlText = `UPDATE "gallery" SET "likes" = likes + 1 WHERE "id" = $1;`;
    pool.query(sqlText, galleryId)
    .then((dbRes) => {
        console.log('in PUT .then', dbRes);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('in PUT .catch', err);
        res.sendStatus(500);
    })
});

// // [OLD] PUT Route

// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for (const galleryItem of galleryItems) {
//         if (galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('in GET');
    let sqlText = `SELECT * FROM "gallery" ORDER BY "id";`;
    pool.query(sqlText)
    .then((dbRes) => {
        console.log('in GET .then');
        res.send(dbRes.rows);
    }).catch((err) => {
        console.log('in GET .catch', err);
        res.sendStatus(500)
    })
}); // END GET Route

module.exports = router;