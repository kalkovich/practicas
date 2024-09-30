document.querySelectorAll('#sidebar a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        // Remover la clase 'active' de todos los enlaces
        document.querySelectorAll('#sidebar a').forEach(link => link.classList.remove('active'));

        // Agregar la clase 'active' al enlace seleccionado
        this.classList.add('active');

        // Obtener el contenido que debe mostrarse
        const contentToShow = this.getAttribute('data-content');

        // Limpiar el contenido actual
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Limpiar contenido anterior

        // Mostrar contenido dinámico basado en la opción seleccionada
        if (contentToShow === 'empresas-registradas') {
            contentDiv.innerHTML = `
                <h2>Empresas Registradas</h2>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre Empresa</th>
                                <th>Correo Electrónico</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Empresa A</td>
                                <td>empresaA@correo.com</td>
                                <td>123456789</td>
                                <td>Calle Falsa 123</td>
                                <td>
                                    <button class="btn btn-warning btn-sm">Editar</button>
                                    <button class="btn btn-danger btn-sm">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>`;
        } else if (contentToShow === 'agregar-empresa') {
            contentDiv.innerHTML = `
                <h2>Agregar Empresa</h2>
                <form>
                    <div class="form-group">
                        <label for="nombreEmpresa">Nombre Empresa</label>
                        <input type="text" class="form-control" id="nombreEmpresa" placeholder="Ingresa el nombre de la empresa">
                    </div>
                    <div class="form-group">
                        <label for="correoEmpresa">Correo Electrónico</label>
                        <input type="email" class="form-control" id="correoEmpresa" placeholder="Ingresa el correo electrónico">
                    </div>
                    <div class="form-group">
                        <label for="telefonoEmpresa">Teléfono</label>
                        <input type="text" class="form-control" id="telefonoEmpresa" placeholder="Ingresa el teléfono">
                    </div>
                    <div class="form-group">
                        <label for="direccionEmpresa">Dirección</label>
                        <input type="text" class="form-control" id="direccionEmpresa" placeholder="Ingresa la dirección">
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar Empresa</button>
                </form>`;
        }
    });
});
