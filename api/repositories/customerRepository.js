const customerModel = require("../models/customerModel");
const db_context = require("../db_context");

async function getAllCustomers() {

    let customers = [];

    let data = await db_context.selectAllCustomers()

    data.forEach(customer => {
        customers.push(new customerModel(customer.first_name, customer.last_name, customer.email))
    });

    return customers;
};

async function getCustomerByKeyword(keyword) {

    let customers = [];

    let data = await db_context.selectCustomerByKeyword(keyword)

    data.forEach(customer => {
        customers.push(new customerModel(customer.customer_id, customer.first_name, customer.last_name, customer.email))
    });

    return customers;
};

async function addCustomer(firstName, lastName) {

    db_context.insertCustomer(firstName, lastName);
};

async function editCustomer(customerId, firstName, lastName, email) {

    db_context.updateCustomer(customerId, firstName, lastName, email);
};

async function deleteCustomer(customerId) {

    db_context.deleteCustomer(customerId);
};

module.exports = {
    getAllCustomers,
    getCustomerByKeyword,
    addCustomer,
    editCustomer,
    deleteCustomer
}