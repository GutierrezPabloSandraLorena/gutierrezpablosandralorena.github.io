var map;
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 21.1825522, lng: -99.7062614},
          zoom: 3
        });
  }
  //lat: -34.397, lng: 150.644
	  // Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyDe4GeE6Tdv4rVz3BR7dv1QC35HMsOoTJQ');
}
var nextpageL="";
var nextpageY="";
var prevpageL="";
var prevpageY="";
var markers = [];

function nextPage(){
	dir= "https://www.googleapis.com/books/v1/volumes?maxResults=10&pageToken="+nextpageL+"q=" + palabra1+"&maxResults=10&key=AIzaSyDe4GeE6Tdv4rVz3BR7dv1QC35HMsOoTJQ";
	dir2=gapi.client.youtube.search.list({
        //part: 'snippet',
        //q:query		
		part:"snippet",
			type:"video",
			q:query,
			pageToken:nextpageY,
			maxResults:"10",
			order:"viewCount",
			publishedAfter:"2015-01-01T00:00:00Z"
    });
	
	busquedaLibro(dir,dir2);
}
function prevPage(){
	dir= "https://www.googleapis.com/books/v1/volumes?maxResults=10&pageToken="+prevpageL+"q=" + palabra1+"&maxResults=10&key=AIzaSyDe4GeE6Tdv4rVz3BR7dv1QC35HMsOoTJQ";
	dir2=gapi.client.youtube.search.list({
        //part: 'snippet',
        //q:query		
		part:"snippet",
			type:"video",
			q:query,
			pageToken:prevpageY,
			maxResults:"10",
			order:"viewCount",
			publishedAfter:"2015-01-01T00:00:00Z"
    });
	
	busquedaLibro(dir,dir2);
}
function busquedaLibro(dir,dir2){
	
	markers=[];
	document.getElementById('resultados').innerHTML="";
	document.getElementById('tweet').innerHTML="";
	document.getElementById('response').innerHTML="";
	document.getElementById('map').innerHTML="";
	
	console.log(document.getElementById('query').value);
	var palabra1=document.getElementById('query').value;
	var num1=document.getElementById('num').value;
	
	console.log(palabra1);

	if(dir=="")
	{
		dir= "https://www.googleapis.com/books/v1/volumes?maxResults=10&q=" + palabra1+"&key=AIzaSyDe4GeE6Tdv4rVz3BR7dv1QC35HMsOoTJQ";
	}
	$.ajax({
		url:dir,
		dataType: "json",
		success: function(datos){
			console.log(datos)
			
			var d=document.getElementById("resultados");
			d.setAttribute("backgroundColor", "Bisque");
			//for(i=0;i<datos.items.length;i++){
				var i=0;
				while (i<num1 && i<10){
				titulo="<center><h4>"+datos.items[i].volumeInfo.title+"</h4>";
				subtitulo="<h6>"+datos.items[i].volumeInfo.subtitle+"</h6>";
				autor="<h5> Autor:"+ datos.items[i].volumeInfo.authors + "</h5>";
				//resultados.innerHTML+=titulo;
				libro='<div class="col s3">'+titulo;
				//console.log(subtitulo);
				if(datos.items[i].volumeInfo.subtitle!=""){
				//resultados.innerHTML+=subtitulo;
				libro+=subtitulo;
				}
				libro+=autor;
				//resultados.innerHTML+=autor;
				//descripcion="<p>"+datos.items[i].volumeInfo.searchInfo+"</p>";
				//resultados.innerHTML+=descripcion;
					boton="<center><a href="+datos.items[i].volumeInfo.infoLink + "><button id=imagebutton class=btn red aligning >Detalles</button></a></center>";					
					if(datos.items[i].volumeInfo.imageLinks){
						url=datos.items[i].volumeInfo.imageLinks.thumbnail;
						img="<img class=responsive-img src="+url+"></center>"
						//resultados.innerHTML+=img;
						libro+=img;
					}
					libro+=boton+"</div>";
					//resultados.innerHTML+=boton;
					resultados.innerHTML+=libro;
					i++;
			}
			if(datos.nextPageToken){
			nextpageL=datos.nextPageToken;
			console.log("nextpage: "+nextpage);
			document.getElementById("next").disabled=false;
			}
			else{document.getElementById("next").disabled=true;}
			if(datos.prevPageToken){
			prevpageL=datos.nextPageToken;
			console.log("nextpage: "+nextpage);
			document.getElementById("prev").disabled=false;
			}else{document.getElementById("prev").disabled=true;}
		},
		type: 'GET'
	});
	search(dir2);
};

// Called when the search button is clicked in the html code
function search(dir) {
    var query = document.getElementById('query').value;
	var num = document.getElementById('num').value;
    // Use the JavaScript client library to create a search.list() API call.
	var request;
    if(dir==""){
		 request = gapi.client.youtube.search.list({
        //part: 'snippet',
        //q:query		
		part:"snippet",
			type:"video",
			q:query,
			maxResults:"10",
			order:"viewCount",
			publishedAfter:"2015-01-01T00:00:00Z"
   });
	}else
		request = dir;
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
	var num=document.getElementById('num').value;
	var query=document.getElementById('query').value;
   // var responseString = JSON.stringify(response, '', 2);
    //document.getElementById('response').innerHTML = responseString;
	if(response.nextPageToken && num>10){
			nextpageY=response.nextPageToken;
			console.log("nextpageY: "+nextpageY);
			document.getElementById("next").disabled=false;
			console.log("nextpageY: "+nextpageY);
	}
	else{
		document.getElementById("next").disabled=true;
		
	}
	if(response.prevPageToken&& num>10){
			prevpageY=response.nextPageToken;
			console.log("prevpageY: "+prevpageY);
			document.getElementById("prev").disabled=false;
	}else{
		document.getElementById("prev").disabled=true;
	}
	
	var results = response.result;
	var n=0;
	
            $.each(results.items, function(index, item) {
            //console.log(item);
             if(n<num){
			 localiza(item);
			 
			 }n++;
             });
	//google.maps.event.addDomListener(window,'load',showMarkers);
	if(markers.length>=1) 
	{
		showMarkers();
		}
else{
	initMap();
}	

	$.ajax({
                data:  {"query":query},
                url:   'codigo.php',
                type:  'post',
                success:  function (response) {
                        $("#datos").html(response);
                        var respuesta = JSON.parse(response);
                        console.log(respuesta);
                        mostrarTwitter(respuesta);
						
						
                }
        });
	
}
function localiza(item){
     var request2 = gapi.client.youtube.videos.list({
                     id: item.id.videoId,
                     part: 'snippet, recordingDetails, statistics'                                  
                      });
      request2.execute(function(response1) {    
                     console.log(response1.result);
					 console.log("items"+response1.result.items);
     var latitud; var longitud; var ub='no encontrada';
     var alto=800; var ancho=1000; //var markers = [];
 //height:800px;
	//width:1000px;	
	var num=document.getElementById('num').value;
       if(num==2){alto=600; ancho=ancho/2;}  
       if(num==3){
		   ancho=ancho/2;
	   alto=alto/2;
	   console.log(alto+""+ancho);}
		  
       if(num==4){alto=alto/2; ancho=ancho/2;}
	   if(num==5 || num==6){alto=alto/2; ancho=ancho/3;}
	   if(num==7 || num==8){alto=alto/2; ancho=ancho/4;}
      // if(num==5 || num==6 || num==7 || num==8){alto=alto/3; ancho=ancho/4;}         
       if(num==9 || num==10 || num>10){alto=alto/3; ancho=ancho/5;}
  //"snippet": 
      if(response1.result.items[0].recordingDetails){
        longitud = response1.result.items[0].recordingDetails.location.longitude; 
        latitud=response1.result.items[0].recordingDetails.location.latitude;
        ub=longitud+','+latitud;
      }
	 // <div class="video-container">  width='+ancho+'px height='+alto+'px  
	  
    ide=item.id.videoId;   
     salida='<div id="izq"class="video-container" ><iframe  width='+ancho+'px height='+alto+'px src=\"//www.youtube.com/embed/'+item.id.videoId+'\" allowfullscreen></iframe></br>CANAL: '+item.snippet.channelTitle+'<br />FECHA DE PUBLICACION: '+item.snippet.publishedAt.substr(0, 9)+'<br /> Ubicación: '+ub+' </div>';
      $("#response").append(salida);       
		if(response1.result.items[0].recordingDetails){
			console.log("item mapa"+response1.result.items[0].recordingDetails);
			console.log(response1.result.items[0].recordingDetails.location.longitude);
			longitud = response1.result.items[0].recordingDetails.location.longitude; 
			latitud=response1.result.items[0].recordingDetails.location.latitude;
			console.log(longitud);
				console.log("si");
				//initMap(latitud,longitud,ide);
				titulo=item.snippet.title;
				marcador(latitud,longitud,titulo);
		}
		//}
	
	
 });
	
}
function marcador(lat2,long2,titulo){
  console.log("si");
  var pos= {lat: lat2, lng: long2};
		console.log("pos");
		map.addListener('click', function(event) {
          addMarker(event.latLng);
        });
		addMarker(pos,titulo);
}

      // Adds a marker to the map and push to the array.
function addMarker(location,titulo) {
	console.log("location");
	var message = [titulo+' Ubicacion: '+location];
	var infowindow=new google.maps.InfoWindow();
	
    var marker = new google.maps.Marker({
          position: location,
		map: map,
	center:location,
		  title:'titulo'
    });
	
	google.maps.event.addListener(marker,'click',(function(marker){
		return function(){
			infowindow.setContent(mensaje);
			infowindow.open(map,marker);
		}
	})(marker));

    markers.push(marker);
}



function setMapOnAll(map) {
	console.log("show1");
    for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
    }
}
      // Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}
      // Shows any markers currently in the array.
function showMarkers() {
	console.log("show");
    setMapOnAll(map);		
}
      // Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function mostrarTwitter(response){
console.log(reshttps://mashup-sandra.herokuapp.com/ponse);
console.log("si mostrar "+response.statuses.length);


for (var i = 0; i <=response.statuses.length; i++) {
	console.log("si for");

  var t=document.getElementById("tweet");
			t.setAttribute("backgroundColor", "Bisque");
			
			//imagen = '<img style="width:30px; height: 30px" src= "'+ response.statuses[i].user.profile_background_image_url;
			
			url_imagen=response.statuses[i].user.profile_background_image_url;
			screen_name =response.statuses[i].user.screen_name;
			
			fecha = "<center><h4>"+response.statuses[i].user.created_at+"</h4>";
			texto ="<center><h4>"+response.statuses[i].text+"</h4>";
			name = "<a href='https://twitter.com/"+screen_name+"' target=_blank>@"+screen_name+"</a>";
			
			imagen ="<center><h4>"+name+" <a href='https://twitter.com/"+screen_name+"' target=_blank><img width='50px' height='50px' src="+url_imagen+"></img></a></h4>";
            console.log("texto"+texto);
			 tt='<div class="container col s12 l12">'+fecha+''+imagen+'name'+name+''+texto+'</div>';
			
			tweetagregar="<div class=tweet><img class=img src="+response.statuses[i].user.profile_background_image_url+"/><div class=info><p class=user>"+name+"<span class=name></span><span class=username>"+response.statuses[i].user.screen_name+"</span>"+
					"<span class=date>"+response.statuses[i].user.created_at+"</span>"+
				"</p><p class=text>"+response.statuses[i].text+"</p></div></div>";
			
				tweet.innerHTML+=tt;
				
  
  
  if(response.statuses[i].geo !== undefined && response.statuses[i].geo !== null){
    if(response.statuses[i].geo.coordinates){
       console.log(response.statuses[i].geo.coordinates);
       marcadorTwitter(response.statuses[i].geo.coordinates[0],response.statuses[i].geo.coordinates[1], texto,"https://icon-icons.com/icons2/730/PNG/32/twitter_icon-icons.com_62765.png");
      }
}
showMarkers();
}
function marcadorTwitter(lat2,long2,titulo,imagen){
  console.log("si");
  var pos= {lat: lat2, lng: long2};
		console.log("pos");
		map.addListener('click', function(event) {
          addMarker(event.latLng);
        });
		addMarker(pos,titulo,imagen);
}

      // Adds a marker to the map and push to the array.
function addMarkerTwitter(location,titulo,imagen) {
	console.log("location");
	var message = titulo+" Ubicacion: "+location+"<img src="+imagen+"/>";
	var infowindow=new google.maps.InfoWindow();
	
    var marker = new google.maps.Marker({
          position: location,
		map: map,
	center:location,
		  title:'titulo'
		  /*icon:{
			  path:google.maps.SymbolPath.CIRCLE,
			  scale:10,
			  strokeColor:'#f00',
			  strokeWeight:5,
			  fillColor: '#00f',
			  fillOpacity:1
		  }*/
    });
	
	google.maps.event.addListener(marker,'click',(function(marker){
		return function(){
			infowindow.setContent(mensaje);
			infowindow.open(map,marker);
		}
	})(marker));

  
    markers.push(marker);
}



