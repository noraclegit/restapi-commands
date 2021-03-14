const fetch = require('node-fetch')
,{MessageEmbed} = require('discord.js')
module.exports={
    name: 'name',
    aliases: array of aliases,
    description: description,
    async run(bot,message,args){
        const res = await fetch(`apilink`).then(response => response.json())
        //code
    }
}
