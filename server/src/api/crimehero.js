const express = require('express');
const router = express.Router();
const config = require('../config');
const {getHeroName, isCodeValid} = require('../service');
const winston = require('./../logger/winston');

router.get('/status', (req, res) => res.send({status: 'UP'}));

router.get('/hero', async (req, res) => {
  try {
    const clientId = req.headers['x-client-id'];
    if (clientId && config.clientId.includes(clientId)) {
      req.clientId = clientId;
      winston.info(`[clientId]: => ${clientId}`);
      const {code} = req.query;
      if (code && isCodeValid(code)) {
        winston.debug(`Request query param => ${req.query.code}`);
        const heroName = getHeroName(code);
        winston.debug(
          `Hero name ==> ${heroName} for client Id ==> ${clientId}`
        );
        if (heroName) {
          res.status(200).send({hero: heroName});
        } else {
          throw Error('Hero not found with this code.');
        }
      } else {
        throw new Error('Query param code is not valid.');
      }
    } else {
      throw new Error('Header client id not found.');
    }
  } catch (error) {
    winston.error(`Get Hero Error: ${error}`);
    res.status(403).send({error: String(error.message)});
  }
});

module.exports = router;
