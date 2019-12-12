$(document).ready(function () {
    $("#button_new").click(function () {
        $(".wrap").show();
    });
    $("#cancel").click(function () {
        $(".wrap").hide();
    });

    $("#form_new").submit(function (event) {

        event.preventDefault(); //prevent default action POST
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = $(this).serialize(); //Encode form elements for submission

        $.ajax({
            url: post_url,
            type: request_method,
            data: form_data
        }).done(function (response) {
            $(".wrap").hide();
        }).fail(function (response) {
            alert("Не гуд");
        });
    });

    $(document).on("click", "#ok", function () {
        $("#form_new").submit()
    });

    $('body').on("click", ".button_delete", function () {
        var form = $(this).closest('form');
        form.submit(function (event) {
            event.preventDefault();                 //prevent default action POST
            var post_url = form.attr("action");     //get form action url
            var request_method = "POST";            //get form GET/POST method
            $(this).append('<input type="hidden" name="action" value="delete">');
            var form_data = $(this).serializeArray();//Encode form elements for submission
            $.ajax({
                url: post_url,
                type: request_method,
                data: form_data,
                success: function (value) {
                    console.log("Todo Deleted");
                    location.reload();
                }
            });
        });
        form.submit()
    });

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue'
        //increaseArea: '20%' // optional
    }).on('ifToggled', event => {
        // var form = $(this).closest('form');
        // form.append('<input type="hidden" name="action" value="modify">');
        // alert(form.attr("action"))
        // $.ajax({
        //     type: 'POST',
        //     url: form.attr("action"),
        //     data: form.serialize(), // access in body
        // });
    });
    $('input').on('ifToggled', event => {
        var form = $(event.currentTarget).closest('form');
        form.append('<input type="hidden" name="action" value="modify">');
        $.ajax({
            type: 'POST',
            url: form.attr("action"),
            data: form.serialize(), // access in body
        });
    });

    $('body').on('click touchstart', '.editable', function () {
        var t = $(this);
        var input = $('<input>').attr('class', 'savable').attr('name', 'task').val(t.text());
        t.replaceWith(input);
        input.focus();
    });

    $('body').on('blur', '.savable', function () {
        var form = $(this).closest('form');
        var input = $(this);
        var t = $('<span>').attr('class', 'editable').text(input.val());

        form.append('<input type="hidden" name="action" value="modify">');
        $.ajax({
            type: 'POST',
            url: form.attr("action"),
            data: form.serialize(), // access in body
        });
        input.replaceWith(t);

    });

    $('body').on('keydown', '.savable', function (e) {
        if (e.keyCode == 13) {
            $('.savable').blur();

        }
    });
    // $('input').bind("enterKey", function (e) {
    //     // alert("Enter key pressed");
    //
    // });
    // $('input').keyup(function (e) {
    //     if (e.keyCode == 13) {
    //         $(this).trigger("enterKey");
    //     }
    // });


});

