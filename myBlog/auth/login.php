<?php require '../inc/conn.php' ?>

<?php
$name = $_GET['n'];
$pass = hash("sha512", $_GET['p']);

$sql = "select * from myblog where username='$name'";
$query = mysqli_query($conn, $sql);

if(mysqli_num_rows($query) > 0) {
    $row = mysqli_fetch_assoc($query);
        
    if($row['password'] == $pass) { // log in successful
        echo true;
        session_start();
        $_SESSION['user'] = $name;
        header("Location: ../page2.php");
    }
    else {
        echo false;
        echo "wrong pass";
    }
}
else {
    echo false;
    echo "no such user";
}
?>

