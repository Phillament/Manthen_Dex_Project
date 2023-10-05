const { initialiseDatabase } = require("../config/database.config");

const db = initialiseDatabase();

const services = {
    senddetails: async (res) => {
        db.query(
            `INSERT INTO Crypto.details(name_user,amount) VALUES ("${name_},"${amount}");`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.send({ message: false });
                    return;
                }
                res.send({ message: true });

                if (name_ === "" || amount === "") {
                    alert("All fields are necessary!")
                    return;
                }

                res.send([
                    {
                        name_: name_user,
                        amount: amount

                    },
                ]);
            }

        )
    },

    fetchItems: (res) => {
        db.query(
            `SELECT FROM Crypto.details `,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }

                res.send([
                    {
                        name_: name_user,
                        amount: amount

                    },
                ]);
            }

        )
    }

}

module.exports = services;