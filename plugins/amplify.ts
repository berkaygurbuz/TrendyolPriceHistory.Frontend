import Amplify,{Auth} from 'aws-amplify'
import config from '../src/aws-exports'
Amplify.configure(config)
Auth.configure(config);
