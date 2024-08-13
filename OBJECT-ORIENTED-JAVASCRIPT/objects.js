const userOne = {
  email: 'shakirazam@gmail.com',
  name: 'shakir',
  login(){
    console.log(this.email, 'has logged in');
  }, 
  logout(){
    console.log(this.email, 'has logged out');
  }
};

console.log(userOne.name);