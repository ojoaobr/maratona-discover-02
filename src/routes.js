const express = require("express")
const routes = express.Router()
const views = __dirname + "/views/"

const profile = {
  name: "João Pedro",
  avatar: "https://github.com/ojoaobr.png",
  "monthly-budget": 5000,
  "hours-per-day": 8,
  "days-per-week": 5,
  "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes