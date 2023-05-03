const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:backend123@localhost:5432/Bibliotek')

async function selectCustomerByKeyword(keyword) {
    let data = await db.any(
        `SELECT * FROM customer WHERE first_name LIKE '${keyword}%'`
    )

    return data
}

async function insertCustomer(firstName, lastName, email) {
    db.none(`INSERT INTO customer (store_id, first_name, last_name, address_id, activebool)
           VALUES (1, '${firstName}', '${lastName}', 1, true)`)
}

async function updateCustomer(customerId, firstName, lastName, email) {
    await db.none(
        `UPDATE customer SET first_name = '${firstName}', last_name = '${lastName}', email = '${email}' WHERE customer_id = ${customerId}`
    )
}

async function deleteCustomer(customerId) {
    await db.none(`DELETE FROM customer WHERE customer_id = ${customerId}`)
}

module.exports = {
    selectCustomerByKeyword,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}
