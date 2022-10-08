/**
 * @typedef FootballPlayer
 * @type {object}
 * @property {string} id - player's id.
 * @property {string} name - player's name.
 * @property {PlayerPositionsEnum} position - player's position.
 * @property {number} teamid - player's team id.
 */

/**
 * @typedef FootballTeam
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} name - your name.
 */


/**
 * Enum for player positions.
 * @readonly
 * @enum {string}
 */
const PlayerPositionsEnum = {
    Forward: "Forward",
    Midfielder: "Midfielder",
    Defender: "Defender",
    Goalkeeper: "Goalkeeper"
};
/**
 * @typedef userObject
 * @type {object}
 * @property {string} first - first name.
 * @property {string} last - last name.
 * @property {string} email
 * @property {string} password
 * @property {Array} playerIds 
 */

exports.PlayerPositionsEnum = PlayerPositionsEnum;