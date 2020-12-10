function isTouching (object1,object2) {

    if((object1.x-object2.x < (object1.width + object2.width)/2 &&
    object2.x-object1.x < (object1.width + object2.width)/2) && 
    (object1.y-object2.y < (object1.height + object2.height)/2 &&
    object2.y-object1.y < (object1.height + object2.height)/2)){
      return true

    }
    else{
      return false
    }
    


}

function collide (object1,object2){
    if(object1.x-object2.x < (object1.width+object2.width)/2 &&
    object2.x-object1.x < (object1.width+object2.width)/2) {
      movingRect.velocityX=0
    }
    if(object1.y-object2.y < (object1.height+object2.height)/2 &&
    object2.y-object1.y < (object1.height+object2.height)/2){
      movingRect.velocityY=0
    }
    }

    function bounceOff (object1,object2){
        if(object1.x-object2.x < (object1.width+object2.width)/2 &&
        object2.x-object1.x < (object1.width+object2.width)/2) {
          movingRect.velocityX=movingRect.velocityX*-1
          fixedRect.velocityX=fixedRect.velocityX*-1
        }
        if(object1.y-object2.y < (object1.height+object2.height)/2 &&
        object2.y-object1.y < (object1.height+object2.height)/2){
          movingRect.velocityY=movingRect.velocityY*-1
          fixedRect.velocityY=fixedRect.velocityY*-1
        }
        }