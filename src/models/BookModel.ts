class BookModel{
    id: number;
    title: string;
    author?: string;
    description?: string;
    copies?: number;
    copiesAvailable?: number;
    category?: string;
    img?: string;

    constructor(id:number, title:string, author:string, description:string,
        copies:number, copiesAvailable:number,category:string,img:string){
            this.id = id;
            this.author=author;
            this.category=category;
            this.title=title;
            this.copies=copies;
            this.copiesAvailable=copiesAvailable;
            this.img=img;
            this.description=description;
        }
}
export default BookModel;