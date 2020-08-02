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
 
 
 function green1 () {
    resize (imageObj) ;
    start() ;
    
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
 for(var i = 0; i < data.length; i += 4) {

          if (data[i + 1] > 150 )
          {

              data[i] -= 10;
              data[i + 1] += 20;
              data[i + 2] -= 10;

              continue ;
          }
          else
          var brightness =  data[i] + data[i + 1] +  data[i + 2];
          // red
          data[i] = brightness /3 ;
          // green
          data[i + 1] = (brightness /3) ;
          // blue
          data[i + 2] = (brightness /3);
}
context.putImageData(imageData,0,0) ;
var dataURL = canvas.toDataURL('image/jpeg');
document.getElementById('canvasImg1').src = dataURL;

};

function green2(){
       resize (imageObj) ;
        start() ;
       
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
     
     for(var i = 0; i < data.length; i += 4) {

          if (data[i + 1] > 150 )
          {

              data[i] -= 10;
              data[i + 1] += 20;
              data[i + 2] -= 10;

              continue ;
          }
          else
          var brightness =  data[i] + data[i + 1] +  data[i + 2];
          // red
          data[i] = (brightness /3)+70 ;
          // green
          data[i + 1] = (brightness /3)+50 ;
          // blue
          data[i + 2] = (brightness /3)+40;
}

    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg2').src = dataURL;

};

function green3(){
       resize (imageObj) ;
       start();
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
     
   for(var i = 0; i < data.length; i += 4) {

          if (data[i + 1] > 150 )
          {

              data[i] -= 10;
              data[i + 1] += 20;
              data[i + 2] -= 10;

              continue ;
          }
          else
          var brightness =  data[i] + data[i + 1] +  data[i + 2];
          // red
          data[i] = 0 ;
          // green
          data[i + 1] = (brightness /3) ;
          // blue
          data[i + 2] = (brightness /3);
}
    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg3').src = dataURL;

};

function green4(){
    resize (imageObj) ;
        start() ;
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
    
    
     for(var i = 0; i < data.length; i += 4) {

          if (data[i + 1] > 150 )
          {

              data[i] -= 10;
              data[i + 1] += 20;
              data[i + 2] -= 10;

              continue ;
          }
          else
          var brightness =  data[i] + data[i + 1] +  data[i + 2];
          // red
          data[i] = (brightness /3) ;
          // green
          data[i + 1] = (brightness /3) ;
          // blue
          data[i + 2] = 0;
}

    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg4').src = dataURL;

};

function green5(){
       resize (imageObj) ;
        start() ;
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
var data = imageData.data;
     
     for(var i = 0; i < data.length; i += 4) {

          if (data[i + 1] > 150 )
          {

              data[i] -= 10;
              data[i + 1] += 20;
              data[i + 2] -= 10;

              continue ;
          }
          else
          var brightness =  data[i] + data[i + 1] +  data[i + 2];
          // red
          data[i] = (brightness /3) +30 ;
          // green
          data[i + 1] = 70 ;
          // blue
          data[i + 2] = (brightness /3) - 50;
}
    context.putImageData(imageData,0,0) ;
    var dataURL = canvas.toDataURL('image/jpeg');
    document.getElementById('canvasImg5').src = dataURL;

};


function stop(){
    
    canvas.width = 0 ;
    canvas.height = 0;
    
};