import { v4 as uuidv4 } from "uuid"; // Importamos la librería que genera UUID
//Habrá que instalar los tipos de uuid: npm i --save-dev @types/uuid
// Generamos los datos y facilitamos su exportación
export const products = [
    {
        id: uuidv4(),
        name: "Chaqueta",
        price: 35,
        stock: 18,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        id: uuidv4(),
        name: "Pantalon Vaquero",
        price: 28,
        stock: 3,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        id: uuidv4(),
        name: "Deportivas Adidas",
        price: 110,
        stock: 9,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        id: uuidv4(),
        name: "Riñonera",
        price: 10,
        stock: 43,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
    }
];
