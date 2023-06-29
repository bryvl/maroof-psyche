// Make Navbar smaller when user scrolls down
// Get the navbar
var navbar = document.querySelector('.nav-container')

// Add a scroll event listener to window
window.addEventListener('scroll', function () {
  // If we've scrolled more than 50 pixels
  if (window.scrollY > 50) {
    // Add the scrolled class
    navbar.classList.add('scrolled')
  } else {
    // Otherwise remove it
    navbar.classList.remove('scrolled')
  }
})


// Modal Submit
$(function(){
    $('#contactForm').on('submit', function(e){
        e.preventDefault()
        
        var firstName = $('#firstName').val()
        var lastName = $('#lastName').val()
        var phone = $('#phone').val()
        var email = $('#email').val()
        var message = $('#message').val()

        // if (firstName && lastName && phone && email && message) {
        //     alert('Form submitted successfully')
        // } else {
        //     alert('Please fill out all fields')
        // }


        // Successful submit animation
        $('.modal-header .modal-title').replaceWith('<h2 class="modal-title w-100" id="modalFormLabel">Success!</h2>')
        $('.modal-body #contactForm').replaceWith(
            '<div class="successful-submit">' + 
            '<h3 class="successful-submit--title">Thank you for reaching out</h3>' +
            '<div class="successful-submit--icon"><i class="fas fa-check" style="color: #ffffff;"></i></div>' +
            '<p class="successful-submit--desc">A member of our team will contact you shortly!</p>' +
            '</div>' 
        )
        $('.modal-content').addClass('mc-success')

        $('#firstName').val('')
        $('#lastName').val('')
        $('#phone').val('')
        $('#email').val('')
        $('#message').val('')

        console.log('Submitted!')  
    })
})


// Animations

// Navbar Toggle to Cross Animation
document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.cross-toggler')
    // var navbarCollapse = document.querySelector('#navbarNav')
  
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle('collapsed')
    });
  });

$(document).ready(function() {
    $(".form-group > input").on("blur", function() {
        if ($(this).val() != "") {
            $(this).addClass("has-content")
        } else {
            $(this).removeClass("has-content")
        }
    })
});

// Use InputMask JS Library to auto mask modal phone number field
window.addEventListener('DOMContentLoaded', (event) => {
    Inputmask({"mask": "999-999-9999"}).mask('#phone');
});
