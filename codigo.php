
<?php

$variable=$_POST['query'];

ini_set('display_errors', 1);
        require_once('TwitterAPIExchange.php');

        $settings = array(
            'oauth_access_token' => "980264778177368064-7APYEWSJcEKoVqexOQDmE2TNsFNjkjV",
			'oauth_access_token_secret' => "ApKkHxnrTgdGGvLbuVKebYki5chDvJFmVxfd72lSXyvDn",
			'consumer_key' => "wkv7RFdBICK6vOMwAOHqiArGI",
			'consumer_secret' => "2TpOkU0tiFLri3J1gUaCdtQgTVYqtR5cOR4QegYhjdi6TV2YJQ"
        );

  
		$url = 'https://api.twitter.com/1.1/search/tweets.json';
        //$getfield = '?screen_name='.$user.'&count=100';     
        $getfield = '?q='.$variable;		
        $requestMethod = 'GET';
        $twitter = new TwitterAPIExchange($settings);
        $json =  $twitter->setGetfield($getfield)
                     ->buildOauth($url, $requestMethod)
                     ->performRequest();
        echo $json;



?>
