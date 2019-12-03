import Twilio from 'twilio-client';
import Axios from 'axios';
const device = new Twilio.Device();
Axios.get('/token').then(function({data}) {
  device.setup(data.token, {});
}).catch(function(err) {
  console.log(err);
});
export default device;