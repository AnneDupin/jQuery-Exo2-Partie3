
var $input = $("#txtClick");

$input.val(0);


$(".nbr").click(function(){
    if ($(this).hasClass('inc'))
        $input.val(parseInt($input.val())+1);
    else if ($input.val()>=1)
        $input.val(parseInt($input.val())-1);
});
