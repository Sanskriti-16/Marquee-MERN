function createPerson(name, age){
    return{
        name: name,
        age: age,
        greet(){
            console.log(`Hello, I am `)
        }
    }
}