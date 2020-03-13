// status callback functions

exports.msg = (req, res) => {
  res.status(200).json('Hello World!');
};

exports.id = (req, res) => {
  console.log('ID: ', req.params.id);
  res.status(200).json({message: req.params.id});
};