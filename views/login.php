<?php
    //Invocando el archivo para tener acceso al metodo de conexion
    require_once 'config/conexion.php'; 

    class Logevent{
        public function login(){
            //echo '<h3>Hola mundo</h3>';
            $db = Connection::Connect(); //Instanciacion
            $sql = 'Select * From roles'; //Instruccion sql
            $data = $db->query($sql); //Solicitud a la bd
            var_dump($data);
            die();
        }
    }
?>