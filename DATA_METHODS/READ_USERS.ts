import RNFS from 'react-native-fs';
import { User } from '../types/User';

export async function READ_USERS(): Promise<User[]> {

        try {
            const data:[] = await JSON.parse(await RNFS.readFile(RNFS.DocumentDirectoryPath + '../data/users.json', 'ascii'));
            return data;

        }catch (err) {

            return [];
        }

}