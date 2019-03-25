# Ditto Music Console Application
### Written in Node.JS

> note: There are a couple of things missing due to a time limit
> Namely, Unit Tests, and better rigor.  So, if I would have had enough time  I would have completed a short set of tests by asserting the following: 

> -> a partner, and a date are required

> -> that the keyword 'contract' is required to prefix the command 

## First Thing To Do: 

> Clone the repository

## Installation

```bash
npm install
```

## Execute a search command: 
```bash
node app.js contract --partner="iTunes" --date="2011-03-01"

```
### What happens if you don't include any options ? 

```bash
node app.js contract
```

> And you get this : 

```bash
app.js contract

get info about a contract

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --partner  Partner Name                                    [string] [required]
  --date     Date partner became active                      [string] [required]

```

### The system knows what options are required, and like a good console app it shows you what it expects.
