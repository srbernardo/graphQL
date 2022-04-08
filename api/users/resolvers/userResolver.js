const userResolvers = {
  Query: {
      users: (root, args, { dataSource }) => 
        dataSource.usersAPI.getUsers()       
  }
}

module.exports = userResolvers