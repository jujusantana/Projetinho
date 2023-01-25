// Início Brenda / Poliane

    // Start
   var start_serasa, start_serasaImg;

   // Carro
    var car_serasa, car_serasaImg;
   
    // Rua vertical
    var rua_serasa, rua_serasaImg;
 
    // Grama
    var gramadodireto, gramadoesquerdo;
    var gramadodiretoImg, gramadoesquerdoImg;


    // Grama
    var grama, gramaImg;
    var grama1, grama1Img;


   
   // Finish Win
   var finish_win_serasa, finish_win_serasaImg;


   // Finish
   var finish_serasa, finish_serasaImg;


   // Largada
   var largada_serasa, largada_serasaImg;


   // Arvore
   var arvore, arvore2, arvore3;
   var arvoreImg, arvore2Img, arvore3Img;
   
   var rua_serasaInvisivel


   var grupoArvore;

   var estadoJogo = "play";

   

   //carregar todos os arquivos
function preload()
{
    car_serasaImg = loadImage("img/car_serasa.png");


    //Carrega imagem início do jogo
    inicioDeJogoImg = loadImage("img/start_serasa.png");


    //Carrega imagens arvores
    arvoreImg = loadImage("img/arvore.png");
    arvore2Img = loadImage("img/arvore2.png");
    arvore3Img = loadImage("img/arvore3.png");


    //Carrega imagem fim do jogo
    fimDeJogoImg = loadImage("img/finish_serasa.png");
    fimDeJogoImg = loadImage("img/finish_win_serasa.png");
    fimDeJogoImg = loadImage("img/largada_serasa.png");
     
    //carrega imagem rua
    rua_serasaImg = loadImage("img/rua_serasa.png");
}


//função que inicializa o código
function setup()
{
    // inicio do jogo
    start_serasaImg = loadImage("img/start_serasa.png");


    //Carrega imagem início do jogo
    start_serasaImg = loadImage("img/start_serasa.png");


    //cria tela de fundo
    createCanvas(600,200);
    //configurações do carro
    car_serasa = createSprite(100,100,20,20);
    car_serasa.addImage("car_serasa", car_serasaImg);
    //altera o tamanho
    car_serasa.scale = 0.5;
    //alterar um posição esepecífica
    car_serasa.x = 50;


    //configurações a rua
    rua_serasa = createSprite(100,140,150,20);
    rua_serasa.addImage("rua_serasa", rua_serasaImg);
    rua_serasaInvisivel = createSprite(80, 155, 100, 20);
    rua_serasaInvisivel.visible = false;


    //add imagem fim de jogo
    finish_serasa = createSprite(300,100,20,20);
    finish_serasa.addImage(finish_serasaImg);
    finish_serasa.scale = 0.2;
    finish_serasa.visible = false; //para a imagem não aparecer no incio do jogo

    //criando grupos
    grupoArvore = new Group();
}

function draw()
{
if (estadoJogo==="play") 
{
    rua_serasa.velocityY = -2;
    if(rua_serasa.y<0)
    {
        rua_serasa.y = rua_serasa.width/2;
    }
    if(keyDown("space"))
    {
        car_serasa.velocityX = -10;
    }  
    //cria os elementos na tela (sprites)
    car_serasa.velocityX = car_serasa.velocityX + 0.8;
    car_serasa.collide(rua_serasaInvisivel)

    //criaGrama();
    criaArvore();  

    if(grupoArvore.isTouching(car_serasa))
    {
        estadoJogo = "end"
        
    }
} 
    
else if (estadoJogo==="end")
{
    
        rua_serasa.velocityY = 0;
        car_serasa.velocityX = 0;

        grupoArvore.setVelocityXEach(0);

        fimDeJogo.visible = true


        fill("black");
        text("Pressione espaço para reiniciar.",220,170);
        if(keyDown("space"))
        {
            estadoJogo = "play";
            grupoArvore.destroyEach();
            //grupoNuvem.destroyEach();
            fimDeJogo.visible = false
        }

}


    drawSprites();
}

function arvore()
{

    if(frameCount % 50 ===0)
    {
    var arvore = createSprite(700,130,40,10);
    arvore.velocityY = -2;
    
    var num = Math.round(random(1,3));

    switch(num){
        case 1: arvore.addImage(arvoreImg);
        break;
        case 2: arvore.addImage(arvore2Img);
        break
        case 3: arvore.addImage(arvore3Img);
        break
        default: break;
    }
    
    
    arvore.scale = 0.05;
    arvore.lifetime = 500;

    grupoArvore.add(arvore);

    }

}
