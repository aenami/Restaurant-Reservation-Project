<?php
    require_once 'config/conexion.php';

    class Platillo{
        private $db;

        public function __construct(){
            $this->db = Connection::connect();
        }

        public function getPlatillos($limit = 7){
            $result = false;
            $sql = "SELECT id_platillo, nombre_platillo, descripcion_platillo, precio_platillo, id_tipo_platillo, ruta_imagen
                    FROM platillos, imagenes_platillo WHERE id_platillo = id_platillo_imagen
                    Group By id_platillo Order By RAND() limit $limit";
            $datos = $this->db->query($sql);
            if($datos && $datos->num_rows > 0)
                $result = $datos;
            return $result;
        }
    }

?>