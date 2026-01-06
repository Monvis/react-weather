interface IStorage {
  setItem: (name: string, item: any) => void;
  getItem: (name: string) => any
}

export const storage: IStorage = {
  setItem: (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
  },
  getItem: (name) => {
    const item = localStorage.getItem(name)

    if (item) {
      return JSON.parse(item)
    }
  },
}