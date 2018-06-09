const numStars=100;//Sets number of displayed stars.//
// For every star we want to display
for (let i=0;i<numStars;i++){
  let star=document.createElement("div");  
  star.className="star";
  let xy=getRandomPosition();
    star.style.top=xy[0] + 'px';
    star.style.left=xy[1] + 'px';
  document.body.append(star);
}

function getRandomPosition(){//Retrieves random x,y value based on container size.//
  let y=window.innerWidth;
  let x=window.innerHeight;
    let randomX=Math.floor(Math.random()*x);
    let randomY=Math.floor(Math.random()*y);
    return [randomX,randomY];
}