<html>
    <head>
        <script src="js/search.js" type="text/javascript"></script>     
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" type="text/javascript"></script> 
        <script src="https://apis.google.com/js/client.js?onload=onClientLoad" type="text/javascript"></script>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css/estilo.css">
		<link rel="stylesheet" href="css/materialize/css/materialize.min.css">
    <link rel="stylesheet" href="https://cdn.rawgit.com/Dogfalo/materialize/fc44c862/dist/css/materialize.min.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
    <script src="https://cdn.rawgit.com/Dogfalo/materialize/fc44c862/dist/js/materialize.min.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/pinzon1992/materialize_table_pagination/f9a8478f/js/pagination.js"></script>
		<link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/flat-ui.css">
	
		<title>MASHUP</title>
    </head>
    <body>
	<!--<div class="container" style="text-align: center">	
	<div class="row">
	 <div class="col s6 l12" >
			<div class="search" style="text-align: center"> 
				<h3>BÚSQUEDA DE LIBROS/VIDEOS/MAPA </br>BOOKS+YOUTUBE+MAPS API GOOGLE<h3>
				
			 <!--<div id="busqueda" class="#f5f5f5 grey lighten-4 z-depth-5">
			<input id="query" placeholder="Ingresa palabra a buscar" class="input-field col s6 l12" value="" type="text" required/>
			<input id="num" value="" class="input-field col s6 l12" placeholder="Número de resultados" required type="number"/>
			<button id="boton" type="button" class="btn waves-effect waves-light purple" onclick="busquedaLibro('','')">Search</button>
			<!--</div>
			</div>
		</div>
		</div>
		</div>
		-->
		<div class="input-field col s3 m12 l12">
		<center>
		<h3>BÚSQUEDA DE LIBROS/VIDEOS/MAPA </br>BOOKS+YOUTUBE+MAPS API GOOGLE<h3>
		<div id="busqueda" class="#f5f5f5 grey lighten-4 z-depth-5 col s3 m12 l12">
        <input id="query" placeholder="Ingresa palabra a buscar" class="input-field" value="" type="text" required/>
		<input id="num" value="" class="input-field" placeholder="Número de resultados" required type="number"/>
        </div>
		<button id="boton" type="button" class="btn purple" onclick="busquedaLibro('','')">Search</button>
		</center>
		</div>
<!--<div class="col s6 l12" >
				</div>-->
		<div class="input-field col s3 m12 l12">
		 <div class="container col s12 m6 l3" >
		  <div id="izq">
		  <div class="row" id="resultados">
				 
			</div>
			
		</div>
		</div>
		<div id="izq" class="input-field col s3 m12 l12">
		<div class="container" id="response">
		</div>
        
		</div>
		<center>
		<button id="prev" type="button" class="btn purple" onclick="prevPage()" disabled>Anterior</button>
		<button id="next" type="button" class="btn purple" onclick="nextPage()" disabled>Siguiente</button>
		</center>
		
		
    <div class="container col s6 l12" id="map"></div>
		
		<div class="container col s6 l12" >
			<div class="row" id="tweet">
		</div>
		</div>
		<div id="tweet1">
		</div>
	
		
		<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
		
		<script src="https://apis.google.com/js/client.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDe4GeE6Tdv4rVz3BR7dv1QC35HMsOoTJQ&callback=initMap"
    async defer></script>
    </body>
	
</html>
