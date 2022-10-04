interface FormulaOneSettings {
  season: number;
  constructors: ConstructorSettings[];
}

export interface ConstructorSettings {
  id: number;
  icon: string;
  color: string;
}

export const formulaOneSettings: FormulaOneSettings[] = [
  {
    season: 2022,
    constructors: [
      {
        id: 71583,
        icon: '../assets/images/formula-one/2022/constructors/icons/alfarom.png',
        color: '#B12039',
      },
      {
        id: 199493,
        icon: '../assets/images/formula-one/2022/constructors/icons/alphatauri.png',
        color: '#4E7C9B',
      },
      {
        id: 31205,
        icon: '../assets/images/formula-one/2022/constructors/icons/alpine.png',
        color: '#2293D1',
      },
      {
        id: 65311,
        icon: '../assets/images/formula-one/2022/constructors/icons/astonma.png',
        color: '#2D826D',
      },
      {
        id: 183197,
        icon: '../assets/images/formula-one/2022/constructors/icons/ferrari.png',
        color: '#ED1C24',
      },
      {
        id: 143585,
        icon: '../assets/images/formula-one/2022/constructors/icons/haas.png',
        color: '#B6BABD',
      },
      {
        id: 56525,
        icon: '../assets/images/formula-one/2022/constructors/icons/mclaren.png',
        color: '#F58020',
      },
      {
        id: 58685,
        icon: '../assets/images/formula-one/2022/constructors/icons/mercedes.png',
        color: '#6CD3BF',
      },
      {
        id: 33121,
        icon: '../assets/images/formula-one/2022/constructors/icons/redbull.png',
        color: '#1E5BC6',
      },
      {
        id: 163637,
        icon: '../assets/images/formula-one/2022/constructors/icons/williams.png',
        color: '#1E5BC6',
      },
    ],
  },
];

export function getSettings(season: number, id: number): ConstructorSettings {
  var seasonSettings = formulaOneSettings.find((f) => f.season == season);

  if (seasonSettings == undefined) {
    throw new Error('Not found season');
  }

  var constructorSettings = seasonSettings.constructors.find((c) => c.id == id);

  if (seasonSettings == undefined) {
    throw new Error(`Not found constructor: ${id}`);
  }

  return constructorSettings;
}
