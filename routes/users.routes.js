const router = require("express").Router()



router.get("/students", (req, res, next)=>{
    res.render("students/students-list")
})


router.get("/students/new", (req, res, next)=>{
    res.render("students/registro-students")
})


module.exports = router