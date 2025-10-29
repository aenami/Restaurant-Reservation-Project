<?php
    require_once 'config/conexion.php';

    class Usuario{
        private $db;

        public function __construct(){
            $this->db = Connection::connect();
        }

        public function registrar(){
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
            return $result;
        }

        public function login(){
            $result =  false;
            if(isset($_POST)){
                $id = $_POST('email')
                $clave = $_POST('password')
                try{
                    //Recuperando info de la bd para verificar el logeo
                    $sql = "SELECT email_cliente, contraseña_cliente FROM clientes WHERE cedula_cliente ='{$id}' &&  ";

                    // Realizando la instruccion por medio de la variable que se conecto a la bd
                    $data = $this->db->query($sql);
                    if($data && $data->num_rows == 1){
                        $datos = $data->fetch_object(); // Convierto el registro en un objeto
                        // Verificando que el usuario haya ingresado la clave correcta
                        if($datos->contraseña_cliente == $clave){
                            $result = $datos;
                            $_SESSION['user'] = $datos->nombre_cliente
                        }
                    }

                
                }catch(Exception $er){
                    return $er->getMessage();
                }
            }
            return $result;
        }
    }
?>