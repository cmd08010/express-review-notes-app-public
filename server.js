const express = require("express")
const app = express()
const path = require("path")
const DATA_PATH = "./notes.json"
const db = require("./db")
const bodyParser = require("body-parser")
let count = 0

app.use("/css", express.static(path.join(__dirname, "/assets")))
app.use(bodyParser.json())

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
)
app.get("/api/notes", (req, res, next) => {
  db.readJSON(DATA_PATH)
    .then(notes => res.send(notes))
    .catch(next)
})

app.post("/api/notes", async (req, res, next) => {
  db.readJSON(DATA_PATH)
    .then(notes => {
      count = notes.length
      notes.push({ id: count, text: req.body.text, archived: false })
      db.writeJSON(DATA_PATH, notes)
    })
    .then(notes => res.send(notes))
    .catch(next)
})

app.delete("/api/notes/:id", (req, res, next) => {
  const id = req.params.id
  db.readJSON(DATA_PATH)
    .then(notes => {
      const remainingNotes = notes.filter(note => note.id != id)
      return remainingNotes
    })
    .then(leftoverNotes => {
      db.writeJSON(DATA_PATH, leftoverNotes)
    })
    .then(() => res.sendStatus(204))
})

app.put("/api/notes/:id", (req, res, next) => {
  const updated = req.body.archived
  const id = req.params.id

  db.readJSON(DATA_PATH)
    .then(notes => {
      notes.forEach(note => {
        if (note.id == id) {
          note.archived = updated
        }
      })

      return notes
    })
    .then(updatedNotes => {
      db.writeJSON(DATA_PATH, updatedNotes)
    })
    .then(notes => res.send(notes))
    .catch(next)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))
