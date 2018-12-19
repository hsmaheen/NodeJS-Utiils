module.exports.add = (a, b) => {
  console.log('Add 2 numbers');
  return a + b;
};

module.exports.square = a => a * a;

module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

module.exports.addAsync = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

const promiseFn = (fileName, open) => {
  return new Promise((resolve,reject)=>{
      if(false){
        reject(false);
      }
      else{
        resolve(true);
      }
  });
  
}


