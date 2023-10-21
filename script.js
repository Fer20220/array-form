        var datos = [];
        
        
            function guardarDato() {
                var dato = document.getElementById("datoInput").value;
                
                
                /*[dato] crea un nuevo array con un solo elemento, que es el valor de dato.
                Luego, datos = [dato]; asigna este nuevo array a la variable datos, reemplazando por completo su contenido anterior (si lo hubiera).
                */
                datos = [dato];
                
                mostrarDatos();
            }
        
            function mostrarDatos() {
            
            var lista = document.getElementById("listaDatos");
            
            lista.innerHTML = "";
            
            for (var i = 0; i < datos.length; i++) {
                var item = document.createElement("li");
                item.textContent = datos[i];
                lista.appendChild(item);
            }
        }