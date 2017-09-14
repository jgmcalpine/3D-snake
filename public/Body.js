class Body {
  constructor() {
    this.node = document.createElement('div');
    this.node.setAttribute('class', 'body-part');
    this.node.setAttribute('id', 'snake-' + store.bodyPartId);

    const bodyPart = {};
    bodyPart.top = store.head.top,
    bodyPart.left =  store.head.left,

    store.body.push(bodyPart);

    board.appendChild(this.node);
    this.node.style.transform = `translate(0px, 0px) translateZ(50px)`;
    store.bodyPartId += 1;
  }
}

function growSnake() {
  const bodySection = new Body();
}

// Move snake
function moveSnake() {
  for (let i = 0; i < store.body.length - 1; i += 1) {
    store.body[i].top = store.body[i + 1].top;
    store.body[i].left = store.body[i + 1].left;
  }

  if (store.body.length > 0) {
    let snakeNeck = store.body[store.body.length - 1];
    snakeNeck.top = store.head.top;
    snakeNeck.left = store.head.left;
  }

  for (let i = 0; i < store.body.length - 1; i += 1) {
    let currNode = document.getElementById('snake-' + i);
    currNode.style.transition = `transform ${store.speed}ms linear`;
    currNode.style.transform = `translate(${store.body[i].left}px, ${store.body[i].top}px) translateZ(50px)`;
  }
}