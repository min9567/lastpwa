class Post {
    constructor(title, content){
        this.title = title;
        this.content = content;
    }
    // prototype 에 들어가는 함수
    sayHi(){

    }
    // 정적메서드
    static doA(){

    }
}

const post = new Post("제목", "내용");
console.log(post);

const post1 = {
    title : "제목2",
    content : "내용2"
    // 메모리 낭비 유발
    sayHi(){
    }
}

console.log(post1);
