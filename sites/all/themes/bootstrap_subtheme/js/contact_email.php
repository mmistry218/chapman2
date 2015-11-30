<?php


$name = $_POST['name'];
echo " The Name ".$name;
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'dermaine@hotmail.com'; // put your email
$email_subject = "Contact form submitted by:  $name";
$email_body = "You have received a new message. \n\n".
				  " Here are the details:\n \nName: $name \n ".
				  "Email: $email_address\n Message \n $message";


$from = "book@cqhapman.com";
$from_name = "The Stuff of Dreams";

$account="dermaine@hotmail.com";
$password="GTech2014";

include("phpmailer/class.phpmailer.php");
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = "smtp.live.com";
$mail->SMTPAuth= true;
$mail->Port = 587;
$mail->Username= $account;
$mail->Password= $password;
$mail->SMTPSecure = 'tls';
$mail->From = $from;
$mail->FromName= $from_name;
$mail->isHTML(true);
$mail->Subject = $email_subject;
$mail->Body = $email_body;
$mail->addAddress($to);

if(!$mail->Send())
{
    echo 'Message was not sent.';
    echo 'Mailer error: ' . $mail->ErrorInfo;
    return false;
}
else
{
    echo 'Message has been sent.';
    return true;
}
?>

<!--
if (mail($to,$email_subject,$email_body,$headers)){	
	return true;
}
else { 	
	return false;
}
			
?>
-->