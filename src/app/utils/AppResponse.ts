class AppResponse {
  public success: boolean;
  constructor(
    public status: number,
    public data: any,
    public message: string,
    public error?: any
  ) {
    this.status = status;
    this.success = status < 400;
    this.data = data;
    this.message = message;
    if (error) {
      this.error = error;
    }
  }
}

export default AppResponse;
