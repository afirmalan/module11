const express = require ("express")
const htmlRoutes=requiret("./routes/htmlRoutes")
const PORT = process.env.PORT || 3001

const app = express () 

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(htmlRoutes)

app. listen(PORT,()=>{
    console.log("App is listening on Port http://localhost:" + PORT)
})