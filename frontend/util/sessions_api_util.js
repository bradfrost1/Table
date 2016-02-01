var CurrentUserActions = require('../actions/current_user_actions');

var SessionsApiUtil = {
  login: function (credentials, success) {
    $.ajax({
      url: '/api/sessions',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }

    });
  },

  logout: function () {
    $.ajax({
      url: '/api/sessions',
      type: 'DELETE',
      dataTpye: 'json',
      success: function () {
        CurrentUserActions.receiveCurrentUser({});
        console.log("logged out");
      }
    });
  },

  fetchCurrentUser: function (cb) {
    $.ajax({
      url: '/api/sessions',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        console.log("fetched current user!");
        CurrentUserActions.receiveCurrentUser(currentUser);
        cb && cb(currentUser);
      }
    });
  }
};

module.exports = SessionsApiUtil;