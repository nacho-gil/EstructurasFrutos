<?php
// Here we get all the information from the fields sent over by the form.
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = 'info@estructurasfrutos.com';
$subject = 'Mensaje desde estructurasfrutos.com';
$message = 'FROM: '.$name.' EMAIL: '.$email.' PHONE: '.$phone.' MESSAGE: '.$message;
$headers = 'From: '. $email. "\r\n";


mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Thanks, your email was sent!"; // success message

?>