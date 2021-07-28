import Strings from './stringConstants';

export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  FOUND: 302,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

export const STATUS_CODES_TYPES = {
  SUCCESS: Strings.success,
  REDIRECTION: Strings.redirection,
  ERROR: Strings.error,
  SERVER_ERROR: Strings.error,
};

export const HTTP_STATUS_CODES = {
  [STATUS_CODES.OK]: {
    type: STATUS_CODES_TYPES.SUCCESS,
    message: Strings.success,
  },
  [STATUS_CODES.CREATED]: {
    type: STATUS_CODES_TYPES.SUCCESS,
    message: Strings.successfullyCreated,
  },
  [STATUS_CODES.ACCEPTED]: {
    type: STATUS_CODES_TYPES.SUCCESS,
    message: Strings.success,
  },
  [STATUS_CODES.FOUND]: {
    type: STATUS_CODES_TYPES.REDIRECTION,
    message: Strings.redirection,
  },
  [STATUS_CODES.BAD_REQUEST]: {
    type: STATUS_CODES_TYPES.ERROR,
    message: Strings.errorMessages.GENERAL_ERROR.MESSAGE,
  },
  [STATUS_CODES.UNAUTHORIZED]: {
    type: STATUS_CODES_TYPES.ERROR,
    message: Strings.errorMessages.UNAUTORIZED.MESSAGE,
  },
  [STATUS_CODES.FORBIDDEN]: {
    type: STATUS_CODES_TYPES.ERROR,
    message: Strings.errorMessages.FORBIDDEN.MESSAGE,
  },
  [STATUS_CODES.NOT_FOUND]: {
    type: STATUS_CODES_TYPES.ERROR,
    message: Strings.errorMessages.REQUEST_NOT_FOUND.MESSAGE,
  },
  [STATUS_CODES.METHOD_NOT_ALLOWED]: {
    type: STATUS_CODES_TYPES.ERROR,
    message: Strings.errorMessages.METHOD_NOT_ALLOWED.MESSAGE,
  },
  [STATUS_CODES.REQUEST_TIMEOUT]: {
    type: STATUS_CODES_TYPES.ERROR,
    message: Strings.errorMessages.REQUEST_TIMEOUT.MESSAGE,
  },
  [STATUS_CODES.CONFLICT]: {
    type: STATUS_CODES_TYPES.ERROR,
    message: Strings.errorMessages.GENERAL_ERROR.MESSAGE,
  },
  [STATUS_CODES.INTERNAL_SERVER_ERROR]: {
    type: STATUS_CODES_TYPES.SERVER_ERROR,
    message: Strings.errorMessages.GENERAL_ERROR.MESSAGE,
  },
  [STATUS_CODES.BAD_GATEWAY]: {
    type: STATUS_CODES_TYPES.SERVER_ERROR,
    message: Strings.errorMessages.GENERAL_ERROR.MESSAGE,
  },
  [STATUS_CODES.SERVICE_UNAVAILABLE]: {
    type: STATUS_CODES_TYPES.SERVER_ERROR,
    message: Strings.errorMessages.GENERAL_ERROR.MESSAGE,
  },
  [STATUS_CODES.GATEWAY_TIMEOUT]: {
    type: STATUS_CODES_TYPES.SERVER_ERROR,
    message: Strings.errorMessages.GENERAL_ERROR.MESSAGE,
  },
  null: {
    type: STATUS_CODES_TYPES.SERVER_ERROR,
    message: Strings.errorMessages.GENERAL_ERROR.MESSAGE,
  },
  undefined: {
    type: STATUS_CODES_TYPES.SERVER_ERROR,
    message: Strings.errorMessages.GENERAL_ERROR.MESSAGE,
  },
};
