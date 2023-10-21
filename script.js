        var datos = [];
        
        
            function guardarDato() {
                var dato = document.getElementById("datoInput").value;
            
                
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