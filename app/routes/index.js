module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ message: 'hello index!'});
  });
};