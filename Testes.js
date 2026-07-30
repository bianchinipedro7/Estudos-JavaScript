class Usuario {
    constructor(name, email, age) {
        this.x = name;
        this.y = email;
        this.z = age;
    }

    exibir() {
        console.log(this.x, this.y, this.z)
    }

}

const alberto = new Usuario("Alberto", "albertodev@email.com", 23);
const lebron = new Usuario("Lebron James", "lakers@email.com", 42);

alberto.exibir()
lebron.exibir()