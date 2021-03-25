
function loginCheck(email, password) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    },
    {
      firstName: 'ashley',
      email: '12@12',
      password: '12'
    }
  ]
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return 'success'
    }
  }
  return 'wrong'
}

module.exports = loginCheck