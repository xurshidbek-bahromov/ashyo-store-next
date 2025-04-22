export interface HeaderCategoriesType {
    createdAt:string,
    icon:string,
    id:number,
    image:string,
    name:string,
    parentCategory:null | number,
    subCategories:HeaderCategoriesType,
    updatedAt:string    
}