		// ********** DATOS MUTABLES -VARIABLES- **********
		// DECLARACION
		let nombre;
		let apellidos;
		let telefono;
		let edad;
		// ASIGNACION
		nombre="Juanma";
		apellidos="Lucas";
		telefono= 639784121;
		// DECLARACION Y ASIGNACION AL MISMO TIEMPO
		let nombre2="Ivan" ;
		let apellidos2="arevalo";
		let telefono2=665564511;

		// ********** DATOS INMUTABLES -CONSTANTES- **********
		const saludo="Hola Coders!";

		// alert(nombre);
		// confirm("Hola " + nombre + ", tu apellido es " + apellidos + "y tu telefono es " + telefono);
		// INTERPOLACION DE VARIABLES
		// confirm(`Hola ${nombre}, tu apellido es ${apellidos} y tu telefono es ${telefono}`);
		// ASIGNACION A UNA VARIABLE DE LO QUE RECUPEREMOS DEL 'prompt'
		edad = prompt(`Dime tu edad, ${nombre}`);
		console.log(edad);
		console.error(edad);
		console.info(edad);
		console.warn(edad);

		document.write(`
		<h1> ${edad} </h1>
			<!-- TODO EL CONTENIDO DE UN FORMULARIO DEBE ESTAR ENTRE LAS ETIQUETAS <form>...</form> -->
	<!-- 'get'LO USAMOS PARA SOLICITAR UN RECURSO O PEDIR AL SERVIDOR UN DATO -- SE VISUALIZA -- -->
			<!-- 'post'LO USAMOS PARA ENVIAR/MODIFICAR/BORRAR UN DATO AL SERVIDOR -- SE VISUALIZA -- -->
	 <form id="miPrimerFormulario" class="formulario" title="Mi formulario bonito!!!" action="#" method="get" name="formSaludo">
		<!-- 'fieldset' DIVIDE EL FORMULARIO EN DISTINTAS AREAS -->
		 <fieldset id="fldst1" class="fldst">
			<!-- 'legend' ESCRIBE EL TITULO DENTRO DEL BORDE -->
			<legend>DATOS USUARIO</legend>
			<!-- 'label' ETIQUETA QUE VA ASOCIADA A UN CAMPO NORMALMENTE 'input' SEÑALANDO LO QUE CONTIENE -->
			<section class="campo" id="campoNombre">
				<label class="etiqueta" for="nombre">NOMBRE:</label>
				<input type="text" name="txtNombre" id="nombre" required placeholder="Escribe tu nombre"
				size="25" minlength="3" maxlength="4">
			</section>
			
			<section class="campo" id="campoApellidos">
				<label class="etiqueta" for="apellidos">APELLIDOS:</label>
				<input type="text" name="txtApellidos" id="apellidos" placeholder="Los dos apellidos por favor!"
				size="19" disabled>
			</section>

			<section class="campo" id="campoTelefono">
				<label for="telefono" class="etiqueta">TELEFONO</label>
				<input type="number" name="numTelefono" id="telefono" placeholder="Solo los 7 numeros"
				value="" min="5" max="100" step="5">
			</section>
			
			<fieldset class="fldset" id="fldst1hijo">
				<!-- ESTOS TRES 'input' SON BOTONES: -->
				 <!-- 'button' CREA UN BOTON SENCILLO PARA MULTIPLES PROPOSITOS -->
				<input type="button" value="BOTON INOCUO">
				<!-- 'reset' LIMPIA EL CONTENIDO DE LOS CAMPOS -->
				<input type="reset" value="RESET">
				<!-- 'submit' ES EL BOTÓN CON LA FUNCIONALIDAD DE ENVIAR EL FORMULARIO -->
				<input type="submit" value="ENVIAR">
			</fieldset>

		 </fieldset>

	 </form>
	 <!-- VISUALMENTE NO HAY DIFERENCIA ENTRE ESTOS DOS TIPOS DE BOTONES -->
	  <!-- LA DIFERENCIA ESTÁ EN SUS ATRIBUTOS 'input' ES MÁS VERSATIL -->
	 <!-- <button>BOTON</button> -->
	 <!-- <input type="button" value="BOTON"> -->
	 `);
