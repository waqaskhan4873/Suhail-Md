const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_22_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICA5MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFlbVNiN2k2ODJjazBXYXNtdHc0SGJZelhzS0lSaTIzRE41THEwSXlHS2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjl3YjZPWnZ3UzZDdi1NLUcxd3VzbndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmE3YWYxY2MtNGNmYy00ZDdkLTlkMzUtYWY5MDEwNzg5OTIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMjEzLFxuICAgICAgMTU4LFxuICAgICAgMTY0LFxuICAgICAgMjA1LFxuICAgICAgMTg1LFxuICAgICAgOTksXG4gICAgICAxOTAsXG4gICAgICA5LFxuICAgICAgMTAxLFxuICAgICAgNzIsXG4gICAgICAxNjYsXG4gICAgICA1MCxcbiAgICAgIDk5LFxuICAgICAgMTk3LFxuICAgICAgMTk5LFxuICAgICAgNDIsXG4gICAgICAxMjYsXG4gICAgICAxMzksXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxNDIsXG4gICAgICAxMTUsXG4gICAgICA5OCxcbiAgICAgIDI5LFxuICAgICAgOSxcbiAgICAgIDEwMSxcbiAgICAgIDIxMyxcbiAgICAgIDE2OSxcbiAgICAgIDIwOCxcbiAgICAgIDksXG4gICAgICAzMixcbiAgICAgIDEwMyxcbiAgICAgIDc0LFxuICAgICAgNzMsXG4gICAgICA0NixcbiAgICAgIDI0NixcbiAgICAgIDQyLFxuICAgICAgMTc0LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEdGSjJFNkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ2NzAwMDYxNjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM4ODY5Mzg3NzE0NTk1OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BqQjdkTUZFS1NjMDdRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNFUzR1FoMS80UVJkc2Z4bW80b25FVXpyc0VZM01kTnF3YlJDbU9kN0FSUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyWnB5VjBRd1ZQNEVGU0x3U0thVGtxSW9KQ3dNTlgvUjhJSVV3dHlSRG8xeEVIN0dFaVU4ZFFxaGxBSkg4ZGZ5RnRDbmM5c21sT0NMMXRIbkR0VCtDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVbjVTREt5YklYZW5RbXNRM24xUXo1bTZBcTh2WURJZXJFNGRrbmVqOWFzMzlRcTJ0N3pTamZvemRrTmFRdXBxS2RQaHBSaS9TRWRKaDRrWjlhZHNCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NjcwMDA2MTY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTAyODEzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJLaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQktpLmpzb24iOiAie1wia2V5RGF0YVwiOlwidE9IZjd4UENnK1hTc08vcW1jZEZ1Umt2aytSUHgvRyswQU00ZUg2YlM4OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTE4MDM1MTkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
