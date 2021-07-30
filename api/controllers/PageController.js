/**
 * PageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  homePage: async function (req, res) {
    return res.view("pages/production_home", {
      layout: "layouts/production_layout"
    })
  }
}
