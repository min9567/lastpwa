function doA(){
    console.log(this);
}

const obj = {
    name: "eeee",
    doA(){
        console.log(this.name);
    }
}

obj.doA();

const arrow = () => {
    console.log('ddd'+JSON.stringify(this));
}

arrow();

const obj2 = {
    name:"obj2",
    arrow: function (){
        (() => {
            console.log("this"+JSON.stringify(this));
        })();
    },
}

obj2.arrow();