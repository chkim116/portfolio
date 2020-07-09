'use strict'


class shape {
    constructor(width,height,color) {
        this.width=width;
        this.height=height;
        this.color=color;
}
    draw() {
        console.log('draw는 ~~');
    }
}


class rectangle extends shape {}

