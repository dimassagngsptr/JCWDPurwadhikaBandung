function arr(name) {
   this.name = name;
   this.name = function (userName) {
      this.name.push(userName);
      console.log(name("Dimas"));
      return name;
   };
}
