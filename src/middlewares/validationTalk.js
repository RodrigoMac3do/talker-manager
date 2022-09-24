const HTTP_BAD_REQUEST_STATUS = 400;

const validateRate = (rate) => {
  if (rate === undefined) {
    throw new Error('O campo "rate" é obrigatório');
  }
  const valid = /^[1-5]{1,1}$/.test(rate);
  if (!valid) {
    throw new Error('O campo "rate" deve ser um inteiro de 1 à 5');
  }
};

const validateWatchedAt = (watchedAt) => {
  if (!watchedAt) {
    throw new Error('O campo "watchedAt" é obrigatório');
  }
  const valid = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(
      watchedAt,
    );
  if (!valid) {
    throw new Error('O campo "watchedAt" deve ter o formato "dd/mm/aaaa"');
  }
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "talk" é obrigatório',
    });
  }
  try {
    validateRate(talk.rate);
    validateWatchedAt(talk.watchedAt);
  } catch (error) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: error.message });
  }
  next();
};

module.exports = validateTalk;
