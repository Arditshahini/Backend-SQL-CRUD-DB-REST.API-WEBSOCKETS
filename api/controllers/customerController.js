const { getAllCustomers, addCustomer, getCustomerByKeyword, editCustomer, deleteCustomer } = require("../repositories/customerRepository" );

async function search(req, res) {

    let data = await getCustomerByKeyword(req.query.keyword);

    console.log(data);
    
    return res.json(data);
}

async function add(req, res) {


    console.log(req.body)

    await addCustomer(req.body.firstName, req.body.lastName);
}

async function edit(req, res) {

    console.log(req.body);

    await editCustomer(req.body.customerId, req.body.firstName, req.body.lastName, req.body.email);
}

async function remove(req, res) {

    await deleteCustomer(req.body.customerId);
}

module.exports = {
    search,
    add,
    edit,
    remove
}