"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var articlesInfo = {
  'learn-react': {
    upvotes: 0
  },
  'learn-node': {
    upvotes: 0
  },
  'my-thoughts-on-resumes': {
    upvotes: 0
  }
};
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.post('/api/articles/:name/upvote', function (req, res) {
  var artcileName = req.params.name;
  articlesInfo[artcileName].upvotes += 1;
  res.status(200).send("".concat(artcileName, " now has ").concat(articlesInfo[artcileName].upvotes, " upvotes"));
});
app.listen(8000, function () {
  return console.log('Listening on port 8000');
});