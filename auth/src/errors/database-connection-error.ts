export class DatabaseConnectionError extends Error{
    reason = 'Error connection to database';
    constructor(){
        super();

        //Only because we are extending a build in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}