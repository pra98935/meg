export class Usermodel {
    // id: number;
    name: string = '';
    email: string = '';
    password: string = '';

    constructor(values: Object = {}) { //The Object.values() method returns an array of a given object's
        
        //The Object.assign() method only copies enumerable and own properties from a source object to a target object.
        //Object.assign(target, ...sources)
        Object.assign(this, values); 
    }
} 