<?php
// Here we get all the information from the fields sent over by the form.
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = 'info@estructurasfrutos.com';
$subject = 'Mensaje desde estructurasfrutos.com';
$message = "DE: ".$name."\r\nEMAIL: ".$email."\r\nTELÉFONO: ".$phone."\r\nMENSAJE: ".$message;
$headers = 'From: '. $email. "\r\nContent-Type: text/plain; charset=UTF-8\r\n";

if($name && $email && $phone && $message) {
	mail($to, $subject, $message, $headers); //This method sends the mail.
	echo "Gracias por contactar, tu email ha sido enviado."; // success message
} else {
	echo "Tu email no ha podido ser enviado. Inténtalo de nuevo más tarde. Gracias.";
}

?>