


$(document).ready(function () {
  $("body").persiaNumber();
        var openis = 0;
        var valor_click = '';
        $('.subsection a').bind("click", function () {
      openis = 0;
          que_menu = $(this).attr('id');
          valor_bloque = que_menu.substring(11, 12);
          $('.sub').hide();
          if (valor_click != valor_bloque) {
      $('#sub_' + valor_bloque).fadeIn(200, function () {
        openis = 1;
        valor_click = valor_bloque;
      })
    } else {
      $('.sub').hide();
            valor_click = '';
          }
          if (openis == 1) {
      $('.sub').hide();
            openis = 0;
          }
        })
        $(document).bind('click', function (event) {
          if (openis == 1) {
      $('.sub').hide();
            openis = 0;
            valor_click = '';
          }
        })

        openis = 2;

        $('#catalog').bind("click", function () {
          if (openis != 1) {
      $('#submenu').show();
            openis = 1;
          } else {
      $('#submenu').hide();
            openis = 2;
          }
        })
        /*************** Newsletter */

        $("#Enviar_n").bind("click", function () {
          if ($('#Acepto_n').prop('checked') == false) {
      $("#checkboxRequiredMsg_n").html("<br/>In order to send the form, you must first accept the terms and conditions.");
            return false;
          } else {
      $("#checkboxRequiredMsg_n").html("");
          }
          if ($("#Email_n").hasClass("success") && $('#Acepto_n').prop('checked') == true) {
      $(".modal-title").html('<strong>Message</strong>');
            $(".modal-body").html("<p>Do you want to subscribe to our newsletter?</p>");
            $('#myModal3').modal('show');
          } else {
      $(".modal-title").html('<strong>Message</strong>');
            $(".modal-body").html('<p>Fill in the Email field correctly.</p>');
            $('#myModal').modal('show');
          }
          return false;
        })
        $('#b_confirm_a2').bind("click", function () {
      $("#formNEWSLETTER").hide();
          $('.loading').show();
          $('#myModal3').modal('hide');
          $('.modal-backdrop').modal('hide');
          var url = "../newsletter_add.php";
          $.ajax({
      type: "POST",
            url: url,
            data: $("#formNEWSLETTER").serialize(),
            success: function () {
      $('#formNEWSLETTER').hide();
              $('#resposta_n').show();
              $("#resposta_n").html("Subscription completed. Thank you.");
              $('.loading').hide();
            },
            error: function () {
      $('#formNEWSLETTER').hide();
              $('#resposta_n').show();
              $("#resposta_n").html("There was an error sending your message!");
              $('.loading').hide();
            }
          });
          return false;
        })
        $('#b_confirm_c').bind("click", function () {
      $('#myModal2').modal('hide');
          $('.modal-backdrop').modal('hide');
          return false;
        })
      })


