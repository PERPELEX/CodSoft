<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Set up email parameters
  $to = "hannanamir420@gmail.com.com";
  $subject = "New message from your website";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";

  // Send email
  if (mail($to, $subject, $body)) {
    echo "Message sent successfully!";
  } else {
    echo "Error sending message.";
  }
}
?>
