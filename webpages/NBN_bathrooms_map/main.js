// NAV BAR SCROLL EFFECT (from https://stackoverflow.com/questions/8218159/javascript-check-if-page-is-at-the-top)

window.addEventListener("scroll", function(){
    if (window.scrollY == 0) {
        document.querySelector('nav').className = "nav-bar";
    } else {
        document.querySelector('nav').className = "nav-bar nav-bar-scroll";
    }
})

// ADD ANY OTHER JS BELOW:

const HarrisPopUp = (ev) => {
    var modal = document.getElementById("HarrisModal");
    var span = document.getElementsByClassName("closeHarris")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
      }
    
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
     }
    } 
};

const LutkinPopUp = (ev) => {
    var modal = document.getElementById("LutkinModal");
    var span = document.getElementsByClassName("closeLutkin")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
      }
    
      window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
};


const LuntPopUp = (ev) => {
    var modal = document.getElementById("LuntModal");
    var span = document.getElementsByClassName("closeLunt")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
      }
    
      window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
};

const KelloggPopUp = (ev) => {
    var modal = document.getElementById("KelloggModal");
    var span = document.getElementsByClassName("closeKellogg")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
      }
    
      window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
};

const NorrisPopUp = (ev) => {
    var modal = document.getElementById("NorrisModal");
    var span = document.getElementsByClassName("closeNorris")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
      }
    
      window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
};

const MainPopUp = (ev) => {
    var modal = document.getElementById("MainModal");
    var span = document.getElementsByClassName("closeMain")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
      }
    
      window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
};

const MFCPopUp = (ev) => {
    var modal = document.getElementById("MFCModal");
    var span = document.getElementsByClassName("closeMFC")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
      }
    
      window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
};

const ShepardPopUp = (ev) => {
    var modal = document.getElementById("ShepardModal");
    var span = document.getElementsByClassName("closeShepard")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
      }
    
      window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
};

const TechPopUp = (ev) => {
    var modal = document.getElementById("TechModal");
    var span = document.getElementsByClassName("closeTech")[0];
    modal.style.display = "block";
    
    span.onclick = function() {
        modal.style.display = "none";
      }
    
      window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    } 
};

document.querySelector('#Harris').onclick = HarrisPopUp;

document.querySelector('#Lutkin').onclick = LutkinPopUp;

document.querySelector('#Lunt').onclick = LuntPopUp;

document.querySelector('#Kellogg').onclick = KelloggPopUp;

document.querySelector('#Norris').onclick = NorrisPopUp;

document.querySelector('#Main').onclick = MainPopUp;

document.querySelector('#MFC').onclick = MFCPopUp;

document.querySelector('#Shepard').onclick = ShepardPopUp;

document.querySelector('#Tech').onclick = TechPopUp;