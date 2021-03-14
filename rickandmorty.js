const fetch = require('node-fetch')
,{MessageEmbed} = require('discord.js')
module.exports={
    name: 'rickandmorty',
    aliases: ["rickmorty","rick&morty","ricknmorty","rick","morty","rnm"],
    description: "Search any Rick And Morty character",
    async run(bot,message,args){
        const res = await fetch(`https://rickandmortyapi.com/api/character?name=${args.join("%20")}`).then(rnm => rnm.json())
        if(res.error == "There is nothing here") return message.channel.send(res.error)
        const firstres = res.results[0]
        const epcount = []
        firstres.episode.forEach(ep =>{
            const e = ep.slice("https://rickandmortyapi.com/api/episode/".length)
            
            epcount.push(`Episode ${e}`)
        })
        message.channel.send(new MessageEmbed()
                            .setTitle(firstres.name)
                             .setDescription(`Status: ${firstres.status} \n Species: ${firstres.species} \n Gender: ${firstres.gender} \n Episodes: ${epcount.join(",")} \n Universe: ${firstres.location.name}`)
                             .setThumbnail(firstres.image)
                             .setFooter("https://rickandmortyapi.com")
        )
    }
}
