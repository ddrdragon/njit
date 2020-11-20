<?php
session_start();
if(isset($_SESSION['user'])) {
    unset($_SESSION['user']);
}

echo "<h1> log in </h1><br>";
// Connect to sql
$conn = mysqli_connect('sql1.njit.edu', 'xd59', '975914846Dxt!', 'xd59');

// Get info from html
$username = $_POST['username'];
$password = hash("sha512", $_POST['password']);

// check database
$sql = "select * from myblog where username='$username'";
$query = mysqli_query($conn, $sql);

if(mysqli_num_rows($query) > 0) {
        $row = mysqli_fetch_assoc($query);
        
        if($row['password'] == $password) { // log in successful
            $_SESSION['user'] = $row['username'];
            header("Location: ../post/postList_page.php");
        }
        else {
                echo "password not right.<br>";
        }    
}
else {
        echo "no such user.<br>";        
}

?>

<a href="login.html">back</a>

