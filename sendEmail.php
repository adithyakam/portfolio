<?php

// Replace this with your own email address
$siteOwnersEmail = 'adithyadragon@gmail.com';




    $name = trim(stripslashes($_POST['name']));
    $email = trim(stripslashes($_POST['email']));
    $contact_message = trim(stripslashes($_POST['message']));
    $subject = trim(stripslashes($_POST['contactSubject']));


    // Set Message
    $message .= "Email from: " . $name . "<br />";
    $message .= "Email address: " . $email . "<br />";
    $message .= "Message: <br />";
    $message .= $contact_message;
    $message .= "<br /> ----- <br /> This email was sent from your site's contact form. <br />";

    // Set From: header
    $from =  $name . " <" . $email . ">";

    // Email Headers
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0". "\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1 \r\n";
    mail($siteOwnersEmail, $subject, $message, $headers);

    header("location:index.html");

?>