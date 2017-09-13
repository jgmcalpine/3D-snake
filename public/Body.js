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