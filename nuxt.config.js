const enviroments = (env) => {
    const staging = {
        NUXT_ENV_AUTH_URL: 'https://90h9amptse.execute-api.us-east-1.amazonaws.com',
        NUXT_ENV_BACKEND_URL: 'https://eggklqfrs5.execute-api.us-east-1.amazonaws.com',
        NUXT_ENV_SIGN_URL: 'https://532at82f11.execute-api.us-east-1.amazonaws.com',
        AURO_REDIRECT_URL: 'http://srvpasivosqa/id=gsf,Interdin,LCPasivos',
    }

    const uat = {
        NUXT_ENV_AUTH_URL: 'https://d55nzex8e7.execute-api.us-east-1.amazonaws.com',
        NUXT_ENV_BACKEND_URL: 'https://rvuoteepnj.execute-api.us-east-1.amazonaws.com',
        NUXT_ENV_SIGN_URL: 'https://6f7ogjqyud.execute-api.us-east-1.amazonaws.com',
        AURO_REDIRECT_URL: 'http://srvpasivosgsf/id=gsf',
    }

    const production = {
        NUXT_ENV_AUTH_URL: 'https://1mfqxergc3.execute-api.us-east-1.amazonaws.com',
        NUXT_ENV_BACKEND_URL: 'https://5fn0wwlv59.execute-api.us-east-1.amazonaws.com',
        NUXT_ENV_SIGN_URL: 'https://woyaiu44o6.execute-api.us-east-1.amazonaws.com',
        AURO_REDIRECT_URL: 'http://srvpasivosn/auro?id=Diners,Interdin,PasDiners',
    }

    switch (env) {
        case 'staging':
            return staging
        case 'uat':
            return uat
        case 'production':
            return production

        default:
            break
    }
}

const enviroment = enviroments(process.env.ENV)

console.log(enviroment)

export default {
    env: {
        ...enviroment
    },
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '',
        htmlAttrs: {
            lang: 'es'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg', hid: 'icon' },
            { rel: 'stylesheet', type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/css/custom.css", "~/assets/css/bootstrap/bootstrap.min.css"],
    // script: [{
    //     src: "~/assets/css/bootstrap/bootstrap.bundle.min.js",
    //     type: "text/javascript"
    // }],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: enviroment.NUXT_ENV_BACKEND_URL
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    publicRuntimeConfig: {
        axios: {
            browserBaseURL: enviroment.NUXT_ENV_BACKEND_URL
        }
    },
}