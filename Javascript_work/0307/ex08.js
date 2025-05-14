function AA(x){
    this.x =x;
}

AA.prototype.bb = function(){
    console.log('난 bb');
}

const aa = new AA(20);
console.log(aa);
console.log(aa.x);

aa.bb();

AA.prototype = {
    cc(){
        console.log('난 CC');
    }
}

// aa.cc();
aa.bb();

const newaa = new AA(30);
newaa.cc();
// newaa.bb();