import Service from './Service';

export default class MeService extends Service {
    constructor() {
        super('user', 'me');
    }
    logout() {
        return this.add('token', {});
    }
}