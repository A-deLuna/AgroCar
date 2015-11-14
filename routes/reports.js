var express = require('express');
var router = express.Router();
var Report = require('../models/Report');

router.get('/', function(req, res) {
  Report.find({}, function(err, reports) {
    res.send(JSON.stringify(reports));
  });
});

router.post('/', function(req, res) {
  var report = new Report();
  report.save(function(err, rep) {
    if(err) {
      console.log(err);
      return err;
    }
    res.send(JSON.stringify(rep));
  });
});

router.post('/:id', function(req, res) {
  Report.findOne({_id: req.params.id}, function(err, report) {
    if(err){
      console.log(err);
      return err;
    }
    report.readings.push(req.body.reading);
    report.save(function(err) {
      if(err) {
        console.log(err);
        return err;
      }
    });
  });
});

module.exports = router;
