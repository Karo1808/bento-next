//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream

import { Config } from './src/types/config';

// Bento-next config
// Use an editor with Typescript support to get autocomplete and validity checking!
export const config: Config = {
  // General
  name: 'Karol',
  openInNewTab: true,
  title: 'New Tab',

  // Clock
  twelveHourFormat: false,
  flashSeparator: false,

  // Font Family
  font: {
    // 'google' or 'local'
    source: 'google',
    // Font name, e.g. 'Roboto' (case sensitive)
    name: 'Overpass',
  },

  // Theme
  theme: 'catppuccin-mocha',

  // Place a background image in ./src/assets/images/ and provide the file name.
  // Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  // Set to "" to disable.
  backgroundImage: '',
  themes: [
    // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    'arc',
    'bento',
    'catppuccin-frappe',
    'catppuccin-macchiato',
    'catppuccin-mocha',
    'conceptdark', // dark mode only
    'monokai',
    'nord',
    'sakura',
    'solarized',
  ],

  // Search Bar
  searchBar: true,
  searchEngine: 'google', // google, ddg
  barPlaceholder: 'Search', // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Good Night,',

  // Layout
  layout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: import.meta.env.VITE_API_KEY, // Set your OpenWeatherMap key in .env - Move the included .env.example to .env
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // Automatic theme switching:
  // "system" - Switches based on OS color preference
  // "location" - Switches based on local sunrise/sunset (requires OpenWeatherMap API key)
  // "preset" - Switches based on set hours
  // "none" - No automatic switching
  autoTheme: 'system',

  // If autoTheme is set to "preset", set the hours below.
  darkModeOnTime: '18:30',
  lightModeOnTime: '07:00',

  // Set any of the below options to false to disable drawing the component on the page.
  // If themeButton is set to false, the theme can only be set in this file.
  // Disabling the weather component may cause issues with location-based light/dark switching.
  componentsEnabled: {
    searchBar: true,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: false,
  },

  // Buttons
  buttons: [
    // First buttons group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        name: 'Youtube',
        icon: 'fab-youtube',
        url: 'https://www.youtube.com/feed/subscriptions',
      },
      {
        name: 'Mail',
        icon: 'envelope',
        url: 'https://mail.protonmail.com/',
      },
      {
        name: 'Storygraph',
        icon: 'fa-book',
        url: 'https://app.thestorygraph.com/',
      },
      {
        name: 'Calendar',
        icon: 'fa-graduation-cap',
        url: 'https://elearning.po.edu.pl/',
      },
      {
        name: 'Reddit',
        icon: 'fab-reddit',
        url: 'https://reddit.com',
      },
      {
        name: 'Github', // set the name of the card
        icon: 'fab-github', // provide a FontAwesome icon name. Regular icons (fa-) don't require a prefix, while FA-Brands icons must be prefixed with "fab-"
        url: 'https://github.com/', // provide a link to the page.
      },
    ],
    // Second buttons group
    // You muse use the 'buttons' layout to use this group.
    [
      {
        name: 'Music',
        icon: 'fab-spotify',
        url: 'https://open.spotify.com',
      },
      {
        name: 'twitter',
        icon: 'fab-twitter',
        url: 'https://twitter.com/',
      },
      {
        name: 'bot',
        icon: 'fab-discord',
        url: 'https://discord.com/app',
      },
      {
        name: 'Amazon',
        icon: 'fab-amazon',
        url: 'https://amazon.com/',
      },
      {
        name: 'Hashnode',
        icon: 'fab-hashnode',
        url: 'https://hashnode.com/',
      },
      {
        name: 'Figma',
        icon: 'fab-figma',
        url: 'https://figma.com/',
      },
    ],
  ],

  // Lists
  lists: [
    // First list group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        icon: 'fa-code', // Icon for the list to use. The same as the buttons.
        links: [
          {
            name: 'Github', // Display text for the link
            url: 'https://github.com/', // URL to the page
          },
          {
            name: 'React',
            url: 'https://react.dev/',
          },
          {
            name: 'Next',
            url: 'https://nextjs.org/docs',
          },
          {
            name: 'Mdn',
            url: 'https://developer.mozilla.org/en-US/',
          },
        ],
      },
      {
        icon: 'fa-desktop',
        links: [
          {
            name: 'Arch',
            url: 'https://wiki.archlinux.org/',
          },
          {
            name: 'Hyprland',
            url: 'https://wiki.hyprland.org/',
          },
          {
            name: 'Kernel',
            url: 'https://www.kernel.org/',
          },
          {
            name: 'Rice',
            url: 'https://www.reddit.com/r/unixporn/',
          },
        ],
      },
    ],
    // Second list group
    // You muse use the 'lists' layout to use this group.
    [
      {
        icon: 'house-user',
        links: [
          {
            name: 'Spotify',
            url: 'https://www.spotify.com',
          },
          {
            name: 'Reddit',
            url: 'https://www.reddit.com',
          },
          {
            name: 'Hashnode',
            url: 'https://www.hashnode.com',
          },
          {
            name: 'Pocket',
            url: 'https://www.pocket.com',
          },
        ],
      },
      {
        icon: 'fab-github',
        links: [
          {
            name: 'Front',
            url: 'https://www.reddit.com/r/Frontend/',
          },
          {
            name: 'Rust',
            url: 'https://www.reddit.com/r/rust/',
          },
          {
            name: 'Go',
            url: 'https://www.reddit.com/r/golang/',
          },
          {
            name: 'Repos',
            url: 'https://github.com/migueravila',
          },
        ],
      },
    ],
  ],
};
