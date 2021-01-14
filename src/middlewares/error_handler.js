const { SERVER_ERROR } = require("../helpers/status_codes");

// eslint-disable-next-line no-unused-vars
module.exports = (error, request, response, next) => {
  const { errors } = error;
  let { status, message, description } = error;

  //En cas d'erreur serveur (SERVER_ERROR, statut 500), on paramètre les messages d'erreur.
  if (!status) {
    status = SERVER_ERROR;
    message = "Oups ! Quelque chose ne fonctionne pas !";
    description =
      "Le serveur rencontre un problème technique. Veuillez réessayer plus tard.";
  }

  if (error.name === "ValidationError") {
    response.status(status).json({
      message,
      errors,
    });
  } else {
    response.status(status).json({
      message,
      description,
    });
  }
};
