const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// ===== GET ============================================================== //

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
}); // end GET

// ===== POST ============================================================= //

router.post('/', (req, res) => {
    const pokemon = req.body
    console.log('in POST', pokemon);
    let sqlText = `INSERT INTO "gallery" (name, description, path, likes) 
        VALUES ($1, $2, $3, 0);`;
    pool.query(sqlText, [pokemon.name, pokemon.description, pokemon.path])
    .then((dbRes) => {
        console.log('in POST .then');
        res.sendStatus(200);
    }).catch((err) => {
        console.log('in POST .catch', err);
        res.sendStatus(500);
    })
}) // end POST

// ===== PUT ============================================================== //

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
}); // end PUT

// ===== DELETE =============================================================== //

router.delete('/:id', (req, res) => {
    const galleryId = [req.params.id];
    console.log('in router.delete - id:', galleryId);
    const sqlText = `DELETE FROM "gallery" WHERE "id" = $1;`;
    pool.query(sqlText, galleryId)
    .then((dbRes) => {
        console.log('in DELETE .then');
        res.sendStatus(200);
    }).catch((err) => {
        console.log('in DELETE .catch', err);
        res.sendStatus(500);
    })
})

// ===== EXPORTS ============================================================== //

module.exports = router;