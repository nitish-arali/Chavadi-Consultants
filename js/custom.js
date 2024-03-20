(function () {
  "use strict";

  AOS.init({
    duration: 800,
    easing: "slide",
    once: true,
  });

  var preloader = function () {
    var loader = document.querySelector(".loader");
    var overlay = document.getElementById("overlayer");

    function fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    }

    setTimeout(function () {
      fadeOut(loader);
      fadeOut(overlay);
    }, 200);
  };
  preloader();

  var tinySdlier = function () {
    var heroSlider = document.querySelectorAll(".hero-slide");
    var propertySlider = document.querySelectorAll(".property-slider");
    var imgPropertySlider = document.querySelectorAll(".img-property-slide");
    var testimonialSlider = document.querySelectorAll(".testimonial-slider");

    if (heroSlider.length > 0) {
      var tnsHeroSlider = tns({
        container: ".hero-slide",
        mode: "carousel",
        speed: 700,
        autoplay: true,
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
        controlsContainer: "#hero-nav",
      });
    }

    if (imgPropertySlider.length > 0) {
      var tnsPropertyImageSlider = tns({
        container: ".img-property-slide",
        mode: "carousel",
        speed: 700,
        items: 1,
        gutter: 30,
        autoplay: true,
        controls: false,
        nav: true,
        autoplayButtonOutput: false,
      });
    }

    if (propertySlider.length > 0) {
      var tnsSlider = tns({
        container: ".property-slider",
        mode: "carousel",
        speed: 700,
        gutter: 30,
        items: 3,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: "#property-nav",
        responsive: {
          0: {
            items: 1,
          },
          700: {
            items: 2,
          },
          900: {
            items: 3,
          },
        },
      });
    }

    if (testimonialSlider.length > 0) {
      var tnsSlider = tns({
        container: ".testimonial-slider",
        mode: "carousel",
        speed: 700,
        items: 3,
        gutter: 50,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: "#testimonial-nav",
        responsive: {
          0: {
            items: 1,
          },
          700: {
            items: 2,
          },
          900: {
            items: 3,
          },
        },
      });
    }
  };
  tinySdlier();
})();

// let mybutton = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// Email smtpjs
// function sendEmail(e) {

//   e.preventDefault();
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "website.chavadiconsultants@gmail.com",
//     Password: "45E70364F5721892E7D8315BA1A38011EC3D",
//     To: "nitisharali1995@gmail.com",
//     From: "website.chavadiconsultants@gmail.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }

function sendEmail(e) {
  e.preventDefault();
  document.getElementById("submitButton").value = "Submitting Please Wait";
  document.getElementById("submitButton").disabled = true;

  let params = {
    name: document.getElementById("name").value,
    PhNumber: document.getElementById("PhNumber").value,
    subject: document.getElementById("subject").value,
    enquiryMessage: document.getElementById("enquiryMessage").value,
  };

  let serviceId = "service_152mwqh";
  let templateId = "template_dt34wou";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("PhNumber").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("enquiryMessage").value = "";
      console.log(res);
      alert("Your Enquiry Sent Successfully!");
      document.getElementById("submitButton").value = "Send Enquiry";
      document.getElementById("submitButton").disabled = false;
    })
    .catch((e) => {
      console.log(e);
      document.getElementById("submitButton").value = "Send Enquiry";
      document.getElementById("submitButton").disabled = false;
      alert(
        "Failed to Submit Enquiry! Please Contact through Phone Number mentioned below"
      );
    });
}
