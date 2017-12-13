<?PHP 
$username = "root";
$password = "root";
$database = "Calendar";
$server = "localhost";

$conn = new mysqli($server, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$famName = $_GET["famUsername"];
$famID = $_GET["famID"];

$sql = 'INSERT INTO `Family` (`FamilyID`, `FamilyName`) VALUES
    ("'.$famID.'", "'.$famName.'")';
if ($conn->query($sql) === TRUE) {
    echo "Family added <br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>