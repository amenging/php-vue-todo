<?php 
	$action = $_GET['action'];

	if ($action == 'logout') {
		setcookie("username","",time()-1);
	} else {
		if (!empty($_COOKIE["username"])) {
			echo $_COOKIE["username"];
		}
	}
?>