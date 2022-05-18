import { Platform } from 'react-native'


let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'https://efec-41-59-49-118.eu.ngrok.io/api/v1/'
: baseURL = 'http://localhost:3000/api/v1/';}

export default baseURL;

// http://10.0.2.2:3000