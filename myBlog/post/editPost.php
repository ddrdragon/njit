<?php
session_start();
if(!isset($_SESSION['user'])) {
    header("Location: ../index.html");
}
$id = $_POST['id'];
$conn = mysqli_connect('sql1.njit.edu', 'xd59', '975914846Dxt!', 'xd59');

$sql = "";
$edit = mysqli_query($conn, $sql);


if($edit) {
    header("Location: allMyPosts.php");
}
else {
    echo "edit not successful.<br>";
    echo "<a href='allMyPosts.php'>back</a>";
}
?>