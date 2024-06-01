const fs = require('fs')
const chalk = require('chalk')

global.owner = "6282389231318"
global.ownerStore = "6282389231318"
global.namabot = "FluXzBotz⚡"
global.namaCreator = "FluXz Official"
global.namaStore = "FluXzBotz⚡"
global.autoJoin = false
global.antilink = false
global.anticall = true
global.themeemoji = '🪀'
global.versisc = 'Private'
global.namasc = 'Private'
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.apitokendo = 'dop_v1_9a0906d0b316369de5ba2eec0ef74a045e8e2f22567eff00876bd2194132def1'
global.apilinode = '-'
//SERVER 1
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
//SERVER 2
global.domainn = '-' // Isi Domain Lu
global.apikeyy = '-' // Isi Apikey Plta Lu
global.capikeyy = '-' // Isi Apikey Pltc Lu
//SERVER 3
global.domainnn = '-'
global.apikeyyy = '-'
global.capikeyyy = '-'
//BATAS
global.domainotp = "https://otpku.id/api/json.php"
global.apikeyotp = "SzrgDHb1d0Ef7OiUpkXABLWwmTV5Z2"
global.signature = "hash_hmac('sha256', $merchantCode.$channel.$merchantRef, $privateKey)"
global.merchant = "INV55567"
//MAU PEDIA
global.api_key = "iTn0HbFfeqHVgSEVVFGfRd6z26QuDntcqh0gWnExriecgS2F2PzHojNrgOySz85S"//@zallDev
global.api_id = "s0IJboQFZHznkYQ0"//@zallDev
global.secret = "h&gg#RafatharOffcial976*#"//@zallDev
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.packname = ""
global.author = "Sticker By FluXz Official⚡"
global.jumlah = "5"
global.youtube = "**"
global.grup = "*https://chat.whatsapp.com/KP3ejrW5WsgIYCk8uYNtHO*"
global.telegram = "*https://t.me/MinFluxz*"
global.instagram = "*https://instagram.com/fluxzhost45*"
global.harga1 = "15k"
global.spekvps1 = "8gb Core 4"
global.vps1 = "Digital Ocean"
global.harga2 = "20k"
global.spekvps2 = "8gb Core 4"
global.vps2 = "Linode"
global.harga3 = "25k"
global.spekvps3 = "16gb Core 6"
global.vps3 = "Linode"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})