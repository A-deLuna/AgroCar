var express = require('express');
var router = express.Router();
var Report = require('../models/Report');

router.get('/', function(req, res) {
  Report.find({}, function(err, reports) {
    res.send(JSON.stringify(reports[0].readings));
  });
});

router.post('/', function(req, res) {
  Report.find({}, function(err, reports) {
    reports[0].readings.push({
      lat: req.body.lat,
      lng: req.body.lng,
      humidity: req.body.humidity
    });
    reports[0].save(function(err) {
      if(err) {
        console.log(err);
        return err;
      }
      res.send('ok');
    })
  })
});

router.post('/:id', function(req, res) {
  Report.findOne({_id: req.params.id}, function(err, report) {
    if(err){
      console.log(err);
      return err;
    }
    report.save(function(err) {
      if(err) {
        console.log(err);
        return err;
      }
    });
  });
});

module.exports = router;
