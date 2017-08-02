const { Client } = require('discord.js')
const client = new Client()
let bmercy = {
    token: "",
    status: 0
}
function login(tokenz){
    client.login(tokenz)
    bmercy.token = tokenz
    client.on('error', error => { 
        console.log(error)
        bmercy.status = 1
        return;
    })
    client.on('warn', error => { 
        console.log(error)
        bmercy.status = 1
        return;
    })
    client.on('ready', () => {
        console.log("Logged in, lets banne shall we ;)")
    })

    return 
}
function ban(id, guildid){
    
    if(bmercy.token === ""){
        throw new Error("No Token found")
        
    } else {
        if(bmercy.status === 1) return new Error("Status = 1 meaning Token is not correct!")
        if(!id) return new Error("User ID is not defined!")
        if(!client.guilds.get(guildid)) return new Error("I am not in this guild!")
        if(!client.guilds.get(guildid).members.get(id).bannable) return new Error('I don\'t have permission to ban this user!')
        client.guilds.get(guildid).member(id).ban()
        console.log("BANNE " + client.users.get(id).tag + " FROM " + client.guilds.get(guildid).name + "!!!!")
    }

}

module.exports.banne = ban;
module.exports.login = login;
