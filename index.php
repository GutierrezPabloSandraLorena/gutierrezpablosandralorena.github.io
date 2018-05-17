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
	    <!-- col s6 l12-->
	    
	    
	    <div class="input-field col s3 m12 l12">
		
		<center>
		<h3>BÚSQUEDA DE LIBROS/VIDEOS/MAPA <br/>BOOKS+YOUTUBE+MAPS API GOOGLE<h3>
		</center>
	</div>
	    
	    
	<div class="input-field col s3 m12 l12" id="fl">
		
			<!--<center>-->
		<div id="busqueda" class="#f5f5f5 grey lighten-2 z-depth-3 col s3 m12 l12">
        		<input id="query" placeholder="Ingresa palabra a buscar" class="input-field" value="" type="text" required/>
			<input id="num" value="" class="input-field" placeholder="Número de resultados" required type="number"/>
        		<button id="boton" type="button" class="btn purple" onclick="busquedaLibro('','')">Search</button>
		</div>
		
		<!--</center>-->
	</div>
		 <div class="container" id="map"></div>
			<div class="input-field col s3 m3 6" id="ri">
		<!--<div class="container col s3 m6 l3" >-->
			<div id="izq">
			<div class="row" id="tweet">
		<!--</div>-->
		</div>
			</div>
		</div> 
<!--<div class="col s6 l12" >
				</div>-->
	<div id="izq" class="input-field col s3 m3 l12" id="fl">
		<div class="container" >
			<div class="row" id="response">
				 
			</div>
		</div>
        
	
		<center>
		<button id="prev" type="button" class="btn purple" onclick="anterior()" >Anterior</button>
		<button id="next" type="button" class="btn purple" onclick="siguiente()" >Siguiente</button>
		</center>
	</div>	

			
			<div class="input-field col s3 m3 l12" >
		 <div class="container" >
		  	<div id="izq">
		  		<div class="row" id="resultados">
				 
				</div>
			
			</div>
		</div>
	</div>
			
		
		
   
		
			
			
			<!--<div class="input-field col s3 m12 l12">
		 <div class="container col s12 m6 l3" >
		  <div id="izq">
		  <div class="row" id="resultados">
				 
			</div>
			
		</div>
		</div> 
		<div id="tweet1">
		</div>-->
	
		
		<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
		
		<script src="https://apis.google.com/js/client.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDe4GeE6Tdv4rVz3BR7dv1QC35HMsOoTJQ&callback=initMap"
    async defer></script>
    </body>
	
</html>
