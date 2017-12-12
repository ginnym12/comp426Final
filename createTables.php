<?PHP
//CREATES TABLES AND ADDS SAMPLE DATA
$username = "root";
$password = "root";
$database = "Calendar";
$server = "localhost:8889";

$conn = new mysqli($server, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql= "DROP TABLE IF EXISTS Activity, Login, Family";
if ($conn->query($sql) === TRUE) {
    echo "Tables dropped<br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$sql= "CREATE TABLE IF NOT EXISTS Family (
    FamilyID VARCHAR(10) PRIMARY KEY,
    FamilyName VARCHAR(15)
    )";
if ($conn->query($sql) === TRUE) {
    echo "Family Table created <br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$sql= "CREATE TABLE IF NOT EXISTS Login (
    Username VARCHAR(15) PRIMARY KEY,
    Password VARCHAR(15),
    FirstName VARCHAR(15),
    LastName VARCHAR(15),
    FamilyID VARCHAR(10),
    FOREIGN KEY (FamilyID) REFERENCES Family(FamilyID)
    )";
if ($conn->query($sql) === TRUE) {
    echo "Login Table created <br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$sql= "CREATE TABLE IF NOT EXISTS Activity (
    Username VARCHAR(15),
    Event VARCHAR(100),
    Location VARCHAR(100),
    Time VARCHAR(100),
    Date VARCHAR(100),
    FOREIGN KEY (Username) REFERENCES Login(Username)
    )";
if ($conn->query($sql) === TRUE) {
    echo "Activity Table created <br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

//START INSERTING RANDOM DATA HERE

$sql = 'INSERT INTO `Family` (`FamilyID`, `FamilyName`) VALUES ("QJFURBHDJE","Petersen")';
if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
$sql = 'INSERT INTO `Family` (`FamilyID`, `FamilyName`) VALUES ("YEPPLOINMN", "Moses")';
if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
$sql = 'INSERT INTO `Family` (`FamilyID`, `FamilyName`) VALUES ("LEWREDJIET", "Mayer-Patel")';
if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}

$sql = 'INSERT INTO `Login` (`Username`, `Password`, `FirstName`, `LastName`, `FamilyID`) VALUES
    ("markpetersen", "asdfghjkl", "Mark", "Petersen", "QJFURBHDJE")';
if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
$sql = 'INSERT INTO `Login` (`Username`, `Password`, `FirstName`, `LastName`, `FamilyID`) VALUES
    ("scottpetersen", "qwertyuiop", "Scott", "Petersen", "QJFURBHDJE")';
if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
$sql = 'INSERT INTO `Login` (`Username`, `Password`, `FirstName`, `LastName`, `FamilyID`) VALUES
    ("karenpetersen", "zxcvbnm", "Karen", "Petersen", "QJFURBHDJE")';
if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
$sql = 'INSERT INTO `Login` (`Username`, `Password`, `FirstName`, `LastName`, `FamilyID`) VALUES
    ("ginnymoses", "password", "Ginny", "Moses", "YEPPLOINMN")';
if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
$sql = 'INSERT INTO `Login` (`Username`, `Password`, `FirstName`, `LastName`, `FamilyID`) VALUES
    ("mommamoses", "password2", "Momma", "Moses", "YEPPLOINMN")';
if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
$sql = 'INSERT INTO `Login` (`Username`, `Password`, `FirstName`, `LastName`, `FamilyID`) VALUES
    ("kmp", "splaytree", "Ketan", "Mayer-Patel", "LEWREDJIET")';
if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}

$j=23;
for ($i=1; $i<20; $i++) {
    $j--;
    $sql = 'INSERT INTO `Activity` (`Username`, `Event`, `Location`, `Time`, `Date`) VALUES
        ("markpetersen", "Soccer", "Gym", "'.$j.':00", "2017-12-'.$i.'")';
    if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
    $sql = 'INSERT INTO `Activity` (`Username`, `Event`, `Location`, `Time`, `Date`) VALUES
        ("karenpetersen", "Cardio", "YMCA", "'.$i.':00", "2017-12-'.$j.'")';
    if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
    $sql = 'INSERT INTO `Activity` (`Username`, `Event`, `Location`, `Time`, `Date`) VALUES
        ("scottpetersen", "Golf", "Grand Isle", "'.$j.':00", "2017-12-'.$j.'")';
    if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
}

$j=22;
for ($i=1; $i<21; $i++) {
    $j--;
    $sql = 'INSERT INTO `Activity` (`Username`, `Event`, `Location`, `Time`, `Date`) VALUES
        ("ginnymoses", "Running", "Park", "'.$j.':00", "2017-12-'.$i.'")';
    if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
    $sql = 'INSERT INTO `Activity` (`Username`, `Event`, `Location`, `Time`, `Date`) VALUES
        ("mommamoses", "Dinner", "Home", "'.$i.':00", "2017-12-'.$j.'")';
    if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
}

$j=17;
for ($i=1; $i<15; $i++) {
    $j--;
    $sql = 'INSERT INTO `Activity` (`Username`, `Event`, `Location`, `Time`, `Date`) VALUES
        ("kmp", "Lecture", "SN014", "'.$j.':00", "2017-12-'.$i.'")';
    if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
    $sql = 'INSERT INTO `Activity` (`Username`, `Event`, `Location`, `Time`, `Date`) VALUES
        ("kmp", "Research", "SN154", "'.$i.':00", "2017-12-'.$i.'")';
    if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
    $sql = 'INSERT INTO `Activity` (`Username`, `Event`, `Location`, `Time`, `Date`) VALUES
        ("kmp", "Free Time", "Home", "'.$i.':00", "2017-12-'.$j.'")';
    if ($conn->query($sql) !== TRUE) {echo "Error: " . $sql . "<br>" . $conn->error;}
}

?>