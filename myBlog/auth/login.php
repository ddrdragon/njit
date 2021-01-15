<?php require '../inc/conn.php' ?>
<?php
$name = $_POST['n'];
$pass = hash("sha512", $_POST['p']);

$sql = "select * from myblog where username='$name'";
$query = mysqli_query($conn, $sql);

if(mysqli_num_rows($query) > 0) {
    $row = mysqli_fetch_assoc($query);
        
    if($row['password'] == $pass) { // log in successful
        echo "true";
    }
    else {
        echo "false";
    }    
}
else {
    echo "false";        
}



?>

