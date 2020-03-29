<?php

// // Replace this with your own email address

if(isset($_POST['submit'])){
    $siteOwnersEmail = 'adithyadragon@gmail.com';

    $name = ($_POST['name']);
    $email = ($_POST['email']));
    $contact_message = ($_POST['message']);
    $subject = ($_POST['contactSubject']);

    $message .= "Email from: " . $name . "<br />";
    $message .= "Email address: " . $email . "<br />";
    $message .= "Message: <br />";
    $message .= $contact_message;
    $message .= "<br /> ----- <br /> This email was sent from your site's contact form. <br />";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0". "\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1 \r\n";
    mail($siteOwnersEmail, $subject, $message, $headers);

    header("location:index.html");


}


    //  $name = trim(stripslashes($_POST['name']));
    //  $email = trim(stripslashes($_POST['email']));
    //  $contact_message = trim(stripslashes($_POST['message']));
    //  $subject = trim(stripslashes($_POST['contactSubject']));


//     // Set Message
   
//     // Set From: header
    //  $from =  $name . " <" . $email . ">";

     // Email Headers
    


        // EDIT THE 2 LINES BELOW AS REQUIRED
    

?>