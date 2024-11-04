class AppResponse {
  constructor(public data: any, public message: string, public error?: any) {
    this.data = data;
    this.message = message;
    if (error) {
      this.error = error;
    }
  }
}

export default AppResponse;
