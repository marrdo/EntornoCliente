<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="public/js/code.js"></script>
    <title>Document</title>
</head>
<body>
    <form action="php/responderGritando.php" method="GET">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>
    
        <label for="texto1">Texto 1:</label>
        <input type="text" id="texto1" name="texto1"><br><br>
    
        <label for="texto2">Texto 2:</label>
        <input type="text" id="texto2" name="texto2"><br><br>
    
        <input type="button" name="enviar" value="Enviar">
    </form>
    <div class="resul"></div>
</body>
</html>