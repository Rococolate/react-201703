let obj = {
    name: 'zhufeng',
    sayName: function(){
      let timer = setTimeout(() => {
        console.log(this.name)
      }, 1000)
    }
}

obj.sayName()
