import secure from "../secure";

const config = {
    apiKey: secure.API_KEY,
    authDomain: secure.AUTH_DOMAIN,
    projectId: secure.PROJECT_ID,
    storageBucket: secure.STORAGE_BUCKET,
    messagingSenderId: secure.MESSAGING_SENDER_ID,
    appId: secure.APP_ID
};

export default config;