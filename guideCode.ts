// type tsData = {
//     name: string;
//     age: number | null;
//     work?: string;
//     projects: {
//         name: string;
//         workingUntil: Date;
//         startedAt: string;
//     }[]
// }[];

type ProjectType = {
  name: string;
  workingUntil: Date;
  startedAt: string;
};

type DataType = {
  name: string;
  age: number | null;
  work?: string;
  projects: ProjectType[];
  mostLikedFunction?: (value: string) => string;
};

let data: DataType[] = [
  {
    name: "Ali",
    age: 22,
    work: "developer",
    projects: [
      {
        name: "sana",
        workingUntil: new Date(),
        startedAt: "2022",
      },
      {
        name: "Abryad",
        workingUntil: new Date("2021/08/09"),
        startedAt: "2020",
      },
    ],
    mostLikedFunction: (value) => {
      if (value) {
        return value;
      } else {
        return "Qolam was her";
      }
    },
  },
  {
    name: "Mehdi",
    age: null,
    projects: [
      {
        name: "sana",
        workingUntil: new Date(),
        startedAt: "2022",
      },
    ],
  },
];

data.forEach((d) => {
  d.projects.forEach((p) => {});
});

// TODO:
// Create a react project with typescript
// Create a form making the object above
// Your form has the following items:
// Name, Age, mostLikedFunction, Work, Projects
// Your projects are being handled dynamically, You shoyld create a row and you would be able to add to it
// Handle everything, using useForm :))
