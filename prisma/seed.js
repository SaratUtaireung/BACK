const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { fname : 'andy', lname : 'undo', email : 'andy@hotmail.com',username : 'Test01', password, address : 'Test123', phone : 0123456789 },
  { fname : 'many', lname : 'gogo', email : 'many@HTML.com',username : 'Test02', password, address : 'Test456', phone : 0588546566 },
  { fname : 'lost', lname : 'start', email : 'lost@CSS.com',username : 'Test03', password, address : 'Test789', phone : 0880701111 },
]
// [
//   { username : 'andy', password, email: 'andy@ggg.mail' },
//   { username : 'bobby', password, email: 'bobby@ggg.mail' },
//   { username : 'candy', password, email: 'candy@ggg.mail' },
// ]

// const todoData = [
//   { title:'Learn HTML', dueDate: new Date(), userId: 1 },
//   { title:'Learn CSS', dueDate: new Date(), userId: 1 },
//   { title:'Learn JS', dueDate: new Date(), userId: 2 },
//   { title:'Learn React', dueDate: new Date(), userId: 3 },

// ]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
  // await prisma.todo.createMany({
  //   data : todoData
  // })
}

run();
