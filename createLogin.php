<?PHP 

$username = "root";
$password = "root";
$database = "Calendar";
$server = "localhost";

$conn = new mysqli($server, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$first = $_GET["first"];
$last = $_GET["last"];
$username = $_GET["username"];
$password = $_GET["password"];
$famID = $_GET["famID"];

//check to see if username already exists
$sql="SELECT * FROM Login WHERE Username = '$username' ";
$result = mysqli_query($conn, $sql); 
$numResults = mysqli_num_rows($result);
if ($numResults != 0) {
    die("Login");
}

//check to see if famID is valid
$sql="SELECT * FROM Family WHERE FamilyID = '$famID' ";
$result = mysqli_query($conn, $sql);
$numResults = mysqli_num_rows($result);
if ($numResults == 0) { 
    die("FamID");
}

$sql = 'INSERT INTO `Login` (`Username`, `Password`, `FirstName`, `LastName`, `FamilyID`) VALUES
        ("'.$username.'", "'.$password.'", "'.$first.'", "'.$last.'", "'.$famID.'")';
if ($conn->query($sql) === TRUE) {
    echo "Success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>