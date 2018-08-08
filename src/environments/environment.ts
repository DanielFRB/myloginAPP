// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyClh8FBSIg1TbC1hA8q9J620o1dPR8O9Rs",
    authDomain: "myloginapp-78c3d.firebaseapp.com",
    databaseURL: "https://myloginapp-78c3d.firebaseio.com",
    projectId: "myloginapp-78c3d",
    storageBucket: "myloginapp-78c3d.appspot.com",
    messagingSenderId: "189038002410"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
