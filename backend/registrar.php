<?php
    require_once 'backend/userregistro.php';
    $usuario = new Usuario();
    $datos = $usuario->registrar();
    echo $datos;

?>