export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
      res.json()
    )
  }

export const getUserById = (id) => {
  return fetch(`http://localhost:8088/users?id=${id}&_embed=philosophers`).then((res) => res.json())
}  
  
  export const createUser = (user) => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json())
  }

  export const updateProfile = (user) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    return fetch(`http://localhost:8088/users/${user.id}`, putOptions).then((res) => res.json())
  }