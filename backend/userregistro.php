<?php
    require_once 'config/conexion.php';

    class Usuario{
        private $db;

        public function __construct(){
            $this->db = Connection::connect();
        }

        public function registrarse($limit=4){
            $result = false;
            if(isset($_POST)){
                $nombre = $_POST['name'];
                $email = $_POST['email'];
                $phone = $_POST['phone'];
                $ID = $_POST['cedula'];
                $password = $_POST['password'];
                try{
                    // Intento de conexion a la base de datos
                    $sql = "INSERT INTO clientes VALUES('{$id}', '{$email}', '{$phone}', '{$ID}', '{$password}', 2)";
                    $result = $sql;
                }catch (Exception $er){
                    echo 'Error en la conexion a la base de datos...';
                }
            }
        }
    }
?>