const db=require('./db')
// function getAll(callback){
// const sql="select id,email,age from customers"
// db.executeQuery(sql,[],callback)
// }
function addOne(firstName,email,password,phone,email,lastName,callback){
const sql="insert into passenger_details(first_name,passwrd,mobile,email,last_name)values(?,?,?,?,?)"
db.executeQuery(sql,[firstName,email,password,phone,password,lastName],callback)
}
function logOne(email,pwd,callback)
{
    const sql="select * from passenger_details where email=? and passwrd=?"
    db.executeQuery(sql,[email,pwd],callback) 
}
module.exports.addOne=addOne
module.exports.logOne=logOne