export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
              }
            }
          }
        ]
      },
      {
        path: '360-photos',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: '360 Photos', // menu title
            icon: 'ion-ios-world-outline', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'promo-banner',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Promo Banner', // menu title
            icon: 'ion-ios-world-outline', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'menu-links',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Menu Links', // menu title
            icon: 'ion-ios-world-outline', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'vid-gallery',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Video Gallery', // menu title
            icon: 'ion-ios-world-outline', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'photo-gallery',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Photo Gallery', // menu title
            icon: 'ion-ios-world-outline', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'map-directions',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Map & Directions', // menu title
            icon: 'ion-ios-world-outline', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'info-links',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Information & Links', // menu title
            icon: 'ion-ios-world-outline', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
    ]
  }
];
