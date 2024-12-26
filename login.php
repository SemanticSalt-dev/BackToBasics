<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["email"];
  $password = $_POST["password"];

  // 1. Database Connection
  $servername = "localhost";
  $db_username = "root";
  $db_password = "beans4lunch!";
  $dbname = "local";

  $conn = new mysqli($servername, $db_username, $db_password, $dbname);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Basic input validation
  if (empty($email) || empty($password)) {
    echo "Email and password are required.";
    exit;
  }

  // Use prepared statements to prevent SQL injection
  $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
  $stmt->bind_param("ss", $email, $password); // "ss" indicates string parameters
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
    session_start();
    $_SESSION["username"] = $email;
    header("Location: welcome.php"); 
  } else {
    echo "Invalid email or password"; 
  }

  $stmt->close();
  $conn->close();
}