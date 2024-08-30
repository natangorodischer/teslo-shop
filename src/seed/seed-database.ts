import { initialData } from "./seed";
import prisma from '../lib/prisma'; 


async function main() {

    // await Promise.all ([
        await prisma.productImage.deleteMany();
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();  
    // ]); 

    const {categories, products} = initialData
        
    //catergorias

    const categoriesData = categories.map( (name) => ({name})); 
    
    await prisma.category.createMany({
        data: categoriesData
    })

    const categoriesDB = await prisma.category.findMany(); 
    
    const categoriesMap = categoriesDB.reduce((map, category) => {
    map [category.name.toLowerCase()]  = category.id;   
        return map;
    }, {} as Record<string, string>)
    console.log(categoriesMap); 
        

    //Todos los productos 

    products.forEach ( async (product) => {

    const {type, images, ...rest} = product;    

    const dbProduct = await prisma.product.create({
        data: {
            ...rest, 
            categoryId: categoriesMap[type]
        }
    })

    //imagenes

    const imagesData = images.map(image => ({
        url: image, 
        productId: dbProduct.id
    })); 


    await prisma.productImage.createMany({
        data: imagesData
    });

    }); 

    
    console.log('seed ejecutado')
}






(() => {
    
    if (process.env.NODE_ENV === 'production') return; 
    main();
 
})(); 



