export class ApplicationStateModel<T> {

    constructor(obj: Partial<T>) {
        Object.assign({},this, obj);

    }
}