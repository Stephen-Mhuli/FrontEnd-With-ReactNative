import { Platform } from 'react-native'


let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'https://aeaf-197-250-230-5.in.ngrok.io/api/v1/'
: baseURL = 'http://localhost:3000/api/v1/';}

export default baseURL;

// http://10.0.2.2:3000