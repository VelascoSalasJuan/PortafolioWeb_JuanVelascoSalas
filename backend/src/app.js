import express from 'express'

const app = express()

app.use(express.json())

app.get('/api/salud', (req, res) => {
  res.json({ estado: 'ok', mensaje: 'Servidor funcionando' })
})

export default app
