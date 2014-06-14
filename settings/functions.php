<?php

//this file contains all the functions that we'll be using through out the site.

function loadPage()
{
	switch($_GET['page'])
	{

		case 'home' :

			$title = "Home";
			include("pages/home.php");
		
			break;
		
		case 'about' :
		
			include("pages/about.php");		
		
			break;
		
		case 'contact' :
		
			include("pages/contact.php");
		
			break;
		
		default:
			include("pages/home.php");

	}
}


?>