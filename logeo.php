<?php
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    require_once 'config/parameters.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Cava & Corte</title>
    <link rel="stylesheet" href="<?=base_url?>assets/css/estilos_login.css">
</head>

<body>
    <main class="main">
        <div class="textInfo">
            <img src="<?=base_url?>assets/imagenes/Imagen_Logo.png" alt="Logo Cava & Corte">
            <div class="textInfo-titulo">
                <h1>Cava & Corte</h1>
                <h2>| Login</h2>
            </div>
            <span class="span1">Donde tus cenas se convierten tambien en una experiencia.</span>
            <span class="span2">Logeate y reserva un espacio!</span>
        </div>


        <form action="backend/loginuser.php" class="loginForm" method="POST" name="loginForm">
            <div class="form-section">
                <label for="inputCedula">Cedula</label>
                <input type="text" name="cedula" id="inputCedula" placeholder="usuario@cuenta.com" require>
            </div>
            <div class="form-section">
                <label for="inputPassword">Password</label>
                <input type="text" name="password" id="inputPassword" placeholder="******" require>
            </div>
            <div class="form-remindPassword">
                <span><a href="#" class="linkNewPassword">Olvidates tu contraseña?</a></span>
            </div>
            <input type="submit" value="Continuar" class="btn">
            <?php if(isset($_SESSION['mensaje'])): ?>
                <div class="alert <?= $_SESSION['mensaje']['tipo'] ?>">
                    <?= $_SESSION['mensaje']['texto'] ?>
                </div>
                <?php unset($_SESSION['mensaje']); ?>
            <?php endif; ?>
            <span>━━━━ or ━━━━</span>
            <span>Eres nuevo? <a href="<?=base_url?>/register.php">Create una cuenta</a></span>
        </form>

    </main>
</body>

</html>