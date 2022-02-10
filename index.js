const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server ready at: http://127.0.0.1:${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Hello, test-deploy-heroku")
})