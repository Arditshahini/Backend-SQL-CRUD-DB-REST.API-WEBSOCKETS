const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:Temple1!=Temple2@localhost:5432/dvdrental')

async function selectCustomerByKeyword(keyword) {

  let data = await db.any(`SELECT * FROM customer WHERE first_name LIKE '${keyword}%'`);

  return data;
}

module.exports = {
    selectCustomerByKeyword
}