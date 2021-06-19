function tile_width() { return parseInt(document.getElementById("tile_width").value); }
function tile_height() { return parseInt(document.getElementById("tile_height").value); }
function tilesNX() { return parseInt(document.getElementById("tilesNX").value); }
function tilesNY() { return parseInt(document.getElementById("tilesNY").value); }
function transparent() { return document.getElementById("transparent").value; }
function current() { return document.getElementById("current").value; }
function resetTileDim() {
    document.getElementById('tile_width').value = 5;
    document.getElementById('tile_height').value = 5;
    canvas.draw();
}
function resetTileSet() {
    document.getElementById('tilesNX').value = 16;
    document.getElementById('tilesNX').value = 16;
    canvas.draw();
}
function render() {
    const mode = document.getElementById('renderingSelector').value;
    if (mode == "Canvas") {
        alert(mode);
    } else if (mode == "Pixels") {
        alert(mode);
    }
}

class Canvas {
    constructor() {
        const _width = tilesNX() * tile_width(); // most-recent width
        const _height = tilesNY() * tile_height(); // most-recent height
        // pixels = []
        const pixels = [];
        for (var y=0; y<tilesNY(); y++) {
            pixels.push([]);
            for (var x=0; x<tilesNX(); x++) {
                pixels[y].push(transparent());
            }
        }
        this.pixels = pixels;
        this.obj().height = this.pixels.length * tile_height();
        this.obj().width = this.pixels[0].length * tile_width();
        this.draw();
    }
    obj() { return document.getElementById('sketchpad'); }
    width() { return tilesNX() * tile_width(); } // actual width
    height() { return tilesNY() * tile_height(); } // actual height
    
    addRow() {
        // this._height += 1;
        const row = [];
        for (var x = 0; x < this._width; x++) {
            // new_px = Pixel(i, this._height, transparent())
            // this.pixels.push(new_px)
            row.push(transparent());
        }
        this.pixels.push(row);
        this.obj().height = this.pixels.length * tile_height();
        this.draw();
    }
    addColumn() {
        for (var y = 0; y < this.pixels.length; y++) {
            // new_px = Pixel(y, this._height, transparent())
            // this.pixels.push(new_px)
            this.pixels[y].push(transparent());
            // this.obj().width += tile_width();
        }
        this.obj().width = this.pixels[0].length * tile_width();
        this.draw();
    }
    suitable() {
        // let h = this._height == this.height();
        let h = this.obj().height == this.height();
        // let w = this._width == this.width();
        let w = this.obj().width == this.width();
        return w && h;
    }
    conform() {
        while (this.obj().height < this.height()) {
            this.addColumn();
        }
        while (this.obj().width < this.width()) {
            this.addColumn();
        }
        if (this.obj().height != this.height()) {
            alert(`_${this.obj().height} > ${this.height()}`);
        }
        if (this.obj().width != this.width()) {
            alert(`_${this.obj().width} > ${this.width()}`);
        }
        
    }
    set() {
        const obj = this.obj()
        const can = document.getElementById("sketchpad");
        can.width = this.width();
        can.height = this.height();
    }
    find(click) {
        
    }
    draw() {
        if (!this.suitable()) {
            this.conform();
            this.set();
        }
        if (variance(lengths(this.pixels)) != 0) {
            alert(`Canvas pixel rows do not agree;\n\t${lengths(this.pixels)}`);            
        } else {
            // this.
            const ctx = this.obj().getContext('2d');
            for (var y = 0; y < this.pixels.length; y++) {
                for (var x = 0; x < this.pixels[0].length; x++) {
                    const colour = this.pixels[y][x];
                    const xmin = x * tile_width();
                    const xmax = x * tile_width() + tile_width();
                    const ymin = y * tile_height();
                    const ymax = y * tile_height() + tile_height();
                    ctx.fillStyle = colour;
                    ctx.fillRect(xmin, ymin, xmax, ymax);
                    if (x > 0) {
                        // draw vline
                    }
                    if (y > 0) {
                        // draw hline
                    }
                }
            }
        }
    }
}

const canvas = new Canvas();
console.log(canvas)
console.log(window.innerWidth)
console.log(window.innerHeight)

console.log(
    tile_width(),
    tile_height(),
    tilesNX(),
    tilesNY(),
    tile_width() * tilesNX(),
    tile_height() * tilesNY(),
)

canvas.obj().addEventListener('click',  function(event) {
    const click = canvas.find(event);
    const x = click[0];
    const y = click[1];
    canvas.pixels[y][x] = current();
    canvas.draw();
    console.log(event);
    let location = canvas.obj().getBoundingClientRect();
    console.log(location);
});



