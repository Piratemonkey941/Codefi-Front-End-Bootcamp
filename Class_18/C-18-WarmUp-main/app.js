let users = [
    {
      username: "John123",
      confirmation_email: true
    }, 
    {
      username: "Amy123",
      confirmation_email: false
    },
    {
      username: "Jamie123",
      confirmation_email: true
    }
  ]

  const confimedUsers = users.filter((u) => {
    return u.confirmation_email
  })

// INSTRUCTORS ===================================

const confUsers = users.filter((u) => u.confirmation_email)

console.log(confimedUsers)
console.log(confUsers)

//=========================================================

function kmToMi(km) {
   return km * 0.621371
}

console.log(kmToMi(5))

