class UserImage {
  private height: number;
  private width: number;
  private url: string;

  constructor(height: number, width: number, url: string) {
    this.height = height;
    this.width = width;
    this.url = url;
  }

  public getHeight(): number {
    return this.height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getUrl(): string {
    return this.url;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public setUrl(url: string): void {
    this.url = url;
  }

  static fromJSON(json: any): UserImage {
    return new UserImage(json.height, json.width, json.url);
  }
}

export default UserImage;
