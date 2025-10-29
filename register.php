<?php
    require_once 'config/parameters.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro | Cava & Corte</title>
    <link rel="stylesheet" href="<?=base_url?>assets/css/estilos_register.css">
</head>

<body>
    <section class="left-container">
        <form action="backend/userregistro.php" name="register_form" method="post" class="form">
            <div class="form-title">
                <h1>Crea una cuenta</h1>
                <span>Crea una cuenta y disfruta de beneficios exclusivos!</span>
            </div>
            <div class="form_group">
                <label for="names" class="form_group_label">Nombres:</label>
                <input type="text" name="name" maxlength="30" placeholder="Julian Andres" 
                class="input-text" required>
            </div>
            <div class="form_group">
                <label for="email" class="form_group_label">Email:</label>
                <input type="email" name="email" maxlength="50" placeholder="juliancastaneda@gmail.com" 
                class="input-text" required>
            </div>
            <div class="form_group">
                <label for="phone"class="form_group_label">Telefono:</label>
                <input type="tel" name="phone" maxlength="15" placeholder="3147338067" class="input-text"
                required>
            </div>
            <div class="form_group">
                <label for="ID" class="form_group_label">Cedula:</label>
                <input type="number" name="ID" maxlength="15" placeholder="1059265538" class="input-text"
                required>
            </div>
            <div class="form_group">
                <label for="password" class="form_group_label">Contraseña:</label>
                <input type="password" name="password" maxlength="40" placeholder="******" class="input-text" 
                required>
            </div>
            <div class="form_group">
                <input type="submit" value="Crear cuenta" class="input-button"
                onclick="location.href='<?=base_url?>index.php'">
            </div>
        </form>
        <div class="left-container-bottom">
            <span>¿Ya tienes una cuenta? <a href="<?=base_url?>views/logeo.php">Inicia sesion aqui</a></span>
        </div>
    </section>

    <section class="right_container">
        <div class="right_container_logo">
            <img src="<?=base_url?>assets/imagenes/Imagen_Logo.png" alt="Logo Cava & Corte">
        </div>
        <div class="right_container_img">
            <img src="<?=base_url?>assets/imagenes/register/restaurante2.jpg" alt="Imagen restaurante">
        </div>
    </section>

</body>

</html>