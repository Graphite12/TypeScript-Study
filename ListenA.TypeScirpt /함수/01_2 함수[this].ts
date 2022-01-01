interface User {
  name: string;
}

const Sam: User = { name: 'Sam' };

function showName(this: User): void {
  console.log(this.name);
}

const a = showName.bind(Sam);
