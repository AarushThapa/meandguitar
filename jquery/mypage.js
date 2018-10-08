$(function(){   
                
          $(".gallery img").click(function(){
             var $src= $(this).attr("src");
             $(".show").fadeIn();
             $(".img_show img").attr("src",$src);
          });
                $("span, .overlay" ).click(function(){
                   $(".show").fadeOut(); 
                });
    //ENABLING SHOW AND HIDE ON CLICK
        $("#so").click(function(){
           $("#tab").show(); 
        });
        $("#hid").click(function(){
               $("#tab").hide(); 
        });
    //Adding and Removing CLASS ON CLICK
    $("#so").click(function(){
           $("#eff").addClass("newClass"); 
    });
    $("#hid").click(function(){
           $("#eff").removeClass("newClass"); 
    });
    //slideshow of images in homepage
    var currentSlide=1;
    var slider= $('#slider');
    var slideContainer = slider.find('#slides');
    var slides= slideContainer.find('.sli');
    
    setInterval(function(){
       slideContainer.animate({'margin-left':'-=250px'},5000,function(){
          currentSlide++;
            if(currentSlide == slides.length){
           currentSlide =1;
           slideContainer.css('margin-left',0);
        }
        }); 
    });
    
    //canvas
        var canvas= document.querySelector('canvas');
        canvas.width= 600;
        canvas.height= 600;
        var c= canvas.getContext('2d');
        c.strokeStyle= "white";
        c.lineWidth= 17;
        c.lineCap= 'round';
        c.shadowBlur= 15;
        c.shadowColor='white';
        
    function degToRad(degree){
        var con= Math.PI/180;
        return degree*con;
    }
    function time(){
        var now= new Date();
        var date= now.toDateString();
        var time= now.toLocaleTimeString();
        var hour=now.getHours();
        var minutes= now.getMinutes();
        var seconds= now.getSeconds();
        var millisec= now.getMilliseconds();
        var newsec= seconds+(millisec/1000);
    //backgound
        c.fillStyle = "#4F0A1C";
    c.fillRect(0,0,window.innerWidth,window.innerWidth);
        
    //hours
    c.beginPath();
    c.arc(300,300,200, degToRad(270), degToRad((hour*15)-90));
    c.stroke();
    //minutes
    c.beginPath();
    c.arc(300,300,170, degToRad(270), degToRad((minutes*6)-90));
    c.stroke();
    //seconds
     c.beginPath();
    c.arc(300,300,140, degToRad(270), degToRad((newsec*6)-90));
    c.stroke();
    //date
    
    c.font="25px Arial";
    c.fillStyle="white";
    c.fillText(date,220,300);
    //time
    c.font="25px Arial";
    c.fillText(time,250,350);
    }
    setInterval(time, 40);
    console.log('running');
});