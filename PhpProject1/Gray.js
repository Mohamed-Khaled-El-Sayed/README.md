

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var imageObj = document.getElementById("scream");
resize (imageObj) ;

function start(){

context.clearRect(0, 0, canvas.width, canvas.height);
context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height);

}
 
 
  function resize () {
      var w =imageObj.width ;
    var h = imageObj.height ;
     if (h > 1500)
         imageObj.height=1500 ;
     if (w > 1500)
         imageObj.width =1500;
     canvas.width = imageObj.width ;
    canvas.height = imageObj.height;
  };
 
 
 function Gray1 () {
    resize (imageObj) ;
    start() ;
    
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
for(var i = 0; i < data.length; i += 4) {
    var brightness =  data[i] + data[i + 1] +  data[i + 2];
    if ( data[i + 2] > 50 && data[i ] < 100 ) {

        data[i] -= 10
        data[i + 1] -= 10
        data[i + 2] += 30

        continue ;
    }
     
 
          // red
    data[i] = brightness / 3 ;
          // green
    data[i + 1] = brightness / 3 ;
          // blue
    data[i + 2] = brightness / 3 ;
}
context.putImageData(imageData,0,0) ;
var dataURL = canvas.toDataURL('image/jpeg');
document.getElementById('canvasImg1').src = dataURL;


};

function Gray2(){
       resize (imageObj) ;
        start() ;
       
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
     
    for(var i = 0; i < data.length; i += 4) {

              data[i] = data[i];
              data[i + 1] = data[i];
              data[i + 2] = data[i];

              continue ;

}
    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg2').src = dataURL;

};

function Gray3(){
       resize (imageObj) ;
       start();
var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
      
   for(var i = 0; i < data.length; i += 4)
         {
          var brightness =  data[i] + data[i + 1] +  data[i + 2];

          // red
          data[i] = brightness / 3 ;
          // green
          data[i + 1] = brightness / 3 ;
          // blue
          data[i + 2] = brightness / 3 ;
         } 
         
context.putImageData(imageData,0,0) ;
var dataURL = canvas.toDataURL('image/jpeg');
document.getElementById('canvasImg3').src = dataURL;

};

function Gray4(){
    resize (imageObj) ;
        start() ;
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
    
     for(var i = 0; i < data.length; i += 4) {

              data[i] = data[i + 1];
              data[i + 1] = data[i + 1];
              data[i + 2] = data[i + 1];

              continue ;

}

    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg4').src = dataURL;

};

function Gray5(){
       resize (imageObj) ;
        start() ;
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
     
     for(var i = 0; i < data.length; i += 4) {

              data[i] = data[i + 2];
              data[i + 1] = data[i];
              data[i + 2] = data[i];

              continue ;

}
    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg5').src = dataURL;

};

function Gray6(){
       resize (imageObj) ;
        start() ;
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
     
    for(var i = 0; i < data.length; i += 4)
         {

          // red
          data[i] = data[i] - 50;
          // green
          data[i + 1] = data[i + 1] - 50 ;
          // blue
          data[i + 2] = data[i + 2]   ;
}

    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg6').src = dataURL;

};

function Gray7(){
       resize (imageObj) ;
        start() ;
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
     
    for(var i = 0; i < data.length; i += 4) {

          if (data[i + 1] > 25 && data[i] < 77 && data[i + 2] < 77 )
          {

              data[i] -= 10;
              data[i + 1] += 10;
              data[i + 2] -= 10;

              continue ;
          }
          else
          var brightness =  data[i] + data[i + 1] +  data[i + 2];
          // red
          data[i] =    (brightness /3);
          //Green
          data[i + 1] = (brightness /3);
          // blue
          data[i + 2] = (brightness /3);
}

    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg7').src = dataURL;

};

function Gray8(){
       resize (imageObj) ;
        start() ;
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
     
     for(var i = 0; i < data.length; i += 4) {
          var brightness =  data[i] + data[i + 1] +  data[i + 2];
          if ( data[i] >= 50 && data[i + 2] <100 && data[i + 1] < 50)
          {

              data[i] += 10;
              data[i + 1] -= 10;
              data[i + 2] -= 10;
            continue;
          }
          // red
          data[i] = brightness / 3 ;
          // green
          data[i + 1] = brightness / 3 ;
          // blue
          data[i + 2] = brightness / 3 ;

}
    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg8').src = dataURL;

};

function Gray9(){
    resize (imageObj) ;
        start() ;
var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
     
         for(var i = 0; i < data.length; i += 4) {

          if (data[i + 1] > 25 && data[i] < 77 && data[i + 2] < 77 )
          {

              data[i] -= 10;
              data[i + 1] += 10;
              data[i + 2] -= 10;

              continue ;
          }
          else
          var brightness =  data[i] + data[i + 1] +  data[i + 2];
          // red
          data[i] =    (brightness /3);
          //Green
          data[i + 1] = (brightness /3);
          // blue
          data[i + 2] = (brightness /3);
}
     
    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg9').src = dataURL;

};



function stop(){
    
    canvas.width = 0 ;
    canvas.height = 0;
    
};