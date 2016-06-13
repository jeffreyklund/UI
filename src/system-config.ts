/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'moment':             'vendor/moment',
  'ng2-bootstrap':      'vendor/ng2-bootstrap',
  '@angular2-material': 'vendor/@angular2-material',
  'ng2-material':       'vendor/ng2-material',
  'angular2-modal':     'vendor/angular2-modal'
};

/** User packages configuration. */
const packages: any = {
  'moment':                             { defaultExtension: 'js', main: 'moment.js' },
  'ng2-bootstrap':                      { defaultExtension: 'js', main: 'ng2-bootstrap.js'},
  'angular2-modal':                     { defaultExtension: 'js', main: 'index.js'},
  'ng2-material':                       { defaultExtension: 'js', main: 'index.js'},
  'angular2-modal/platform-browser':    { defaultExtension: 'js', main: 'index.js'},
  'angular2-modal/plugins/bootstrap':   { defaultExtension: 'js', main: 'index.js'},
  'angular2-modal/plugins/vex':         { defaultExtension: 'js', main: 'index.js'},
  'angular2-modal/plugins/js-native':   { defaultExtension: 'js', main: 'index.js'},
  '@angular2-material/core':            { defaultExtension: 'js', format: 'cjs', main: 'core.js' },
  '@angular2-material/checkbox':        { defaultExtension: 'js', format: 'cjs', main: 'checkbox.js' },
  '@angular2-material/radio':           { defaultExtension: 'js', format: 'cjs', main: 'radio.js' },
  '@angular2-material/progress-bar':    { defaultExtension: 'js', format: 'cjs', main: 'progress-bar.js' },
  '@angular2-material/progress-circle': { defaultExtension: 'js', format: 'cjs', main: 'progress-circle.js' },
  '@angular2-material/sidenav':         { defaultExtension: 'js', format: 'cjs', main: 'sidenav.js' },
  '@angular2-material/toolbar':         { defaultExtension: 'js', format: 'cjs', main: 'toolbar.js' },
  '@angular2-material/button':          { defaultExtension: 'js', format: 'cjs', main: 'button.js' },
  '@angular2-material/card':            { defaultExtension: 'js', format: 'cjs', main: 'card.js' },
  '@angular2-material/grid-list':       { defaultExtension: 'js', format: 'cjs', main: 'grid-list.js' },
  '@angular2-material/icon':            { defaultExtension: 'js', format: 'cjs', main: 'icon.js' },
  '@angular2-material/input':           { defaultExtension: 'js', format: 'cjs', main: 'input.js' },
  '@angular2-material/list':            { defaultExtension: 'js', format: 'cjs', main: 'list.js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
