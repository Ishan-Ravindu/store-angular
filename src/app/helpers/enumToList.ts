export const enumToList = <T extends { [key: string]: string | number }>(enumObject: T): Array<T[keyof T]> => {
    return Object.keys(enumObject)
        .filter(key => isNaN(Number(key)))
        .map(key => enumObject[key as keyof T]);
};

// enum Color {
//     Red = 'red',
//     Green = 'green',
//     Blue = 'blue',
//   }  
//   const colorValues: Array<Color> = enumToList(Color);
//   console.log(colorValues); 
// Output: ['red', 'green', 'blue']

  
//   enum Direction {
//     Up = 1,
//     Down = 2,
//     Left = 3,
//     Right = 4,
//   }
//   const directionValues: Array<Direction> = enumToList(Direction);
//   console.log(directionValues); 
// Output: [1, 2, 3, 4]

