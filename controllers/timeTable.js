const con = require('../db/conn')
const timeTable = async (req, res) => {

    try {
        const lineName = req.body.lineName
        const BreakDownTime = req.body.BreakDownTime
        const breakdown = req.body.breakdown
        const timeIn = req.body.timeIn

        if (!timeIn || !lineName || !BreakDownTime || !breakdown) {
            await res.status(400).send({ message: "plese enter all the details here" })
        } else {

            var sql = "INSERT INTO timetable ( LineName,BreakDown, 	BreakDownTime,TimeIN) VALUES (?, ?, ?,?)";
            con.query(sql, [lineName, BreakDownTime, breakdown, timeIn], async (err, data) => {
                if (err) {
                    console.log(err)
                } else {

                    await res.status(200).send({ message: "inserted" })
                }
            })

        }
    } catch (error) {
        await res.status(400).send({ message: error.message })
    }
}


const listoftimetable = async (req, res) => {
    try {

        var sql = "Select * from  timetable";
        con.query(sql, async (err, data) => {
            if (err) {
                console.log(err)
            } else {

                await res.status(200).send(data)
            }
        })


    } catch (error) {

    }
}




module.exports = {
    timeTable, listoftimetable
}