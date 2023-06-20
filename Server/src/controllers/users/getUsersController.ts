import { AppDataSource } from "../../db";
import { User } from "../../entities/userEntity";
import { filtersUserStructure } from "../../interfaces/filtersUserStructure";

const getUsersController = async(rol: string, active: boolean) => {

    let filters: filtersUserStructure = {}
    
    if (rol) filters.rol = rol;
    if (active !== undefined) filters.active = active;

    const usersFound = await AppDataSource.getRepository(User).find({ where: filters });
    
    if(!usersFound.length) throw new Error ("No users available with that search")    
    return usersFound;
    
    // Agregar a la tabla un includes con las compras que hizo ese mismo usuario con su cuenta.
    // Paginado
}

export default getUsersController;