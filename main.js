const bienvenida = prompt("¡Bienvenido a tu primera IA personalizada para dominar el mundo! Dime, ¿estás listo para comenzar? SI/NO") 

if (bienvenida == "si" || bienvenida == "Si") { 
        let respuesta = parseInt(prompt("Excelente. Selecciona la opción deseada: 1. medir tu índice de masa de maldad, 2. indicar lista de objetos necesarios para dominar el mundo, 3. despegar un cohete a la luna para dominarla también."))

        switch(respuesta){
            case 1:
                let edad = prompt("Indique su edad")

                if (edad <18) {
                    alert("Mmmm tas chiquito aún")
                } else {
                    function masa(edad){
                        return edad*100
                    }}

                    let resultado= masa(edad*10);
                    masa(console.log("Tienes un porcentaje de maldad del %" +resultado, ".¡Ya estás listo para dominar el mundo!"))
                
                break
            

            case 2: 
            const lista = ["Cuerda", "Minions" , "Ganas de dominar el planeta tierra" , "Chicle, pues porque sí"]
            console.log(lista)
            break

            case 3: 

            for (let i=10; i>=1; i--){
                console.log(i)
            }
            console.log ("¡Abrochen sus cinturones! Despegando.")
            break

            default: 
            alert("Respuesta inválida.")
            break
        }
    
} else if (bienvenida == "no" || bienvenida == "No") {
    alert("¿No? Mmm entonces no eres lo suficientemente malo aún.")
} else {
    console.log("Respuesta no válida.")
}

