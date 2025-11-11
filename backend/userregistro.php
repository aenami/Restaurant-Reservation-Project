<?php
    session_start();
    require_once '../config/parameters.php';
    require_once '../backend/users.php';
    

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // 1) Recoger y limpiar datos
        $nombre   = trim($_POST['name'] ?? '');
        $email    = trim($_POST['email'] ?? '');
        $phone    = trim($_POST['phone'] ?? '');
        $cedula   = trim($_POST['cedula'] ?? '');
        $password = trim($_POST['password'] ?? '');

        // 2) Validación básica
        if (!$nombre || !$email || !$phone || !$cedula || !$password) {
            $_SESSION['mensaje'] = [
                "tipo" => "error",
                "texto" => "Todos los campos son obligatorios."
            ];
            header("Location: ../register.php");
            exit;
        }


        // 3) Instanciar usuario
        $usuario = new Usuario();

        // 4) Verificar si la cédula ya existe
        $db = Connection::connect();

        $sql = "SELECT cedula_cliente FROM clientes WHERE cedula_cliente = ?";
        $stmt = $db->prepare($sql);
        $stmt->bind_param("s", $cedula);
        $stmt->execute();
        $res = $stmt->get_result();

        if ($res && $res->num_rows > 0) {
            // Usuario YA existe
            $_SESSION['mensaje'] = [
                "tipo" => "error",
                "texto" => "La cédula ya está registrada."
            ];
            header("Location: ../register.php");
            exit;
        }

        // 5) Registrar
        $resultado = $usuario->registrar();

        if ($resultado) {
            $_SESSION['mensaje'] = [
                "tipo" => "success",
                "texto" => "Usuario creado con éxito"
            ];
            header("Location: ../logeo.php");
            exit;
        } else {
            $_SESSION['mensaje'] = [
                "tipo" => "error",
                "texto" => "Error al crear usuario. Intenta nuevamente."
            ];
            header("Location: ../register.php");
            exit;
        }
    } else {
        // Acceso indebido por GET
        $_SESSION['mensaje'] = "Acceso no permitido.";
        header("Location: ../register.php");
        exit;
    }

?>

