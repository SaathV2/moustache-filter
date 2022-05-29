noseX = 0;
noseY = 0;

function preload(){
moustache_image = loadImage('https://i.postimg.cc/15ktjH1L/image-removebg-preview-1.png')
}

function modelLoaded(){
    console.log('posenet is initialized')
}

function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide()
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose' , gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(moustache_image, noseX, noseY, 70, 50);
    
}

function take_snapshot(){
    save('moustache_filter.png');
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x - 35;
        noseY = results[0].pose.nose.y ;
        console.log('nose x = ' + noseX);
        console.log('nose y = '+ noseY );
    }
    
}