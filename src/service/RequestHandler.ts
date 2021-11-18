export class RequestHandler {

    static ApiUrl = 'https://localhost:44339/api/';
    
    public static async fetchAsync (request: string) {

        window.sessionStorage.setItem('request', request);

        try {
          let response = fetch(this.ApiUrl + request);
          return (await response).json();
        }
        catch(err) {
          window.location.href = '/Error';
        }
        
    }

}