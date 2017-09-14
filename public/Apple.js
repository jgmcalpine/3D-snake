class Apple {
  constructor() {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'apple');
    board.appendChild(this.node);
    console.log('store length', store.body.length);
    setApple();
  }
}

function setApple() {
  const appleNode = document.getElementById('apple');
  let leftLocation;
  let topLocation;
  function findRandomLocation() {
    leftLocation = Math.floor(Math.random() * 12) * 50;
    topLocation = Math.floor(Math.random() * 12) * 50;
  }
  

  for (let i = 0; i < store.body.length; i += 1) {
    if (leftLocation === store.body[i].left && topLocation === store.body[i].top) {
      findRandomLocation();
      i--;
    }
  }

  store.apple.left = leftLocation;
  store.apple.top = topLocation;
  appleNode.style.transform = `translate(${leftLocation}px, ${topLocation}px) translateZ(50px)`;
}