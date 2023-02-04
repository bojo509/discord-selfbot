const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", async () => {
    console.log("Ready!");
    let statusIndex = 0;
    setInterval(async function() {
        let statusArray = [
            { name: "Example Status 1", type: "PLAYING" },
            { name: "Example Status 2", type: "PLAYING" }
        ];
        let status = statusArray[statusIndex % statusArray.length];
        await client.user.setPresence({ activity: { name: status.name, type: status.type } });
        console.log(`Status set to ${status.name}`);
        statusIndex++;
    }, 10000);
});

client.login("NjI3NDc5ODk4MTM0NTQ0Mzk1.G2RG5l.Q_FJ79fqSJFCkKFvQsiDz0Q9ske3CUkCv_IlTo");