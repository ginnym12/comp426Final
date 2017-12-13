<?PHP 

$username = "root";
$password = "root";
$database = "Calendar";
$server = "localhost";

$conn = new mysqli($server, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_GET["username"];
$password = $_GET["password"];

//check to see if famID is valid
$sql="SELECT * FROM Login WHERE username = '$username' AND password = '$password' ";
$result = mysqli_query($conn, $sql);
$numResults = mysqli_num_rows($result);
if ($numResults == 0) { 
    die("Invalid");
} else if ($numResults == 1) {
    die($username);
} else {
    die("Internal Error");
}

?>