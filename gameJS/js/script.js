function Character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;

  this.elements = new UIElements(this.name)
}

function UIElements(name){
  this.attackBtn = document.querySelector(`#${name}-attack`);
  this.healthBtn = document.querySelector(`#${name}-make-health`);
  this.progress = document.querySelector(`.${name}-health span`);
  this.alive = document.querySelector(`#${name}-alive`);
}


Character.prototype.attack = function (opponent) {
  
  if(opponent.health>0){
    opponent.health -= this.strength;
    opponent.elements.progress.style.width =  `${opponent.health}%`
    
    
  }else{
    opponent.elements.attackBtn.remove()
    opponent.elements.healthBtn.remove()
    opponent.elements.alive.innerHTML =`${opponent.name} is died`
  }

};

Character.prototype.status = function () {
  console.log(`name:${this.name}`);
  console.log(`strength:${this.strength}`);
  console.log(`health:${this.health}`);
};



Character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.elements.progress.style.width =  `${this.health}%`
  }
  if (this.health > 100) {
    this.health = 100;
  }
};

let naruto = new Character("naruto", 10, 100);
let sasuke = new Character("sasuke", 5, 100);

naruto.elements.attackBtn.addEventListener("click", function () {
  naruto.attack(sasuke);
});


sasuke.elements.attackBtn.addEventListener("click", function () {
  sasuke.attack(naruto);
});

naruto.elements.healthBtn.addEventListener('click',function(){
  naruto.makeHealth();
})

sasuke.elements.healthBtn.addEventListener('click',function(){
  sasuke.makeHealth();
})