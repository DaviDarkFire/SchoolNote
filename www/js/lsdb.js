Storage.prototype.insert = function(collection, obj){
    if(!this.getItem(collection)){
        this.setItem(collection, JSON.stringify([]));    
    }

    var collectionObj = JSON.parse(this.getItem(collection));
    collectionObj.push(obj);
    
    this.setItem(collection, JSON.stringify(collectionObj));
}

Storage.prototype.deleteObj = function(collection, obj){

    var deleteIndex;
    var collectionObj = JSON.parse(this.getItem(collection));
    $.each(collectionObj, function(index, objeto){

        var nome = objeto.nome;
        if (nome == obj)  {
            deleteIndex = index;
            console.log(nome);
                
        }        
        

    });

    collectionObj.splice(deleteIndex, 1);
    this.setItem(collection, JSON.stringify(collectionObj));
}

Storage.prototype.update = function(collection, NomeOldObj, NewObj){

    var UpdateIndex;
    var collectionObj = JSON.parse(this.getItem(collection));
    $.each(collectionObj, function(index, objeto){

        var nome = objeto.nome;
        if (nome == NomeOldObj)  {
            UpdateIndex = index;
            console.log(nome);
        }        
    });

    collectionObj.splice(UpdateIndex, 1, NewObj);    
    this.setItem(collection, JSON.stringify(collectionObj));
}

Storage.prototype.getCollection = function(collection){
    return JSON.parse(this.getItem(collection)) || [];
}



Storage.prototype.find = function(collection, query, cb){
    var collectionObj = JSON.parse(this.getItem(collection));

    if (typeof query === 'function'){ 
        cb = query;
        cb(collectionObj);
        
        return;
    }else{
        var result = [];
        
        collectionObj.forEach(function(obj){
            var candidate = true;
            
            for (var key in query){
                if (!(obj.hasOwnProperty(key) && obj[key] === query[key])){
                    candidate = false;
                }
            }
            
            if(candidate){
                result.push(obj);
            }
        });   
        
        cb(result);
    }    
}
