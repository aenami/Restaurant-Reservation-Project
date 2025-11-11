<?php
    require_once '../config/conexion.php';

    class Usuario {
        private $db;

        public function __construct(){
            $this->db = Connection::connect();
        }

        /** REGISTRO */
        public function registrar(){

            $nombre   = $_POST['name'] ?? null;
            $email    = $_POST['email'] ?? null;
            $phone    = $_POST['phone'] ?? null;
            $ID       = $_POST['cedula'] ?? null;  
            $password = $_POST['password'] ?? null;

            if(!$nombre || !$email || !$phone || !$ID || !$password){
                echo "Falta información";
                return false;
            }

            $hash = password_hash($password, PASSWORD_DEFAULT);

            try{
                $sql = "INSERT INTO clientes
                (nombre_cliente, email_cliente, telefono_cliente, cedula_cliente, contraseña_cliente, id_rol_cliente)
                VALUES (?, ?, ?, ?, ?, 2)";

                $stmt = $this->db->prepare($sql);
                $stmt->bind_param("sssss", $nombre, $email, $phone, $ID, $hash);

                if(!$stmt->execute()){
                    echo "Error MySQL → " . $this->db->error;
                    return false;
                }

                return true;

            } catch (Exception $er){
                echo "Excepción → " . $er->getMessage();
                return false;
            }
        }

    // LOGEOO
    public function login() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') return false;

        $cedula = $_POST['cedula'] ?? null;
        $clave  = $_POST['password'] ?? null;

        if (!$cedula || !$clave) return false;

        try{
            $sql = "SELECT * FROM clientes WHERE cedula_cliente = ?";
            $stmt = $this->db->prepare($sql);
            $stmt->bind_param("s", $cedula);
            $stmt->execute();

            $resultado = $stmt->get_result();

            if(!$resultado || $resultado->num_rows === 0){
                return "no-encontrado";
            }

            $datos = $resultado->fetch_object();

            if(!password_verify($clave, $datos->contraseña_cliente)){
                return "incorrecto";
            }

            $_SESSION['user'] = $datos;
            return true;

        }catch(Exception $er){
            return false;
        }

        return false;
    }
}
