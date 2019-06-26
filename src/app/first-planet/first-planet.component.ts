import { Component, AfterViewInit } from '@angular/core';
import { by } from 'protractor';

@Component({
  selector: 'app-first-planet',
  templateUrl: './first-planet.component.html',
  styleUrls: ['./first-planet.component.css']
})
export class FirstPlanetComponent implements AfterViewInit {

  constructor() { }

  public ngAfterViewInit() {
    let canvas : any= document.getElementById('map');
    let ctx = canvas.getContext("2d");

    let background = new Image();
    background.src = "assets/images/maptest.png";
    let bX = 300;
    let bY = 300;

    let widowMaker = new Image();
    widowMaker.src = "assets/images/widowMaker1.png"

    let canvasWidth = 1200;
    let canvasHeight = 800;
// Sprite du vaisseau
    let spriteWidth = 2370;
    let spriteHeight = 1030;
    let rows = 1;
    let cols = 3;
    let width = spriteWidth/cols;
    let height = spriteHeight/rows;
    let curFrame = 0;
    let frameCount = 3;
    let x=400;
    let y=320;
    let srcX= 0;
    let srcY= 0;

    let player = new Image();
    player.src = "assets/images/player.png"

// Sprite du vaisseau
    let playerWidth = 800;
    let playerHeight = 100;
    let pRows = 1;
    let pCols = 8;
    let pWidth = playerWidth/pCols;
    let pHeight = playerHeight/pRows;
    let pCurFrame = 0;
    let pFrameCount = 8;
    let pX=550;
    let pY=320;
    let pSrcX= 0;
    let pSrcY= 0;

    canvas.width =  canvasWidth;
    canvas.height = canvasHeight;

    function updateFrame(){
      curFrame = ++curFrame % frameCount;
      srcX = curFrame * width;
      ctx.clearRect(x,y,width,height);

      pCurFrame = ++pCurFrame % pFrameCount;
        pSrcX = pCurFrame * pWidth;
        ctx.clearRect(pX,pY,pWidth,pHeight);
    }

    function draw(){
      updateFrame();
      ctx.drawImage(background,bX,bY,1400,bY,0,-100,1200,900);
      ctx.drawImage(widowMaker,srcX,srcY,width,height,x,y,280,320);
      ctx.drawImage(player,pSrcX,pSrcY,pWidth,pHeight,pX,pY,pWidth,pHeight);
    }
    setInterval(draw,80);
  }
}
