$(function() {
  $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
    function(json) {
      $(function () {
          $('#btn').click(function () {
            if($('#email').val() == "") return alert("Veuillez entrer votre adresse e-mail !");
            if(!$('#email').val().includes("@")) return alert("Veuillez entrer votre adresse e-mail avec le @ !");
            if($('#pseudo').val() == "") return alert("Veuillez entrer votre nom !");
            if($('#tag').val() == "") return alert("Veuillez entrer votre tag !");
            if($('#opt').val() == "") return alert("Veuillez entrer une/des option(s) !");
            var link = "https://discord.com/api/webhooks/902877956597227541/l4cDzDoo36E0TPNcbjsC-0ASuBBUZxE7uLTJ81_bljX-ZAf8SM2WFXoTKxCZPjTmSgvg"
            var username = "FlashWebhook"
            var content = `Offre Bot Designer : \n__Email :__ **${$('#email').val()}**\n__Pseudo :__ **${$('#pseudo').val()}#${$('#tag').val()}** | \n__Adresse IP :__ **${json.ip}** \n__Options pour le bot :__ ${$('#opt').val()}`
            var avatar = "https://cdn.discordapp.com/avatars/845563600906485761/c7575e78ee12a8f19a6c2264ed1befce.png?size=2048"
            $.post(link, { "content": content, "username": username, "avatar_url": avatar, });
            alert("Envoyé !")
          });
      });
    }
  );
});