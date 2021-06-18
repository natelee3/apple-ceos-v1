'use strict';

const express = require('express');
const router = express.Router();
const ceos = require('../model/db')

router.get('/:ceoSlug?', (req, res) => {
    if (!!req.params.ceoSlug) {
        const theCeo = ceos.find(ceo => ceo.slug === req.params.ceoSlug)
        res.render('template', {
            locals: {
                title: theCeo.name,
                theCeo
            },
            partials: {
                body: 'partials/ceo-details'
            }
        })
    } else {
        res.render('template', {
            locals: {
                title: 'CEO List',
                data: ceos
            },
            partials: {
                body: 'partials/ceo-list'
            }
        })
    }
})

module.exports = router