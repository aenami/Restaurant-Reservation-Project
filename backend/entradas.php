<?php
    require_once 'config/parameters.php';
    require_once 'backend/platillos.php';
    $platillo = new Platillo();
    $platillos = $platillo->getPlatillos($categoria ?? null);
?>

<!-- Se muestran las opciones de platillos de entrada -->
<?php while($dato = $platillos->fetch_object()):?>
    <option value="#" class="listaOpcion"><?=$dato->nombre_platillo?></option>
<?php endwhile; ?>