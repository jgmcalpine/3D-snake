class Apple {
  constructor() {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'apple');
    board.appendChild(this.node);

    setApple();
  }
}

function setApple() {
  const appleNode = document.getElementById('apple');
  const leftLocation = Math.floor(Math.random() * 12) * 50;
  const topLocation = Math.floor(Math.random() * 12) * 50;

  for (let i = 0; i < store.body.length; i += 1) {
    if (leftLocation === store.body[i].left && topLocation === store.body[i].top) {
      setApple();
    }
  }

  store.apple.left = leftLocation;
  store.apple.top = topLocation;
  appleNode.style.transform = `translate(${leftLocation}px, ${topLocation}px) translateZ(50px)`;
}

