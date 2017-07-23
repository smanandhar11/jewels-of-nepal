export default ($mdThemingProvider) => {

  $mdThemingProvider.definePalette('sujanPrimary', {

    '50': 'E2E6E8',
    '100': 'FFFFFF',
    '200': '8898A0',
    '300': '5867FA',
    '400': '34505E',
    '500': '106cc8',
    '600': '0E2C3B',
    '700': '0C2532',
    '800': '091F2A',
    '900': '05131C',
    'A100': '5BB2FF',
    'A200': '289AFF',
    'A400': '0081F4',
    'A700': '0073DB',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
      '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('sujanPrimary')
}
