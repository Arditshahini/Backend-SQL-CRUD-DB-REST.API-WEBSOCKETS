const { getAllCustomers, addCustomer, getCustomerByKeyword, editCustomer } = require("../repositories/customerRepository" );

async function search(req, res) {

    let data = await getCustomerByKeyword(req.query.keyword);

    console.log(data);
    
    return res.json(data);
}


module.exports = {
    search
}