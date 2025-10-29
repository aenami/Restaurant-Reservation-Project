<?php
    require_once 'config/conexion.php';

    class Platillo{
        private $db;

        public function __construct(){
            $this->db = Connection::connect();
        }

        public function getPlatillos($categoria = null, $limit = 7){
            $result = false;

            $categoria = intval($categoria);
            $limit = intval($limit);

            $sql = "
                SELECT p.*, i.*
                FROM platillos p
                JOIN imagenes_platillo i
                    ON p.id_platillo = i.id_platillo_imagen
            ";

            if ($categoria !== 0) {
                $sql .= " WHERE p.id_tipo_platillo = $categoria";
            }

            $sql .= "
                GROUP BY p.id_platillo
                ORDER BY RAND()
                LIMIT $limit
            ";

            $datos = $this->db->query($sql);

            if(!$datos){
                echo "Error SQL: " . $this->db->error;
            }

            if($datos && $datos->num_rows > 0)
                return $datos;

            return false;
        }
    }
?>