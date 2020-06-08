# M & M FILTERS WEBSITE

[![N|](1.png)]()

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

* **M & M is a new website for editing photos and always under update to add many new features.**

 Here you are the archtict of Your LIFE!
 
# Project Team
Mohamed Khaled El-Sayed[mohamed.khaled.shika@gmail.com](mohamed.khaled.shika@gmail.com)

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

# Table of Contents

1. [Project Features](#Project-Features)
2. [Tech](#Tech)
3. [Requirements](#Requirements)

## Project Features

  * Upload an image file and see the magic happens on it .
  > Only jpg,jpeg and png file with maximum size of 10 MB is allowed.
  
  [![N|](2.png)]()
  
  * Choose from our filters collection .
  
  [![N|](3.png)]()

  * GrayScales .
  
  [![N|](4.png)]()
  [![N|](5.png)]()

  * warm .
  
  [![N|](9.png)]()
  [![N|](10.png)]()

  * cool .
  
  [![N|](6.png)]()
  
  * More filters in our website .
  
  [![N|](7.png)]()
  [![N|](8.png)]()
  
## Tech

This project uses four of the web programming languages :
 
 - M & M Uses HTML5 , CSS for the Front-End styles .
 - M & M Uses JavaScript and PHP for the Back-End functionality .
 > PHP : For uploading the image file to the server .
 
 > JavaScript : For filters codes . 
 
 For example a simple grayscale filter using Javascript  :
 
 ```javascript
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var imageObj = document.getElementById("scream"); 
context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height);
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
```
 
## Requirements

 Any Web Development IDE that supports HTML5 , CSS , JavaScript and PHP .
 
 you may try : 
 * [NetBeans](https://netbeans.org/) - NetBeans is high on the list for the best web development IDE because it is easy to use and it lets you develop cool desktop, mobile, and web apps in no time. It works equally as good with JavaScript, HTML5, PHP, C/C++ etc. It is a free JavaScript IDE and a great HTML5 IDE for your day-to-day use.
 
* NetBeans needs [XAMPP](https://www.apachefriends.org/download.html)  to run PHP . - XAMPP is the most famous PHP and Perl development environment. It helps developers to setup a local server which is fully equipped with all necessary tools and helps them to work at high speed. It is a totally free, very simple in installing Apache distribution containing Maria DB (MySQL), PHP, and Perl. The set up of the the package is extremely easy for multiple operating systems like Windows, Linux, Mac OS X and Solaris.

[TOP](#m--m-filters-website)
