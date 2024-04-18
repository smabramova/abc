class UserProfileManager {
    constructor() {
      this.users = [];
    }
  
    generateUniqueId() {
      return Math.floor(Math.random() * 1000);
    }
  
    addUser(userInfo) {
      const id = this.generateUniqueId();
      const user = { id, name: userInfo.name, email: userInfo.email };
      this.users.push(user);
    }
  
    removeUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  
    updateUser(userId, newInfo) {
        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {...user, ...newInfo};
          }
          return user;
        });
      }
  
      findUserByName(name) {
        return this.users.filter(user => user.name.includes(name));
      }
    
      getAllUsers() {
        return this.users;
      }
    }
    
    const profileManager = new UserProfileManager();
  
  
  
  profileManager.addUser({ name: "Alice", email: "alice@example.com" });
  profileManager.addUser({ name: "Bob", email: "bob@example.com" });
  
  console.log(profileManager.getAllUsers());
  
  profileManager.updateUser(1, { name: "Alicia" });
  profileManager.removeUser(2);
  
  console.log(profileManager.findUserByName("Ali"));