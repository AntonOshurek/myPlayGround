<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "";
    $subject = "Contact form submission from " . $name;
    $headers = "From: " . "" . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_body = "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Message: " . $message . "\n";

    if (mail($to, $subject, $email_body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
        exit;
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email"]);
        exit;
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}
?>
