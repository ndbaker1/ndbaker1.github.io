export class Storage {
  constructor(private PREFIX: string = 'ANIME_IS_COOL') { }

  public get = (key: string) => sessionStorage.getItem(this.PREFIX + key);

  public set = (key: string, value: string) => sessionStorage.setItem(this.PREFIX + key, value);

  public getAll = () => Object.entries(sessionStorage)
    .filter(([key, _]) => key.startsWith(this.PREFIX))
    .map(([key, value]) => ({
      key: key.substring(this.PREFIX.length),
      value
    }));

  public clear = () => Object.entries(sessionStorage)
    .filter(([key, _]) => key.startsWith(this.PREFIX))
    .forEach(([key, _]) => sessionStorage.removeItem(key));
};
