export class BaseService{
    constructor(http,resolveUrl,path){
        this.http = http;
        this.resolveUrl = resolveUrl;
        this.path = path;
    }
    getRoute(){
        return this.resolveUrl.resolve(this.path);
    }
    getRouteById(id){
        return `${this.getRoute()}/${id}`;
    } 
}
