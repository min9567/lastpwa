class Post {
    constructor(title, content){
        this.title = title;
        this.content = content;
    }
    // prototype 에 들어가는 함수
    sayHi(){
        console.log(`this.title ${this.title} this.content ${this.content}`);
    }
    // 정적메서드
    static doA(){
        console.log(`this.title ${this.title} this.content ${this.content}`);
    }
}

const post = new Post("제목", "내용");
console.log(post);

post.sayHi();
Post.doA();