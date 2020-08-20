import { observable, action } from 'mobx'

class AppStore {
    @observable userToken = null
    @action setToken = (val) => {
        this.userToken = val
    }
}

export default AppStore