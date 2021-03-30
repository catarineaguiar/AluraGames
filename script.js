var listafilmes = [["League of Legends", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbHbFqB7oGYZjRIyMQF88P19hffbfSdoxJaZ42aVEqdnqikyc0GJi2A70kuxB4rn8MRc&usqp=CAU", "https://na.leagueoflegends.com/pt-br/"], ["Pokemon GO", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadYWNvfA_P1Ycxfw27u-2hCM07nAZqOILmQBJRKmHuWQuvCpFZttpNRENzD6Yf2h9htE&usqp=CAU", "https://pokemongolive.com/pt_br/"], ["World of Warcraft", "https://cdn.discordapp.com/attachments/824667103424282624/825156582509117480/2Q.png", "https://worldofwarcraft.com/pt-br/"]]

for (var i = 0; i <= 2; i++) {
  document.write(`<a href="${listafilmes[i][2]}" target="_blank" title="${listafilmes[i][0]}"><img src="${listafilmes[i][1]}"></a>`)
}