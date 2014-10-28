<?
    if(!empty($_POST) && $_POST['flag'] == "add"){
        $title = $_POST['title-tasks'];
        $date = $_POST['date-tasks'];
        $desc = $_POST['desc-tasks'];
        $priority = $_POST['priority-tasks'];

        //$conn = new PDO('mysql:host=mysql.hostinger.com.br;dbname=u699756447_gtask',"u699756447_gtask", "joe7895214+");

        $con2 = mysql_connect("localhost","root","");
        mysql_db_name($con2,"gtasks");
        mysql_query("insert into tasks VALUES ('$title','$date','$desc','$priority')");
        echo "Pronto";
    }else{
        echo "Deu pal ae no envio";
    }
echo "oi sou eu aqui";
