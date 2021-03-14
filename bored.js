const fetch = require('node-fetch')
,{MessageEmbed} = require('discord.js')
module.exports={
    name: 'bored',
    description: "Get an activity to fight your boredom", 
    aliases: ["boredom","brdm"],
    async run(bot,message,args){
        const res = await fetch(`https://www.boredapi.com/api/activity`).then(activ => activ.json())
        message.channel.send(new MessageEmbed().setColor("RANDOM").setTitle(res.activity).setDescription(`type: ${res.type}`))
    }
}
