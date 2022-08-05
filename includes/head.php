<?php 

    session_start();

    $currentPage = basename($_SERVER["PHP_SELF"]);     

?>

<!DOCTYPE html>
<html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="author" content="Magda Pimentel">
        <meta name="robots" content="noindex, nofollow">    
        <?php if($currentPage == "index.php") : ?>
            <meta http-equiv="refresh" content="0; URL='home.php'" />
        <?php else : ?> 
        <?php endif; ?>    
        <?php include 'includes/seo.php';?>    
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon.svg">       
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>

    <body>