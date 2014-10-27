<?
    $title = $_POST['title-tasks'];
    $date = $_POST['date-tasks'];
    $desc = $_POST['desc-tasks'];
    $pri = $_POST['priority-tasks'];

    $conn = new PDO('mysql:host=mysql.hostinger.com.br;dbname=u699756447_gtask',"u699756447_gtask", "joe7895214+");

    $sql = $conn->prepare("");
?>