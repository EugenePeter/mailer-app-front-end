export const findUsers = (id, users) => {
    console.log("from find users reducer", id)
    const result = users.filter(user => user.id !== id)
    console.log(users)
    return result
}