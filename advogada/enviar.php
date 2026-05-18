<?php
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

// Transforma um JSON recebido em array = estrutura de dados
$dados = json_decode(file_get_contents('php://input'), true);

if (!$dados) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Dados inválidos']);
    exit;
}

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'antoniocaoliver@gmail.com';                     //SMTP username
    $mail->Password   = 'hvfx gkgn pbjj rsov';                               //SMTP password
    $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to

    //Recipients
    $mail->setFrom('antoniocaoliver@gmail.com', 'Site Natália Dourado'); // Melhor usar o email do servidor para evitar SPAM
    $mail->addAddress('antoniocoliver@usp.br', 'ACOM');     //Add a recipient
    $mail->addReplyTo($dados['email'], $dados['nome']);
    $mail->addCC('antoniocaoliver@gmail.com');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Novo contato do site - Natália Dourado';
    $mail->Body    = '<h3>Nova mensagem recebida:</h3>
                      <p><b>Nome:</b> '. $dados['nome'] . '</p>
                      <p><b>E-mail:</b> '. $dados['email'].'</p>
                      <p><b>WhatsApp:</b> '.$dados['telefone'].'</p>
                      <p><b>Mensagem:</b><br>'. nl2br($dados['mensagem']) . '</p>';
    $mail->AltBody = "Nome: {$dados['nome']}\nE-mail: {$dados['email']}\nWhatsApp: {$dados['telefone']}\nMensagem: {$dados['mensagem']}";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso']);    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro ao enviar mensagem: ' . $mail->ErrorInfo]);
}
