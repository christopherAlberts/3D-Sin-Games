var confLocs = []
var confTheta = []

function setup() {
    createCanvas(900, 800, WEBGL);
    
    for (var i = 0; i < 200; i++){
        confLocs.push(createVector(random(-500, 500), random(-800, 0), random(-500, 500)))        
        confTheta.push(random(0, 360));
    }
    
    slider1 = createSlider(1, 10, 1);
    slider1.position(10, 10);
    slider1.style('width', '80px');
    
    slider2 = createSlider(1, 10, 1);
    slider2.position(10, 50);
    slider2.style('width', '80px');


    
}

function draw() {
    background(125);
    angleMode(DEGREES);   
    
    var xLoc = cos(frameCount*slider2.value()) * height;
    var yLoc = -600;
    var zLoc = sin(frameCount*slider2.value()) * height;
    camera(xLoc, yLoc, zLoc, 0, 0, 0, 0, 1, 0);
    
    normalMaterial();
    
    confetti();
    
    for (var i = -400; i <= 400; i += 50){
        
        for (var j = -400; j <= 400; j += 50){
            
            push();
            translate(i,0,j);
            stroke(0);
            strokeWeight(2);
            distance = dist(0,0,i,j) + frameCount
//            console.log(sin(distance))
            var length = map(sin(distance),-1,1, 100,300)
//            console.log(length)
            box(50,length*slider1.value(),50);
            pop();

        }
   
    } 

    
}


function confetti(){
    
    for(var i = 0; i < confLocs.length; i++){
        push();
        translate(confLocs[i]["x"],confLocs[i]["y"] +1,confLocs[i]["z"])
        rotateX(confTheta[i]);
        plane(15, 15)
        confTheta[i] = confTheta[i]+10
        confLocs[i]["y"] = confLocs[i]["y"] +1
        
        
        if(confLocs[i]["y"] > 0){
            console.log(confLocs[i]["y"])
           confLocs[i]["y"] = -800;
        }
       
        pop();
        

    }
}
