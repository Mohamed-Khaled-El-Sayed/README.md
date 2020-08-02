<!DOCTYPE html>
<html>
    
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossorigin="anonymous">

<body style=" background-image: url(page1.jpg); 
  background-size: 100% auto;
    background-origin: border-box ">
    
    <header>
            <div class = "main">
                <ul>
                     <li><a href = "main.html">HOME</a></li>
                    <li><a href = "directions.html">FILTERS</a></li>
                    <li><a href = "#">Contact US</a></li>
                </ul>
            </div>
        </header>

<!-- Static navbar -->
    


<div class="alert alert-dark" style="margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%)"
    >
    
  
          <div class="row">
              <div class="col-lg-12" style="position: static; height: ">
               <form class="well md-form" action="/PhpProject1/upload.php" method="post" enctype="multipart/form-data">
                  <div class="form-group">
                      <label for="file" style="font-size:25px;font-weight: 900; font-family:cursive; color: midnightblue;">Select a file to upload</label>
                      <input type="file" name="file" style="font-size:17px;font-weight: 900; font-family:Snell Roundhand; color: orangered;">
                    <p class="help-block" style="font-size:15px;font-weight: 900; font-family:Snell Roundhand; color: midnightblue">Only jpg,jpeg and png  file with maximum size of 10 MB is allowed.</p>
                  </div>
                   <input type="submit" class="btn btn-dark" value="Upload">
                     <a href="directions.html" class="btn btn-dark">Start filtering</a>
                </form>
            </div>
          </div>
    </div> <!-- /container -->
    
  
    
</body>

<style>
    
    ul
{
    float:right;
    margin-top:25px;
}
ul li{
    display:inline-block;
}
ul li a
{
    color:#fff;
    padding:5px 20px;
    border: 1px solid transparent;
    transition:1s ease;
}
ul li a:hover
{
    background-color:#fff;
    color:gray;
}
.title
{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
    
*{
    margin:0;
    padding:0;
    font-family: Snell Roundhand;
}


</style>


</html>
