var ball, ball2, ball3;
var score = 0,score2 = 0,score3 = 0;
var roundEnded = false;
var wall;
var database;
var position;
var position2;
var position3;
var ballIMG, ball2IMG, ball3IMG;
var bulletred,bulletredIMG;
var bulletgreen,bulletgreenIMG;
var bulletblue,bulletblueIMG;
var explosion,explosionIMG;
var bgg,bbg,brg;
var explosionValue = 0;
var redScoreIMG,greenScoreIMG,blueScoreIMG;
var ballExists = true;
var ball2Exists = true;
var ball3Exists = true;


function preload() {
    ballIMG = loadImage("tankgreen.png");
    ball2IMG = loadImage("tankred.png");
    ball3IMG = loadImage("tankblue.png");
    bulletredIMG = loadImage("bulletred.png");
    bulletgreenIMG = loadImage("bulletgreen.png");
    bulletblueIMG = loadImage("bulletblue.png");
    explosionIMG = loadImage("explosion.png");
    explosionIMG.scale = 2;
    redScoreIMG = loadImage("redscore.png");
    greenScoreIMG = loadImage("greenscore.png");
    blueScoreIMG = loadImage("bluescore.png");
}

function setup() {
    createCanvas(700, 500);
    database = firebase.database();

    var ballsloc = database.ref("ball/position");
    ballsloc.on("value", readposition);

    var ballscore = database.ref("ball/score");
    ballscore.on("value", readscore);

    var ballsloc2 = database.ref("ball2/position2");
    ballsloc2.on("value", readposition2);

    var ballsloc3 = database.ref("ball3/position3");
    ballsloc3.on("value", readposition3);

    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";
    ball.addImage(ballIMG);
    ball.scale = 0.05;
    

    ball2 = createSprite(270, 250, 10, 10);
    ball2.shapeColor = "green";
    ball2.addImage(ball2IMG);
    ball2.scale = 0.05;

    ball3 = createSprite(290, 250, 10, 10);
    ball3.shapeColor = "blue";
    ball3.addImage(ball3IMG);
    ball3.scale = 0.05;

    // ball = green, ball2 = red, ball3 = blue
    // when anything is destroyed by bgg--> score = +1 for ball
    // when anything is destroyed by brg--> score = +1 for ball2
    // when anything is destroyed by bbg--> score = +1 for ball3

    wall = createSprite(50, 50, 100, 5);
    wall2 = createSprite(100, 100, 5, 100);
    wall3 = createSprite(50, 150, 5, 100);
    wall4 = createSprite(100, 200, 100, 5);
    wall5 = createSprite(150, 250, 200, 5);
    wall6 = createSprite(150, 100, 5, 100);
    wall7 = createSprite(150, 300, 5, 100);
    wall8 = createSprite(100, 300, 100, 5);
    wall9 = createSprite(125, 350, 50, 5);
    wall10 = createSprite(100, 400, 5, 100);
    wall11 = createSprite(50, 400, 5, 100);
    wall12 = createSprite(75, 450, 50, 5);
    wall13 = createSprite(200, 400, 100, 5);
    wall14 = createSprite(200, 325, 5, 50);
    wall15 = createSprite(200, 50, 100, 5);
    wall16 = createSprite(200, 150, 5, 100);
    wall17 = createSprite(250, 150, 100, 5);
    wall18 = createSprite(250, 75, 5, 50);
    wall19 = createSprite(300, 175, 5, 350);
    wall20 = createSprite(250, 175, 5, 50);
    wall21 = createSprite(250, 450, 200, 5);
    wall22 = createSprite(350, 450, 5, 100);
    wall23 = createSprite(400, 350, 100, 5);
    wall24 = createSprite(400, 425, 5, 50);
    wall25 = createSprite(350, 300, 100, 5);
    wall26 = createSprite(350, 150, 5, 200);
    wall27 = createSprite(400, 200, 100, 5);
    wall28 = createSprite(400, 275, 5, 50);
    wall29 = createSprite(400, 150, 100, 5);
    wall30 = createSprite(400, 50, 5, 100);
    wall31 = createSprite(450, 50, 100, 5);
    wall32 = createSprite(500, 75, 5, 50);
    wall33 = createSprite(525, 100, 50, 5);
    wall34 = createSprite(550, 25, 5, 50);
    wall35 = createSprite(600, 50, 100, 5);
    wall36 = createSprite(600, 100, 5, 100);
    wall37 = createSprite(550, 200, 100, 5);
    wall38 = createSprite(500, 250, 100, 5);
    wall39 = createSprite(550, 275, 5, 50);
    wall40 = createSprite(650, 300, 100, 5);
    wall41 = createSprite(650, 200, 5, 100);
    wall42 = createSprite(675, 100, 50, 5);
    wall43 = createSprite(675, 450, 50, 5);
    wall44 = createSprite(650, 475, 5, 50);
    wall45 = createSprite(550, 450, 100, 5);
    wall46 = createSprite(550, 400, 100, 5);
    wall47 = createSprite(450, 450, 5, 100);
    wall48 = createSprite(675, 350, 50, 5);
    wall49 = createSprite(650, 325, 5, 50);
    wall50 = createSprite(475, 300, 50, 5);


    bgg = createGroup();
    bbg = createGroup();
    brg = createGroup();
    
    edges = createEdgeSprites()

    
}

function draw() {
    background("white");
    

    if(bgg.isTouching(ball2 )){
        ball2.addImage(explosionIMG);
        bgg.destroyEach();
        explosionValue += 1;
        ball2.lifetime = 50;
       ball2Exists = false;
    }
    if(bgg.isTouching(ball3)){
        ball3.addImage(explosionIMG);
        bgg.destroyEach();
        ball3.lifetime = 50;
        ball3Exists = false;
    }

    if(bbg.isTouching(ball2 )){
        ball2.addImage(explosionIMG);
        bbg.destroyEach();
        ball2.lifetime = 50;
        ball2Exists = false;
    }
   
    if(bbg.isTouching(ball)){
        ball.addImage(explosionIMG);
        bbg.destroyEach();
        ball.lifetime = 50;
        ballExists = false;
    }

    if(brg.isTouching(ball3)){
        ball3.addImage(explosionIMG);
        brg.destroyEach();
        ball3.lifetime = 50;
        ball3Exists = false;
    }
    if(brg.isTouching(ball)){
        ball.addImage(explosionIMG);
        brg.destroyEach();
        ball.lifetime = 50;
        ballExists = false;
    }


    if (keyDown(LEFT_ARROW)) {
        changePosition(-4, 0)
        ball.rotation = -90;
    } else if (keyDown(RIGHT_ARROW)) {
        changePosition(4, 0)
        ball.rotation = 90;
    } else if (keyDown(UP_ARROW)) {
        changePosition(0, -4)
        ball.rotation = 0;
    } else if (keyDown(DOWN_ARROW)) {
        changePosition(0, 4)
        ball.rotation = 180;
    }

    if(keyDown("space") && ballExists === true){
        bulletgreen = createSprite(ball.x,ball.y,10,10);
        bulletgreen.addImage(bulletgreenIMG);   
        bulletgreen.scale = 0.1;
        if(ball.rotation === -90){
            bulletgreen.velocityX = -5;
            bulletgreen.rotation = 0;
        } else if(ball.rotation === 90){
            bulletgreen.velocityX = 5;
            bulletgreen.rotation = -180
        } else if(ball.rotation === 0){
            bulletgreen.velocityY = -5;
            bulletgreen.rotation = 90
        } else {
            bulletgreen.velocityY = 5;
            bulletgreen.rotation = -90;
        }
        bgg.add(bulletgreen);
    }


    if (keyDown("S")) {
        changePosition2(-4, 0);
        ball2.rotation = -90;
    } else if (keyDown("F")) {
        changePosition2(4, 0);
        ball2.rotation = 90;
    } else if (keyDown("E")) {
        changePosition2(0, -4);
        ball2.rotation = 0;
    } else if (keyDown("D")) {
        changePosition2(0, 4);
        ball2.rotation = 180;
    }

    if(keyDown("Q") && ball2Exists === true){
        bulletred = createSprite(ball2.x,ball2.y,10,10);
        bulletred.addImage(bulletredIMG);
        bulletred.scale = 0.1;
        
        if(ball2.rotation == -90){
            bulletred.velocityX = -5;
            bulletred.rotation = 0;
        } else if(ball2.rotation === 90){
            bulletred.velocityX = 5;
            bulletred.rotation = -180;    
        } else if(ball2.rotation === 0){
            bulletred.velocityY = -5;
            bulletred.rotation = 90;
        } else {
            bulletred.velocityY = 5;
            bulletred.rotation = -90;
        }
        brg.add(bulletred);
    }

    if (keyDown("J")) {
        changePosition3(-4, 0);
        ball3.rotation = -90;
    } else if (keyDown("L")) {
        changePosition3(4, 0);
        ball3.rotation = 90;
    } else if (keyDown("I")) {
        changePosition3(0, -4);
        ball3.rotation = 0;
    } else if (keyDown("K")) {
        changePosition3(0, 4);
        ball3.rotation = 180;
    }

    if(keyDown("Z") && ball3Exists === true){
        bulletblue = createSprite(ball3.x,ball3.y,10,10);
        
        bulletblue.addImage(bulletblueIMG);
        bulletblue.scale = 0.1;
        bbg.setLifetimeEach(200);
        if(ball3.rotation === -90){
            bulletblue.velocityX = -5;
            bulletblue.rotation = 0;
        } else if(ball3.rotation === 90){
            bulletblue.velocityX = 5;
            bulletblue.rotation = -180
        } else if(ball3.rotation === 0){
            bulletblue.velocityY = -5;
            bulletblue.rotation = 90
        } else {
            bulletblue.velocityY = 5;
            bulletblue.rotation = -90;
        }
        bbg.add(bulletblue);
    }
    
    // ball

    ball.collide(wall);
    ball.collide(wall2);
    ball.collide(wall3);
    ball.collide(wall4);
    ball.collide(wall5);
    ball.collide(wall6);
    ball.collide(wall7);
    ball.collide(wall8);
    ball.collide(wall9);
    ball.collide(wall10);
    ball.collide(wall11);
    ball.collide(wall12);
    ball.collide(wall13);
    ball.collide(wall14);
    ball.collide(wall15);
    ball.collide(wall16);
    ball.collide(wall17);
    ball.collide(wall18);
    ball.collide(wall19);
    ball.collide(wall20);
    ball.collide(wall21);
    ball.collide(wall22);
    ball.collide(wall23);
    ball.collide(wall24);
    ball.collide(wall25);
    ball.collide(wall26);
    ball.collide(wall27);
    ball.collide(wall28);
    ball.collide(wall29);
    ball.collide(wall30);
    ball.collide(wall31)
    ball.collide(wall32)
    ball.collide(wall33)
    ball.collide(wall34);
    ball.collide(wall35);
    ball.collide(wall36);
    ball.collide(wall37);
    ball.collide(wall38);
    ball.collide(wall39);
    ball.collide(wall40);
    ball.collide(wall41);
    ball.collide(wall42);
    ball.collide(wall43);
    ball.collide(wall44);
    ball.collide(wall45);
    ball.collide(wall46);
    ball.collide(wall47);
    ball.collide(wall48);
    ball.collide(wall49);
    ball.collide(wall50);

    

    if(bulletgreen !== undefined){
    bgg.setLifetimeEach(200);
    if(frameCount % 100 === 0){
        bgg.destroyEach();
    }
    bgg.bounceOff(wall);
    bgg.bounceOff(wall2);
    bgg.bounceOff(wall3);
    bgg.bounceOff(wall4);
    bgg.bounceOff(wall5);
    bgg.bounceOff(wall6);
    bgg.bounceOff(wall7);
    bgg.bounceOff(wall8);
    bgg.bounceOff(wall9);
    bgg.bounceOff(wall10);
    bgg.bounceOff(wall11);
    bgg.bounceOff(wall12);
    bgg.bounceOff(wall13);
    bgg.bounceOff(wall14);
    bgg.bounceOff(wall15);
    bgg.bounceOff(wall16);
    bgg.bounceOff(wall17);
    bgg.bounceOff(wall18);
    bgg.bounceOff(wall19);
    bgg.bounceOff(wall20);
    bgg.bounceOff(wall21);
    bgg.bounceOff(wall22);
    bgg.bounceOff(wall23);
    bgg.bounceOff(wall24);
    bgg.bounceOff(wall25);
    bgg.bounceOff(wall26);
    bgg.bounceOff(wall27);
    bgg.bounceOff(wall28);
    bgg.bounceOff(wall29);
    bgg.bounceOff(wall30);
    bgg.bounceOff(wall31)
    bgg.bounceOff(wall32)
    bgg.bounceOff(wall33)
    bgg.bounceOff(wall34);
    bgg.bounceOff(wall35);
    bgg.bounceOff(wall36);
    bgg.bounceOff(wall37);
    bgg.bounceOff(wall38);
    bgg.bounceOff(wall39);
    bgg.bounceOff(wall40);
    bgg.bounceOff(wall41);
    bgg.bounceOff(wall42);
    bgg.bounceOff(wall43);
    bgg.bounceOff(wall44);
    bgg.bounceOff(wall45);
    bgg.bounceOff(wall46);
    bgg.bounceOff(wall47);
    bgg.bounceOff(wall48);
    bgg.bounceOff(wall49);
    bgg.bounceOff(wall50);
    }

    // ball2
    if(bulletblue !== undefined){
        bbg.setLifetimeEach(200);
        if(frameCount % 100 === 0){
            bbg.destroyEach();
        }
        bbg.bounceOff(wall);
        bbg.bounceOff(wall2);
        bbg.bounceOff(wall3);
        bbg.bounceOff(wall4);
        bbg.bounceOff(wall5);
        bbg.bounceOff(wall6);
        bbg.bounceOff(wall7);
        bbg.bounceOff(wall8);
        bbg.bounceOff(wall9);
        bbg.bounceOff(wall10);
        bbg.bounceOff(wall11);
        bbg.bounceOff(wall12);
        bbg.bounceOff(wall13);
        bbg.bounceOff(wall14);
        bbg.bounceOff(wall15);
        bbg.bounceOff(wall16);
        bbg.bounceOff(wall17);
        bbg.bounceOff(wall18);
        bbg.bounceOff(wall19);
        bbg.bounceOff(wall20);
        bbg.bounceOff(wall21);
        bbg.bounceOff(wall22);
        bbg.bounceOff(wall23);
        bbg.bounceOff(wall24);
        bbg.bounceOff(wall25);
        bbg.bounceOff(wall26);
        bbg.bounceOff(wall27);
        bbg.bounceOff(wall28);
        bbg.bounceOff(wall29);
        bbg.bounceOff(wall30);
        bbg.bounceOff(wall31)
        bbg.bounceOff(wall32)
        bbg.bounceOff(wall33)
        bbg.bounceOff(wall34);
        bbg.bounceOff(wall35);
        bbg.bounceOff(wall36);
        bbg.bounceOff(wall37);
        bbg.bounceOff(wall38);
        bbg.bounceOff(wall39);
        bbg.bounceOff(wall40);
        bbg.bounceOff(wall41);
        bbg.bounceOff(wall42);
        bbg.bounceOff(wall43);
        bbg.bounceOff(wall44);
        bbg.bounceOff(wall45);
        bbg.bounceOff(wall46);
        bbg.bounceOff(wall47);
        bbg.bounceOff(wall48);
        bbg.bounceOff(wall49);
        bbg.bounceOff(wall50);
        }
        if(bulletred !== undefined){
            brg.setLifetimeEach(200);
            if(frameCount % 100 === 0){
                brg.destroyEach();
            }
            brg.bounceOff(wall);
            brg.bounceOff(wall2);
            brg.bounceOff(wall3);
            brg.bounceOff(wall4);
            brg.bounceOff(wall5);
            brg.bounceOff(wall6);
            brg.bounceOff(wall7);
            brg.bounceOff(wall8);
            brg.bounceOff(wall9);
            brg.bounceOff(wall10);
            brg.bounceOff(wall11);
            brg.bounceOff(wall12);
            brg.bounceOff(wall13);
            brg.bounceOff(wall14);
            brg.bounceOff(wall15);
            brg.bounceOff(wall16);
            brg.bounceOff(wall17);
            brg.bounceOff(wall18);
            brg.bounceOff(wall19);
            brg.bounceOff(wall20);
            brg.bounceOff(wall21);
            brg.bounceOff(wall22);
            brg.bounceOff(wall23);
            brg.bounceOff(wall24);
            brg.bounceOff(wall25);
            brg.bounceOff(wall26);
            brg.bounceOff(wall27);
            brg.bounceOff(wall28);
            brg.bounceOff(wall29);
            brg.bounceOff(wall30);
            brg.bounceOff(wall31)
            brg.bounceOff(wall32)
            brg.bounceOff(wall33)
            brg.bounceOff(wall34);
            brg.bounceOff(wall35);
            brg.bounceOff(wall36);
            brg.bounceOff(wall37);
            brg.bounceOff(wall38);
            brg.bounceOff(wall39);
            brg.bounceOff(wall40);
            brg.bounceOff(wall41);
            brg.bounceOff(wall42);
            brg.bounceOff(wall43);
            brg.bounceOff(wall44);
            brg.bounceOff(wall45);
            brg.bounceOff(wall46);
            brg.bounceOff(wall47);
            brg.bounceOff(wall48);
            brg.bounceOff(wall49);
            brg.bounceOff(wall50);
            }

    ball2.collide(wall);
    ball2.collide(wall2);
    ball2.collide(wall3);
    ball2.collide(wall4);
    ball2.collide(wall5);
    ball2.collide(wall6);
    ball2.collide(wall7);
    ball2.collide(wall8);
    ball2.collide(wall9);
    ball2.collide(wall10);
    ball2.collide(wall11);
    ball2.collide(wall12);
    ball2.collide(wall13);
    ball2.collide(wall14);
    ball2.collide(wall15);
    ball2.collide(wall16);
    ball2.collide(wall17);
    ball2.collide(wall18);
    ball2.collide(wall19);
    ball2.collide(wall20);
    ball2.collide(wall21);
    ball2.collide(wall22);
    ball2.collide(wall23);
    ball2.collide(wall24);
    ball2.collide(wall25);
    ball2.collide(wall26);
    ball2.collide(wall27);
    ball2.collide(wall28);
    ball2.collide(wall29);
    ball2.collide(wall30);
    ball2.collide(wall31);
    ball2.collide(wall32);
    ball2.collide(wall33);
    ball2.collide(wall34);
    ball2.collide(wall35);
    ball2.collide(wall36);
    ball2.collide(wall37);
    ball2.collide(wall38);
    ball2.collide(wall39);
    ball2.collide(wall40);
    ball2.collide(wall41);
    ball2.collide(wall42);
    ball2.collide(wall43);
    ball2.collide(wall44);
    ball2.collide(wall45);
    ball2.collide(wall46);
    ball2.collide(wall47);
    ball2.collide(wall48);
    ball2.collide(wall49);
    ball2.collide(wall50);

    // ball3

    ball3.collide(wall);
    ball3.collide(wall2);
    ball3.collide(wall3);
    ball3.collide(wall4);
    ball3.collide(wall5);
    ball3.collide(wall6);
    ball3.collide(wall7);
    ball3.collide(wall8);
    ball3.collide(wall9);
    ball3.collide(wall10);
    ball3.collide(wall11);
    ball3.collide(wall12);
    ball3.collide(wall13);
    ball3.collide(wall14);
    ball3.collide(wall15);
    ball3.collide(wall16);
    ball3.collide(wall17);
    ball3.collide(wall18);
    ball3.collide(wall19);
    ball3.collide(wall20);
    ball3.collide(wall21);
    ball3.collide(wall22);
    ball3.collide(wall23);
    ball3.collide(wall24);
    ball3.collide(wall25);
    ball3.collide(wall26);
    ball3.collide(wall27);
    ball3.collide(wall28);
    ball3.collide(wall29);
    ball3.collide(wall30);
    ball3.collide(wall31);
    ball3.collide(wall32);
    ball3.collide(wall33);
    ball3.collide(wall34);
    ball3.collide(wall35);
    ball3.collide(wall36);
    ball3.collide(wall37);
    ball3.collide(wall38);
    ball3.collide(wall39);
    ball3.collide(wall40);
    ball3.collide(wall41);
    ball3.collide(wall42);
    ball3.collide(wall43);
    ball3.collide(wall44);
    ball3.collide(wall45);
    ball3.collide(wall46);
    ball3.collide(wall47);
    ball3.collide(wall48);
    ball3.collide(wall49);
    ball3.collide(wall50);

    drawSprites();

    if(ball2Exists === false && ball3Exists === false){
        roundEnded = true 
    }
    if(roundEnded === true){
        score = score +1
    }
    text("green " + score,20,20);

    ball.collide(edges[0]);
    ball.collide(edges[1]);
    ball.collide(edges[2]);
    ball.collide(edges[3]);


    ball2.collide(edges[0]);
    ball2.collide(edges[1]);
    ball2.collide(edges[2]);
    ball2.collide(edges[3]);


    ball3.collide(edges[0]);
    ball3.collide(edges[1]);
    ball3.collide(edges[2]);
    ball3.collide(edges[3]);

    bgg.bounceOff(edges[0]);
    bgg.bounceOff(edges[1]);
    bgg.bounceOff(edges[2]);
    bgg.bounceOff(edges[3]);


    brg.bounceOff(edges[0]);
    brg.bounceOff(edges[1]);
    brg.bounceOff(edges[2]);
    brg.bounceOff(edges[3]);


    bbg.bounceOff(edges[0]);
    bbg.bounceOff(edges[1]);
    bbg.bounceOff(edges[2]);
    bbg.bounceOff(edges[3]);

}


function readposition(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function readposition2(data) {
    position2 = data.val();
    ball2.x = position2.x;
    ball2.y = position2.y;
}

function readposition3(data) {
    position3 = data.val();
    ball3.x = position3.x;
    ball3.y = position3.y;
}

function changePosition(x, y) {
    ball.x = ball.x + x
    ball.y = ball.y + y
    writePosition(ball.x, ball.y)
}

function changePosition2(x, y) {
    ball2.x = ball2.x + x
    ball2.y = ball2.y + y
    writePosition2(ball2.x, ball2.y)
}

function changePosition3(x, y) {
    ball3.x = ball3.x + x
    ball3.y = ball3.y + y
    writePosition3(ball3.x, ball3.y)
}

function writePosition(x, y) {

    database.ref("ball/position").set({
        'x': x,
        'y': y
    })
}

function writePosition2(x, y) {
    database.ref("ball2/position2").update({
        'x': x,
        'y': y
    })
}

function writePosition3(x, y) {
    database.ref("ball3/position3").update({
        'x': x,
        'y': y
    })
}

function readscore(data) {
    score = data.val();
    
    
}

function readscore2(data) {
    score = data.val();
    ball.x = position.x;

}