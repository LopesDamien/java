/* 9.1 function myfunction()
{
    var modif = document.getElementsByName("MaDivNum1");
    modif.forEach(function(div)
    {
        div.innerHTML = "Je Suis moi meme ";
    });
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <div name="MaDivNum1">Coucouu</div>
  <div name="MaDivNum1">Coucouu</div>
  <div name="MaDivNum1">Coucouu</div>

</body>
<script src='titi.js'></script>
<script>myfunction();</script>
</html>
*/



/* 9.2
function myfunction()
{
    var modif = document.getElementsByTagName("Div");
    let i;
    for(i = 0 ; i< modif.length; i++ ){
        if(modif[i] instanceof HTMLElement){
                modif[i].innerHTML = "yo";
        }
    }
}

</head>
<body>
  <div class="MaDivNum1">Coucouu</div>
  <div class="MaDivNum1">Coucouu</div>
  <div class="MaDivNum1">Coucouu</div>
<div onclick="myfunction()">je suis un bouton </div>

</body>
<script src='titi.js'></script>
<script>myfunction();</script>
</html>
*/


/* 9.3
function myfunction()
{
    var modif = document.getElementsByClassName("MaDivNum1");
    let i;
    for(i = 0 ; i< modif.length; i++ ){
        if(modif[i] instanceof HTMLElement){
                modif[i].innerHTML = "yo";
        }
    }
}
</head>
<body>
  <div class="MaDivNum1">Coucouu</div>
  <div class="MaDivNum1">Coucouu</div>
  <div class="MaDivNum1">Coucouu</div>
<div onclick="myfunction()">je suis un bouton </div>

</body>
<script src='titi.js'></script>
<script>myfunction();</script>
</html>
*/
