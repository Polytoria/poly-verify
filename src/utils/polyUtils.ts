import axios from 'axios';

/**
 * polyUtils
 *
 * For sending Polytoria APIs
 *
 */
export default class polyUtils {
  /**
   * getUserInfoFromUsername Function
   *
   * @summary Get User info from specific Username
   *
   * @param {string} username User's username
   * @return {Promise<any>} User info
   */
  public static async getUserInfoFromUsername(username: string): Promise<any> {
    const response = await axios.get('https://api.polytoria.com/v1/users/getbyusername?username=' + username, {
      validateStatus: () => true,
    });

    return response;
  }

  /**
   * getUserInfoFromID Function
   *
   * @summary Get User info from specific ID
   *
   * @param {number} id User ID
   * @return {Promise<any>} User info
   */
  public static async getUserInfoFromID(id: number): Promise<any> {
    const response = await axios.get('https://api.polytoria.com/v1/users/user?id=' + id, {
      validateStatus: () => true,
    });

    return response;
  }
}
