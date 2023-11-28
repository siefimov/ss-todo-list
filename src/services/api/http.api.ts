import axios from 'axios';

import { BASE_URL, ContentType } from '../../constants';

export default axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        'Content-Type': ContentType.JSON,
    },
});
