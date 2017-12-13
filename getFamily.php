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

$query = "SELECT username, firstName, FamilyID
          FROM Login 
          WHERE FamilyID = (SELECT FamilyID FROM Login WHERE '$username' = Username) ";
$result = mysqli_query($conn, $query);
if($result === FALSE) { 
    die(mysqli_error());
}

while($row = mysqli_fetch_array($result)) {
    $myJSONString = json_encode($row);
    echo $myJSONString;
    echo "496VNE5PF6IZ"; /*obscure sequence to use as delimiter that user will *ideally*
                           never use when entering in dates*/
}

?>