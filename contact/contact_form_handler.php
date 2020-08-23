<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];


    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";



    $email_to = "xenoglossipaideia@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    mail($email_to, $email_subject, $email_body, $headers);
    // mail($t1, $email_subject, $email_body, $headers);

    header("Location: contact.html");

?>
