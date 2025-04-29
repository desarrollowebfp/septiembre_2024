class Character {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  info(): string {
    return `${this.name} tiene el nivel ${this.level}`;
  }
}

const cloud = new Character("Cloud Strife", 50);
console.log(cloud.name);
console.log(cloud.level);
console.log(cloud.info());