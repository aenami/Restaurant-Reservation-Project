<?php
    require_once __DIR__ . '/../config/parameters.php';
    require_once __DIR__ . '/../backend/platillos.php';
    $platillo = new Platillo();
    $platillos = $platillo->getPlatillos($categoria ?? null);
?>

<!-- Catalogo de platillos -->
<?php while($dato = $platillos->fetch_object()):?>
    <div class="menu-platillo">
        <div class="menu-platillo-conjunto">
            <img src="<?=base_url?>assets/imagenes/menu/platillos/<?=$dato->ruta_imagen ?>" alt="platillo1"
                class="platillo-img">
            <div class="menu-platillo-info">
                <span class="platillo-title"><?=$dato->nombre_platillo?></span>
                <span class="platillo-ingredients"><?=$dato->descripcion_platillo?></span>
            </div>
        </div>
        <span class="platillo-precio">$<?=$dato->precio_platillo?></span>
    </div>
<?php endwhile; ?>

