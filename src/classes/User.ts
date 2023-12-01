import UserImage from "./UserImage";

class User {
  private displayName: string;
  private id: string;
  private images: UserImage[];
  private type: string;
  private uri: string;
  private followers: number;
  private href: string;
  private userLink: string;

  constructor(
    displayName: string,
    id: string,
    images: UserImage[],
    type: string,
    uri: string,
    followers: number,
    href: string,
    userLink: string,
  ) {
    this.displayName = displayName;
    this.id = id;
    this.images = images;
    this.type = type;
    this.uri = uri;
    this.followers = followers;
    this.href = href;
    this.userLink = userLink;
  }

  public getDisplayName(): string {
    return this.displayName;
  }

  public getId(): string {
    return this.id;
  }

  public getImages(): UserImage[] {
    return this.images;
  }

  public getType(): string {
    return this.type;
  }

  public getUri(): string {
    return this.uri;
  }

  public getFollowers(): number {
    return this.followers;
  }

  public getHref(): string {
    return this.href;
  }

  public getUserLink(): string {
    return this.userLink;
  }

  public setDisplayName(displayName: string): void {
    this.displayName = displayName;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public setImages(images: UserImage[]): void {
    this.images = images;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public setUri(uri: string): void {
    this.uri = uri;
  }

  public setFollowers(followers: number): void {
    this.followers = followers;
  }

  public setHref(href: string): void {
    this.href = href;
  }

  public setUserLink(userLink: string): void {
    this.userLink = userLink;
  }

  static fromJSON(json: any): User {
    return new User(
      json.display_name,
      json.id,
      json.images.map((image: any) => UserImage.fromJSON(image)),
      json.type,
      json.uri,
      json.followers.total,
      json.href,
      json.external_urls.spotify,
    );
  }
}

export default User;
