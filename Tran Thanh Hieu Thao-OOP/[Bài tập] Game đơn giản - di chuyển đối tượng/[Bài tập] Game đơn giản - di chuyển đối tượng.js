function Hero(image, top, left, size,speedx,speedy){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.move = function() {
        if ( this.top == 20) {
            this.left += speedx;
        }
      if ( this.left == (window.innerWidth -(window.innerWidth%speedx)) - this.size ){
            this.top += speedy;
        }
        if (this.top == (window.innerHeight-(window.innerHeight%speedy)) - this.size  ){
            this.left -= speedx;
        }
        if (this.left == 20 ) {
             this.top -= speedy;
        }
        console.log('ok: ' + this.left +" "+this.top);
    }

}

let hero = new Hero("co-be-quang-khan-do.png", 20, 20, 200,5,5);

function start(){
    hero.move();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 1)
}
start();
