export default (req, res, next) => {
  req.HTTP_STATUS_MSG = HTTP_STATUS_MSG;

  res.forbidden = (message) => handleResponse(res, message, "forbidden");

  res.badRequest = (message) => handleResponse(res, message, "badRequest");

  res.notFound = (message) => handleResponse(res, message, "notFound");

  res.success = (body) => handleResponse(res, body, "success");

  res.successCreated = (message) =>
    handleResponse(res, message, "successCreated");

  res.internalError = (message) =>
    handleResponse(res, message, "internalError");

  res.error = (error) => handleErrors(res, error);

  next();
};

const HTTP_STATUS_MSG = {
  forbidden: "Forbidden",
  badRequest: "Bad Request",
  notFound: "Not Found",
  internalError: "Internal Error",
  success: "Success",
  successCreated: "Successfully Created",
};

const typesResponses = {
  forbidden: {
    status: 403,
    message: "Forbidden",
  },
  badRequest: {
    status: 400,
    message: "Bad Request",
  },
  notFound: {
    status: 404,
    message: "Not Found",
  },
  internalError: {
    status: 500,
    message: "Internal Error",
  },
  success: {
    status: 200,
    message: "Success",
  },
  successCreated: {
    status: 201,
    message: "Successfully Created",
  },
};

const handleResponse = (res, message, type) => {
  const response = message ? message : typesResponses[type].message;
  res.status(typesResponses[type].status);
  res.send(response);
};

const handleErrors = (res, error) => {
  if (error.includes("jwt")) {
    res.forbidden();
  } else if (error.includes("SQL")) {
    res.internalError();
  } else if (error === "404") {
    res.notFound();
  } else if (error === "500") {
    res.internalError();
  } else if (error === "403") {
    res.forbidden();
  } else if (error.includes("ER_")) {
    res.badRequest();
  } else {
    res.badRequest(error);
  }
};
