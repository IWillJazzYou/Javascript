let person = (function(){
    let name    =   'John';
    let surname =   'Doe';

   

    function sayMyTrueName(){
       return this.name;
    }

    function shoutMyTrueName(){
        alert('name');
    }

    return{
        sayTrueName: sayMyTrueName,
        alertTrueName: shoutMyTrueName
    }

})()

    person.name = 'rob'
console.log(person.name);
console.log(person.sayMyTrueName)
    person.name = 'tom';
console.log(person.name);
console.log(person.sayMyTrueName) 

