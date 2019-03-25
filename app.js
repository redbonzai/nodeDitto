const express = require('express');
const path = require('path');
const yargs = require('yargs');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const contracts = require('./components/musicContracts')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/**
 * Command that retrieves contract data with 'contract' key word
 */
yargs.command({
    command: 'contract',
    describe: 'get info about a contract',
    builder: {
        partner: {
            describe: 'Partner Name',
            demandOption: true,
            type: 'string'
        },
        date: {
            describe: 'Date partner became active',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        contracts.getContract(argv.partner, argv.date)
    }
})

console.log(yargs.argv)

module.exports = app;
