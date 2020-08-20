import {observable, action, computed} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class Store {
    @observable tokens = {};
}

export default new Store();