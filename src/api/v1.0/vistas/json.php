<?php
http_response_code($http_code);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Content-type: application/json; charset=utf-8");
 echo json_encode($salida, JSON_PRETTY_PRINT);