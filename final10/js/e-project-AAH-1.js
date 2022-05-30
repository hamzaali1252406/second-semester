
    // navbar bar js
    document.addEventListener("DOMContentLoaded", function(){
      window.addEventListener('scroll', function() {
          if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('navbar_top').classList.add('bg-dark');
  
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
          } else {
            document.getElementById('navbar_top').classList.remove('bg-dark');
             // remove padding top from body
            document.body.style.paddingTop = '0';
          }
      });
    });
    // navbar js end
  
    // header footer in all pages
  document.getElementById("header").innerHTML=`
  <div class="container">
  <div class="container-fluid">
  <nav class="navbar navbar-expand-lg fixed-top  navbar-dark p-md-3 " id="navbar_top">
  <a class="navbar-brand text bold ms-5" href="#" >HAIRCARE</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav m-auto">
  <li class="nav-item">
  <a class="nav-link active" aria-current="page" href="e-project-1.html">Home</a>
  </li>
  <li class="nav-item">
  <a class="nav-link active" aria-current="page" href="aboutus.html">About</a>
  </li>
  <li class="nav-item dropdown">
      <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
      Treatments
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="hair-loss.html">Hair Loss</a></li>
      <li><a class="dropdown-item" href="graying.html">Graying</a></li>
      <!-- <li><hr class="dropdown-divider"></li> -->
      <li><a class="dropdown-item" href="growth.html">Growth Related</a></li>
      <li><a class="dropdown-item" href="premature.html">Premature</a></li>
      </ul>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          Equipments
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="straightner.html">Straightner</a></li>
          <li><a class="dropdown-item" href="spraybottles.html">Spray Bottles</a></li>
          <li><a class="dropdown-item" href="hairdryer.html">Hair Dryers</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="comb.html">Comb</a></li>
          <li><a class="dropdown-item" href="hairbrush.html">brush</a></li>
          <li><a class="dropdown-item" href="hairdying.html">Hair Dyeing</a></li>
          </ul>
          </li>
  <li class="nav-item dropdown">
  <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
  Products
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  <li><a class="dropdown-item" href="haircream.html">Hair Cream</a></li>
  <li><a class="dropdown-item" href="shampoo.html">Shampoo</a></li>
  <li><a class="dropdown-item" href="conditioner.html">Conditioner</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="serum.html">Serum</a></li>
  <li><a class="dropdown-item" href="facemask.html">Face Mask</a></li>
  <li><a class="dropdown-item" href="hairoil.html">Hair Oil</a></li>
  </ul>
  </li> 
  <li class="nav-item">
  <a class="nav-link active" aria-current="page" href="gallery.html">Gallery</a>
  </li>
  <li class="nav-item">
  <a class="nav-link active" aria-current="page" href="comparsion.html">Comparsion</a>
  </li>
  
  <li class="nav-item">
  <a class="nav-link active" aria-current="page" href="contactus.html">Contact</a>
  </li>
  
  </ul>
  </div>
  </nav>
  </div>
  </div>
  
  
  
   `
  
  
  document.getElementById("footer").innerHTML=`
  <footer class="footer">
  <div class="container">
  <div class="row">
  <div class="col-lg-3 col-md-6 col-sm-6">
  <div class="footer-about">
  <div class="footer-heading">
  <h1>Hair Care</h1>
  </div>
  <p>The Customer is at the heart of our unique bussiness model, whichincludedesign.</p>
  </div>
  </div>
  <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
  <div class="footer-widget">
  <h6>Shop Now</h6>
  <ul>
  <li><a href="#">Hair Oil</a></li>
  <li><a href="#">Face Mask</a></li>
  <li><a href="#">Conditioner</a></li>
  <li><a href="#">Shampoo</a></li>
  </ul>
  </div>
  </div>
  <div class="col-lg-2  col-md-3 col-sm-6">
  <div class="footer-widget">
  <h6>Links</h6>
  <ul>
  <li><a href="#">Contact Us</a></li>
  <li><a href="#">Payment Methods</a></li>
  <li><a href="#">Delivary</a></li>
  <li><a href="#">Return & Exchanges</a></li>
  </ul>
  </div>
  </div>
  <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
  <div class="footer-widget">
  <h6>NewsLetter</h6>
  <div class="footer-newslatter">
  <p>Be the first to know about new arrivals!</p>
  <form action="#">
  <input type="text" placeholder="Your Email">
  <button type="submit"><span><i class="fa fa-envelope"
  arial-hidden="true"></i></span></button>
  </form>
  </div>
  </div>
  </div>
  </div>
  <div class="row">
  <div class="col-lg-12 text-center">
  <div class="footer-copyright-text">
  <p>Copyright &copy; 2022 All rights reserved | This template is made with <i class="fa fa-heart-o" arial-hidden="true"></i>
  by <a href="#">AAH</a></p>
  </div>
  </div>
  </div>
  </div>
  </footer>   `
  // header footer end
  
