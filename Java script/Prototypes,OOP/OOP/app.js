/*function makeColor(r,g,b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const{r,g,b} = this;
        return `rgb(${r}, ${g},${b})`;

    };
    color.hex = function() {
        const{r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35,255,150);
firstColor.hex();
firstColor.rgb();

const black = makeColor(0,0,0);
black.rgb();
black.hex();*/

function Color(r,g,b) {
    this.r = r;
    this.g =g;
    this.b = b;
  
}
Color.Prototype.rgb = function() {
    const{r,g,b} = this;
    return `rgb(${r}, ${g},${b})`;

};
const color1 = new Color(40,50,60);


      //FACTORY FUNCTION
     
/*function hex(r,g,b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r,g,b) {
    return`rgb(${r},${b},${g})`;
}

hex(255,100,25);

rgb(255,100,25);

function makeColor(r,g,b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const{r,g,b} = this;
        return `rgb(${r}, ${g},${b})`;

    };
    color.hex = function() {
        const{r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35,255,150);
firstColor.hex()*/
//const navColor = new Color('carrot',[230,126,34]);
//const logoColor = new Color('emerald',[46,204,113]);

