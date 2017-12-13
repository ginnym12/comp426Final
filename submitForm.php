<?PHP

$username = "root";
$password = "root";
$database = "Calendar";
$server = "localhost";

$conn = new mysqli($server, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// TO DO: ACCESS USERNAME FROM LOGIN (For now, assume everything is you)
$username = $_GET["username"];
$event = $_GET["event"];
$location = $_GET["location"];
$time = $_GET["time"];
$date = $_GET["date"];

echo "Username: $username <br>";
echo "Event: $event <br>"; 
echo "Location: $location <br>"; 
echo "Time: $time <br>";
echo "Date: $date <br>";

$sql = 'INSERT INTO `Activity` (`Username`, `Event`, `Location`, `Time`, `Date`) VALUES
    ("'.$username.'", "'.$event.'", "'.$location.'", "'.$time.'", "'.$date.'")';
if ($conn->query($sql) === TRUE) {
    echo "Activity added <br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>