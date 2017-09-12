class Head {
  constructor() {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    this.node.style.transform = `translate(0px, 0px) translateZ(50px)`;
    board.appendChild(this.node);

    setTimeout(this.move.bind(this), store.speed);
    store.body.push(this.node);
  }

  move() {
    switch(store.currentDirection) {
      case 'right':
        store.head.left += 50;
        break;
      case 'left':
        store.head.left -= 50;
        break;
      case 'up':
        store.head.top -= 50;
        break;
      case 'down':
        store.head.top += 50;
        break;
      default: break;
    }
  }
}