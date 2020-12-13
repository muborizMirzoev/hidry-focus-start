const allNode = document.querySelectorAll('*');
let randomNode = () => allNode[Math.floor(Math.random() * allNode.length)];
let randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
randomNode().style.backgroundColor = randomColor();

setInterval(function(){
  let random = randomNode();
  console.log(random);
  random.style.backgroundColor += randomColor();
}, 1000);

setInterval(function(){
  let random = randomNode()
  console.log(random);
  random.style.backgroundColor = "";
}, 1000);