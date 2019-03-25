const fs = require('fs')
const chalk = require('chalk')

const getContract = (partner, date) => {
    const contracts = loadContracts()
    const contract = contracts.find((contract) => {
        if (partner === 'YouTube') {
            return contract.partners.streaming === partner && contract.startDate === date

        } else {
            return contract.partners.download === partner && contract.startDate === date
        }
    })

    if (contract) {
        console.log(
            chalk.blueBright.inverse(
                JSON.stringify(contract, undefined, 2)
            )
        )

    } else {
        console.log(chalk.red.inverse('No contract was found with that partner, date combination'))
    }
}

const loadContracts = () => {
    try {
        const dataBuffer = fs.readFileSync(__dirname +'/data.json')
        const dataJSON = dataBuffer.toString()

        return JSON.parse(dataJSON)
    } catch (err) {
        console.log(err)
        return []
    }
}

module.exports = {
    getContract: getContract
}
