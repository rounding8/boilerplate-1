(function($) {

    $('#submit').on('click', function() {
        const email = document.getElementById('input-email').value;

        $.post('/login', { email: email, password: document.getElementById('input-pw').value }, function(res) {
            res.success ? location.href = '/' : alert('You do not have permission to view this page!');
        }, 'json');
    });

}(jQuery));
