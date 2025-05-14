function foo() { };

foo();
new foo();

const arrow = () => { console.log("test")};

arrow();
// new arrow();


const obj = {
    x(){
        console.log("obj x");
    }
}

obj.x();

new obj.x();