import { lightNavMovil, selectNavMovil } from "./tools/NavMovil.js";
import returnInit from "./tools/Return.js";

returnInit()

try{
    selectNavMovil()
    lightNavMovil()
}catch( err ){
    console.error( err )
}


