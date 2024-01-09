const express = require("express")


const router = express.Router()

const { notification } = require("../controllers/notification")
const { listofNotification } = require("../controllers/notification")

const { timeTable, listoftimetable } = require("../controllers/timeTable")

router.post("/notification", notification)
router.get("/listofnotification", listofNotification)
router.post("/timeTable", timeTable)
router.get('/listoftimetable', listoftimetable)



module.exports = router;