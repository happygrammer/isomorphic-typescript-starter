interface Item {
    title: string; // 사이트 제목
    intro: string; // 사이트 설명
    url: string; // 사이트 URL
}
export default Item;

/*
인터페이스는 아래 형태는 안됨에 유의
*/
/* export default interface Item{
    title:string;
    intro:string;
    url:string;
}*/