import CONFIG from "../external/Constants";

/**
 * This class is used to get the data from the file stored on the amazon bucket
 */
class Reader {
  constructor() {
    // We have to declare those function in order to use them outside of the class
    this.getJsonFromAWS  = this.getJsonFromAWS.bind(this);
  }

  /**
   * This function simply get the data from the amazon bucket
   * @returns {Promise<Response | never>} A JSON value is returned once the request is finished
   */
  getJsonFromAWS() {
    return fetch(CONFIG.awsBucket)
        .then((Response)=> Response.json())
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          console.error('Request failure: ', error);
        });
  }
}

export default Reader;