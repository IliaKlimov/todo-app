$(document).ready(function () {
    $("#button_new").click(function () {
        $(".wrap").show();
    });
    $("#cancel").click(function () {
        $(".wrap").hide();
    });
    $(document).on("click", "#ok", function () {
        $("#form_new").submit();
    });

    // $('select').select2({
    //   minimumResultsForSearch: -1,
    //   templateResult: function (d) { return $(d.text); },
    //   templateSelection: function (d) { return $(d.text); },
    // });
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue'
        //increaseArea: '20%' // optional
    }).on('ifToggled', event => {
        $(event.currentTarget).closest('form').submit();
    });
    $('input').on('ifToggled', event => {
        $(event.currentTarget).closest('form').submit();
    });

    $('body').on('click touchstart', '.editable', function () {

        var t = $(this);
        var input = $('<input>').attr('class', 'savable').val(t.text());
        t.replaceWith(input);
        input.focus();

    });

    $('body').on('blur', '.savable', function () {

        var input = $(this);
        var t = $('<span>').attr('class', 'editable').text(input.val());
        let data = {}
        $.ajax({
            type: 'PUT',
            url: '.',
            contentType: 'application/json',
            data: JSON.stringify(data), // access in body
        })
        input.replaceWith(t);

    });

    $('body').on('keydown', '.savable', function (e) {
        if(e.keyCode == 13) {
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

