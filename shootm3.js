

$('.mainimg').html('<img src="' + user.avatar_url + '"/>');
$('h2').text(user.name);
$('h3').text(user.login);
$('.email').text(user.email);



//repository
var summit= "";
 _.each(repos,function(el){

    summit +=  '<div class= "divide">' + '<span class="blue">' +  el.name +
    '</span>'
    +'<br>' + el.updated_at + '<br>'
    +'<span class="right-col">' + el.stargazers_count
    + '</span>'  + '<br>'
    + '<span class="right-col">' + el.forks + '</span>' + '<br>'
    + '<span class="language">' +  el.language + '</span>' + '</div>'
});

$('.repository').html(summit);
