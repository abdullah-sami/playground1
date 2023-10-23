





let main = document.getElementById('main');

let overview = document.getElementById('overview');
let overview_btn = document.getElementById('overview_btn');
let about = document.getElementById('about');
let about_btn = document.getElementById('about_btn');
let gallery = document.getElementById('gallery');
let gallery_btn = document.getElementById('gallery_btn');
let reviews = document.getElementById('reviews');
let reviews_btn = document.getElementById('reviews_btn');


$("main").scroll(function(){
    
    var bounding1 = overview.getBoundingClientRect();
    var bounding2 = about.getBoundingClientRect();
    var bounding3 = gallery.getBoundingClientRect();
    var bounding4 = reviews.getBoundingClientRect();



    if (bounding1.top >= 0 
        && bounding1.left >= 0 
        && bounding1.right <= (window.innerWidth || document.documentElement.clientWidth) 
        && bounding1.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

        overview_btn.classList.add("active_itm");
    } else {
        
        overview_btn.classList.remove("active_itm");
    }


    
    if (bounding2.top >= 0 
        && bounding2.left >= 0 
        && bounding2.right <= (window.innerWidth || document.documentElement.clientWidth) 
        && bounding2.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

        about_btn.classList.add("active_itm");
    } else {
        
        about_btn.classList.remove("active_itm");
    }





    if (bounding3.top >= 0 
        && bounding3.left >= 0 
        && bounding3.right <= (window.innerWidth || document.documentElement.clientWidth) 
        && bounding3.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

        gallery_btn.classList.add("active_itm");
    } else {
        
        gallery_btn.classList.remove("active_itm");
    }





    if (bounding4.top >= 0 
        && bounding4.left >= 0 
        && bounding4.right <= (window.innerWidth || document.documentElement.clientWidth) 
        && bounding4.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

        reviews_btn.classList.add("active_itm");
    } else {
        
        reviews_btn.classList.remove("active_itm");
    }






  });



    
    
