function Animal () {
  var name, gender, age

  name = arguments[0]
  gender = arguments[1]
  age = arguments[2]

  this.name  = name
  this.gender = gender
  this.age = age
}

Animal.prototype.showInfo = function () {
   console.log('A' +  this.age  + 'years old' +  'this.gender' + this.name)
}


new Animal('cat', 'male', 'two').getInfo()