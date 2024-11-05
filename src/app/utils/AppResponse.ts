class AppResponse {
  public success: boolean;
  constructor(
    public status: number,
    public data: any,
    public message: string,
    public meta?: any
  ) {
    this.status = status;
    this.success = status < 400;
    this.data = data;
    this.message = message;
    if (meta) {
      this.meta = meta;
    }
  }
}

export default AppResponse;
