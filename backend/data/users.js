import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Krishna',
    email: 'krishna@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mahesh',
    email: 'mahesh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
