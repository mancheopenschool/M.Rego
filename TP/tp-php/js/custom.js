jQuery(document).ready(function($) {
    $('#modify').click(function(event) {
        $('#popup').dialog({
            title: "Mettre à jour le profil",
            resizable: false,
            height:440,
            width: '40%'
        });
    });

    $('.progressBar').each(function(index, el) {
        console.log($(this).data("value"));
        progress($(this).data("value"), $(this));
    });

    function progress(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({ width: progressBarWidth }, 1000).html(percent + "% ");
    }

});