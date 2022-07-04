const db = require('../db.js')
const pg = require('pg')
const { response } = require('express')
class petsController {
    async createPets(req, res) {
        const { id_pets } = req.body
        const { image } = req.body
        const { name } = req.body
        const { cost } = req.body
        const { category } = req.body
        const { value } = req.body
        const newPets = await db.query('INSERT INTO pets(id_pets, image, name, cost, category, value) values ($1, $2, $3, $4, $5, $6) RETURNING *', [id_pets, image, name, cost, category, value])
        res.json(newPets.rows[0])
    }
    async getPets(req, res) {
        const GetPETS = await db.query('SELECT * FROM pets')
        res.json(GetPETS.rows)
    }
    async deletePets(req, res) {
        const id_pets = req.params.id
        const getData = await db.query('DELETE FROM pets where id_pets = $1', [id_pets])
        res.json(getData.rows[0])
    }
}

module.exports = new petsController()