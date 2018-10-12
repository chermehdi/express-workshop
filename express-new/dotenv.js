const path = require("path")
const fs = require('fs')

const dotEnvFile = path.join(__dirname, '.env')

const fileContent = fs.readFileSync(dotEnvFile, 'utf8')

let keyValue = fileContent.split('\n')

keyValue.forEach(pair => {
  let splited = pair.split('=')
  process.env[splited[0]] = splited[1]
})