<?php
session_start(); // Start the session

// Check if the user is logged in
if(!isset($_SESSION["username"])) {
  header("Location: index.html"); // Redirect to login if not logged in
  exit(); 
}

?>

<!DOCTYPE html>
<html>
<head>
  <title>Welcome</title>
  <link rel="stylesheet" href="style.css"> 
</head>
<body>

<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about_me.html">About</a></li>
    <li><a href="logout.php">Logout</a></li> 
  </ul>
</nav>

<h1>Welcome, <?php echo $_SESSION["username"]; ?>!</h1>

</body>
</html>