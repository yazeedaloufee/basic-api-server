'use strict';
const uuid= require('uuid').v4;


class Food {
    constructor(){
this.db=[];
    }

    // {id:2134, data:{name, recipe}}

    read(id){

        if (id){
            return this.db.find(record=>record.id===id)
        }else{
            return this.db
        }


    }

    create(obj){
        const food={
            id:uuid(),
            data:obj
        }

        this.db.push(food)
        return food;
    }

    delete(id){
        this.db=this.db.filter((food)=>food.id!==id);
        return this.db;
    }

    update(id,obj){

       const updateObj= this.db.find((value)=>{
            if(value.id===id){
                value.data=obj;
                return true;
            }else{return false;}
        })
        return updateObj;
    }

}

module.exports= Food;