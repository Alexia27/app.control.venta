<?php
require_once'../includes/conexion.php';
define('API_VERSION','v1.0');
//*************************** 1.‐Parsearla URL... ***************************//
// 1.1.‐Obtenemos la parte del pathque va después de la versión de la  API
$uri= explode(API_VERSION.'/', parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH))[1];
// 1.2.‐Lo covertimos en un array ...
$uri_array=explode('/',$uri);
//*************************** 2.‐Obtener el recurso solicitado... ***************************//
 $recurso=array_shift($uri_array);
//*************************** 3.‐Obtener el tipo de operación solicitada... ***************************//
$operacion=strtolower($_SERVER['REQUEST_METHOD']);
//----------------------------------------------------------------------------------------------------------------//
$vista= 'json';
$salida=array();
$http_code= 404;
//---------------INCLUDES-------------------------
include "modelos/$operacion-$recurso.php";
include "vistas/$vista.php";

die();
//-------estamos conectandonos al servidor sql---------------------------
$serverNombre = "localhost";
$userNombre = "root";
$password = "";
$dbNombre = "control_ventas";
// Crear la conexión
$conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
// Chequear la conexión
if (!$conn) {
    die("Error: " . mysqli_connect_error());
}

$sql = "SELECT * FROM ventas";
$result = mysqli_query($conn, $sql);
$output = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
                //echo $row["fecha"].'<br>';
                array_push($output, $row);
    }
}
else{
    echo "0 resultados";
}
header('Conter-type: aplication/json');
echo json_encode($output, JSON_PRETTY_PRINT);

