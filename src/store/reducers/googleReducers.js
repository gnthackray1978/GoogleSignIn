
export default (state = {
  GoogleApiParams : {
    scriptId : "",
    clientId : '',
    scopes : 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/spreadsheets',
    cookie_policy: 'single_host_origin',
    login_hint: 'login hint',
    fetch_basic_profile : true,
    uxMode: 'popup',
    accessType: 'online',

    type: 'button',
    tag: 'button',
    buttonText: 'Sign in with Google',
    logoutButtonTest : 'Logout',
    prompt: '',
    disabledStyle: {
      opacity: 0.6
    },
    icon: true,
    theme: 'light',
    jsSrc: 'https://apis.google.com/js/api.js'
  },
  GoogleToken :{
    googleId :undefined,
    tokenObj :undefined,
    tokenId :undefined,
    accessToken :undefined,
  },
  profileObj : {
    name :'unset',
    email :'unset',
    giveName :'unset',
    familyName :'unset'
  },
  googleApiLoggedIn : false,
  responseType : '',
  LogInDetailsVisible : false
}, action) => {

  switch (action.type) {

    case "SET_LOGINLOADVISIBLE":
      return {
        ...state,
        LogInDetailsVisible : action.visible,
      };

      case "SET_PROFILE":
        return {
          ...state,
          profileObj : action.profileObj,
        };

      case "SET_GOOGLETOKEN":
        return {
          ...state,
          GoogleToken : action.GoogleToken,
        };

      case "SET_GOOGLEAPIACTIVE":
        return {
          ...state,
          googleApiLoggedIn : action.googleApiLoggedIn,
        };

      case "SET_GOOGLEBATCH_PROFILE_ISACTIVE_TOKEN":
          return {
            ...state,
            googleApiLoggedIn : action.googleApiLoggedIn,
            GoogleToken  : action.GoogleToken,
            profileObj  : action.profileObj,
          };
      default:
          return state;

    }
};
