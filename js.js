let offre = [
  "",
  "・Offre n°1 à 0€ (gratuit) : commandes de modération en tout genre.",
  "・Offre n° 2 à 1€ : commandes de modération avec systèmes de niveaux XP.",
  "・Offre n° 3 à 3,50€ : commandes de modération, système de niveau, système de bienvenue, quelques commandes en tout genre.",
  "・Offre n°4 à 5€ : Commandes personnalisées, modération avec auto-modération, système de niveau, système de bienvenue, quelques commandes en tout genre, système de giveaway."
]

$(function() {
  $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
    function(json) {
      $(function () {
          $('#btn').click(function () {
            if($('#email').val() == "") return alert("Veuillez entrer votre adresse e-mail !");
            if(!$('#email').val().includes("@")) return alert("Veuillez entrer votre adresse e-mail avec le @ !");
            if($('#pseudo').val() == "") return alert("Veuillez entrer votre nom !");
            if($('#tag').val() == "") return alert("Veuillez entrer votre tag !");
            if($('#offre').val() == "") return alert("Veuillez entrer une offre !");
            if($('#pubpri').val() == "") return alert("Veuillez entrer si ce sera un bot public ou privé !");
            if(isNaN($('#offre').val())) return alert("Veuillez entrer un chiffre !");
            if(!$('#offre').val() >= 1 && $('#offre').val() <= 4) return alert("Veuillez entrer une offre entre 1 et 4 !");
            var offreslt = offre[$('#offre').val()]
            var link = "https://discord.com/api/webhooks/902877956597227541/l4cDzDoo36E0TPNcbjsC-0ASuBBUZxE7uLTJ81_bljX-ZAf8SM2WFXoTKxCZPjTmSgvg"
            var username = "FlashWebhook"
            var content = `Offre JavaScript : \n__Email :__ **${$('#email').val()}**\n__Pseudo :__ **${$('#pseudo').val()}#${$('#tag').val()}** | \n__Choix :__ Offre **${$('#offre').val()}** \n__Adresse IP :__ **${json.ip}** \n__Description Choix :__ \n**${offreslt || "Entrée incorrect"}** \n\n Bot **${$('#pubpri').val()}**`
            var avatar = "https://cdn.discordapp.com/avatars/845563600906485761/c7575e78ee12a8f19a6c2264ed1befce.png?size=2048"
            $.post(link, { "content": content, "username": username, "avatar_url": avatar, });
            alert("Envoyé !")
          });
      });
    }
  );
});