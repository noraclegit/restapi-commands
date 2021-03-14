const fetch = require('node-fetch')
,{MessageEmbed} = require('discord.js')
module.exports={
    name: 'guessage',
    description: "Guesses an age by a given first name",
    async run(bot,message,args){
        if(!args.length) return;
        const age = await fetch(`https://api.agify.io?name=${args[0]}`).then(res => res.json())
        message.channel.send(new MessageEmbed().setTitle(`Name: ${args[0]}`).setDescription(`Estimated age: ${age.age}`))
    }
}
