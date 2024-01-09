const con = require('../db/conn')
const notification = async (req, res) => {

    try {
        const message = req.body.message
        const username = req.body.username
        const time = req.body.time

        if (!message || !username || !time) {
            await res.status(400).send({ message: "plese enter all the details here" })
        } else {

            var sql = "INSERT INTO notification ( message, name, time) VALUES (?, ?, ?)";
            con.query(sql, [message, username, time], async (err, data) => {
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


const listofNotification = async (req, res) => {
    try {

        var sql = "Select * from  notification";
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
    notification, listofNotification
}
//