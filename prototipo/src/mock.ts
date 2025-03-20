import { v4 as uuidv4 } from "uuid"; // Importamos la librería que genera UUID
//Habrá que instalar los tipos de uuid: npm i --save-dev @types/uuid

// Generamos los datos y facilitamos su exportación
export const products = [
  {
    id: uuidv4(), 
    price: 1200,
    stock: 10,
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Mouse",
    price: 25,
    stock: 50,
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  }
];
