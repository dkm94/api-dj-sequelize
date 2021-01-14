const { NOT_FOUND } = require("../status_codes");

module.exports = class NotFoundError extends Error {
  constructor(message, description, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }

    //Throw une nouvelle erreur dans le controleur
    this.name = `NotFoundError`;
    // Statut de l'erreur "NotFoundError" (dans le fichier des status code)
    this.status = NOT_FOUND;
    // Premier paramètre message d'erreur
    this.message = message;
    // Précision sur l'erreur pour l'user
    this.description = description;
  }
};
