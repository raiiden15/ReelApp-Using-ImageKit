import { Connection } from "mongoose";

// define global object
declare global {
    var mongoose: {
        conn: Connection | null,
        promise: Promise<Connection> | null
        // promise, that is ek to connection hogaya hoga, or horaha hoga 
        // null creates fresh connection, this promise is of the type Connection  
    }
}

// done to export this object.
export {}