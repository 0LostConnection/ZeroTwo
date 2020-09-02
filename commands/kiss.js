module.exports = {
    name: 'kiss',
    description: 'kiss',
    execute(message) {
      let id = 437249534096048131 || 588128863146606604;
      //let id = 614870175396659201
          if (message.author.id == id) {
            const embed = {
              "description": "Darling, eu te amo! 😍",
              "color": 14331817,
              "image": {
                "url": "https://imgur.com/IMxblW4.gif"
//https://imgur.com/IMxblW4
//https://imgur.com/FmZqVbJ.gif
              }
            };
            message.channel.send({ embed });
          } else{
            const embed = {
              "description": "Sai daqui! Você não é meu Darling! Cade ele?!😡",
              "color": 14331817,
              "image": {
                "url": "https://imgur.com/eZtXc6E.gif"
              }
            };
              message.channel.send({ embed });
          }
        }
    }
 