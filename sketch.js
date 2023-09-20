function setup() {
    createCanvas(600,800);
    background("white");
}

function draw() {
    const c = color(220, 160, 0);
    const b = color(241,169,0);
    const a = color(6,0,43);
    const d = color(227,38,0);
    fill(c);
    stroke(c);
    rect(300,500,166);
    fill(b);
    stroke(b);
    quad(210,180,245,228,180,283,140,240);
    fill(a);
    stroke(a);
    quad(93,375,270,230,280,243,105,390);
    fill("black");
    stroke("black");
    quad(145,366,205,328,233,370,173,410);
    quad(330,405,436,333,470,390,364,460);
    fill(d);
    stroke(d);
    quad(150,444,345,315,380,370,185,500);
}

