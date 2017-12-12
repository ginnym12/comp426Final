<?PHP

$username = "root";
$password = "root";
$database = "Calendar";
$server = "localhost";

$conn = new mysqli($server, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//$username = $_GET["name"];
$username = "markpetersen";

$query = "SELECT * FROM Activity WHERE Username = '$username'
          ORDER BY Date ASC, Time ASC";
$result = mysqli_query($conn, $query);
if($result === FALSE) { 
    die(mysqli_error());
}

while($row = mysqli_fetch_array($result)) {
    $myJSONString = json_encode($row);
    echo $myJSONString;
    echo "496VNE5PF6IZ"; /*obscure sequence to use as delimiter that user will *ideally*
                           use when entering in dates*/
}

?>