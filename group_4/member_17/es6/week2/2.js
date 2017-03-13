function Animal () {
  var name = arugments[0]
  var gender = arugments[0]
  var age = arugments[0]

  this.age = age
  this.gender = gender
  this.name = name
}

Animal.prototype.getInfo () {
  var info  = 'A '+ this.age + ' years old '+this.gender + ' ' + this.name
  console.log(info)
}

new Animal('cat', 'male', 'two').getInfo()