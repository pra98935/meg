export class Video {
    // id: number;
    added_on:string = '';
    category:string = '';
    channel:string = '';
    cover_image:string = '';
    description:string = '';
    dimensions:string = '';
    duration:string = '';
    format:string = '';
    id:string = '';
    likes:string = '';
    my_like:string='';
    name:string='';
    small_description:string='';
    user_image:string='';
    user_name:string='';
    video_link:string='';
    

    // comment:Array(0)   // this is pending in declarartion

    constructor(values: Object = {}) { //The Object.values() method returns an array of a given object's
        
        //The Object.assign() method only copies enumerable and own properties from a source object to a target object.
        //Object.assign(target, ...sources)
        Object.assign(this, values); 
    }
}