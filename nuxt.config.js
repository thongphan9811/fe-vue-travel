
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet' , href:'/css/open-iconic-bootstrap.min.css'},
      { rel: 'stylesheet' , href:'/css/animate.css'},
      { rel: 'stylesheet' , href:'/css/owl.carousel.min.css'},
      { rel: 'stylesheet' , href:'/css/owl.theme.default.min.css'},
      { rel: 'stylesheet' , href:'/css/magnific-popup.css'},
      { rel: 'stylesheet' , href:'/css/aos.css'},
      { rel: 'stylesheet' , href:'/css/ionicons.min.css'},
      { rel: 'stylesheet' , href:'/css/flaticon.css'},
      { rel: 'stylesheet' , href:'/css/icomoon.css'},
      { rel: 'stylesheet' , href:'/css/style.css'},
      { rel: 'stylesheet' , href:'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900'},
      { rel: 'stylesheet' , href:'https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i'},
       { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/lib/css/mdb.min.css'
  ],

  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
    { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
    { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'mdbvue/nuxt',
    '@nuxtjs/axios'
  ],
  mdbvue: {
    icons: false, // FA5
    roboto: false, // font Roboto
    css: false, // MDB CSS
    bootstrap: false // Bootstrap CSS
    },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
