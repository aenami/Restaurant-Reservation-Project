<?php
    session_start()
    require_once 'config/parameter.php';
    require_once 'backend/usuario.php';
    $usuario = new Usuario(); # Crea un objeto de la clase Usuario
    $datos = $usuario->login(); # Llamando el metodo de logeo de usuario
    # Verificando que se nos haya devuelto la informacion
    if($datos && is_object($datos)){
        $_SESSION['msgok'] = "Hola ".$datos->nombre_cliente;
        require_once 'views/success.php';
    }else{
        $_SESSION['msgerror'] = "Error en los datos proporcionados!";
        require_once 'views/error.php';
    }
?>