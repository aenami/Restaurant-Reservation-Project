<?php
    session_start();

    require_once '../config/parameters.php';
    require_once '../backend/users.php';

    // Aseguramos método POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        $_SESSION['mensaje'] = "Acceso inválido.";
        header("Location: ../logeo.php");
        exit;
    }

    // Recoger datos
    $cedula   = trim($_POST['cedula'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (!$cedula || !$password) {
        $_SESSION['mensaje'] = [
            "tipo" => "error",
            "texto" => "Todos los campos son obligatorios"
        ];
        header("Location: ../logeo.php");
        exit;
    }

    // Instanciar clase usuario
    $usuario = new Usuario();
    $result  = $usuario->login();

    if ($result === true) {
        $_SESSION['mensaje'] = [
            "tipo" => "success",
            "texto" => "Bienvenido"
        ];
        header("Location: ../views/systemReservation_client.php.");
        exit;
    } elseif ($result === "no-encontrado") {
        $_SESSION['mensaje'] = [
            "tipo" => "error",
            "texto" => "La cédula no está registrada "
        ];
        header("Location: ../logeo.php");
        exit;
    } elseif ($result === "incorrecto") {
        $_SESSION['mensaje'] = [
            "tipo" => "error",
            "texto" => "Contraseña incorrecta "
        ];
        header("Location: ../logeo.php");
        exit;
    } else {
        $_SESSION['mensaje'] = [
            "tipo" => "error",
            "texto" => "Error inesperado"
        ];
        header("Location: ../logeo.php");
        exit;
    }
