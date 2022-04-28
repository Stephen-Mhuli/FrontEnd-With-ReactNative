import { Platform } from 'react-native'


let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'https://936d-197-250-100-49.eu.ngrok.io/api/v1/'
: baseURL = 'http://localhost:3000/api/v1/';}

export default baseURL;

// http://10.0.2.2:3000