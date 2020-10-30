import axios from 'axios';

export const getSecretWord = async setSecretWord => {
    const response = await axios.get('http://localhost.3030');
    setSecretWord(response.data);
}

// default export for mocking convenience
const hookActions = {
    getSecretWord,
}
export default hookActions;