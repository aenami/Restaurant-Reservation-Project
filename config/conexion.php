<?php
    //Configuracion por default
    header('Content-Type: text/html; charset=UTF-8'); //Para que entienda Ñs y tildes
    date_default_timezone_set('America/Bogota'); //Zona horaria

    //Clase para la conexion
    class Connection{
        static public function connect(){
            try{
                $db = [
                    'server' => 'localhost',
                    'user' => 'root',
                    'pass' => '',
                    'db' => 'restaurante',
                    'port' => 3307,
                ];
                $conn = new mysqli($db['server'], $db['user'], $db['pass'], $db['db'], $db['port']);

            }catch(Exception $er){
                echo 'Error: '.$er->getMessage();
                exit();
            }
            return $conn;
        }
    }
?>