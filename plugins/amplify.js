import Amplify,{Auth} from 'aws-amplify'
import config from '../src/aws-exports'
import '@aws-amplify/ui-vue';

Amplify.configure(config)
// Auth.configure(config);

