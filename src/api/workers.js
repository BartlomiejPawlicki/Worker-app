import {find} from "lodash";

export const workers = [
    {
        uuid:"07f67e76-9154-4f0a-99a0-a34d23fe7dd7",
        first_name:"Karolina", 
        last_name:"Water",
         email:"Karolina.water@gmail.com",
          img:"https://randomuser.me/api/portraits/men/94.jpg",
         specializations: [
          {
            code: "net",
            name: ".NET"
          },
          {
            code: "react",
            name: "React JS"
          }
        ]
      },  {
        uuid:"0972000d-727f-416b-a04d-fdc2cc47d051",
        first_name:"Marcelina",
        last_name: "Wart",
         email:"Marcelina.wart@gmail.com",
         img:"https://randomuser.me/api/portraits/women/36.jpg",
         specializations: [
          {
            code: "net",
            name: ".NET"
          }
        ]
      },
      {
        uuid:"511a9036-9514-4721-9249-c1a62aa5be02",
        first_name:"Mariusz",
        last_name: "Penkala",
         email:"Mariusz.penkala@gmail.com",
         img:"https://randomuser.me/api/portraits/women/4.jpg",
         specializations: [
          {
            code: "react",
            name: "React JS"
          }
        ]
      },  {
        uuid:"16b6c930-2a51-4f79-99e1-9caa1eb9a1de",
        first_name:"Zbigniew",
        last_name:"Ziobro",
         email:"Zbigniew.ziobro@gmail.com",
         img:"https://randomuser.me/api/portraits/men/71.jpg",
         specializations: [
          {
            code: "c#",
            name: "C#"
          },
          {
            code: "react",
            name: "React JS"
          }
        ]
      },  {
        uuid:"9853aed8-ed51-48f9-8f91-9212af5575a4",
        first_name:"Marek",
        last_name:"Konrad",
         email:"Marek.konrad@gmail.com",
         img:"https://randomuser.me/api/portraits/men/83.jpg",
         specializations: [
          {
            code: "node",
            name: "Node JS"
          }
        ]
      },  {
        uuid:"f9856179-1dd3-410b-b4be-5390dace4a90",
        first_name:"Sabina",
        last_name:"Szafar",
         email:"Sabina.tar@gmail.com",
         img:"https://randomuser.me/api/portraits/women/43.jpg",
         specializations: [
          {
            code: "net",
            name: ".NET"
          }
        ]
      },  {
        uuid:"7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
        first_name:"Joanna",
        last_name:"Lert",
         email:"Joanna.kert@gmail.com",
         img:"https://randomuser.me/api/portraits/men/7.jpg",
         specializations: [
          {
            code: "net",
            name: ".NET"
          },
          {
            code: "c",
            name: "C#"
          }
        ]
      },  {
        uuid:"a24eb523-f3be-4ef9-bc1c-cacb742b1a58",
        first_name:"Marcelina",
        last_name:"Kasz",
         email:"Marcelina.kasz@gmail.com",
         img:"https://randomuser.me/api/portraits/men/7.jpg",
         specializations: [
          {
            code: "node",
            name: "Node JS"
          },
          {
            code: "react",
            name: "React JS"
          }
        ]
      },  {
        uuid:"1514d0e8-cf91-44a7-aa35-a1b4070ca2a0",
        first_name:"Lila",
        last_name:"Kater",
         email:"Lila.Kater@gmail.com",
         img:"https://randomuser.me/api/portraits/men/83.jpg",
         specializations: [
          {
            code: "net",
            name: ".NET"
          }
        ]
      },  {
        uuid:"72d165a2-413b-45de-8cfc-971aa84bf639",
        first_name:"Henryk",
        last_name:"Waszyk",
         email:"Henryk.wasz@gmail.com",
         img:"https://randomuser.me/api/portraits/men/47.jpg",
         specializations: [
          {
            code: "node",
            name: "Node JS"
          },
          {
            code: "react",
            name: "React JS"
          }
        ]
      },  {
        uuid:"744697ba-4279-41c4-a90b-f22d8c0f1862",
        first_name:"Waleria",
        last_name:"Marszer",
         email:"Waleria.maszer@gmail.com",
         img:"https://randomuser.me/api/portraits/women/51.jpg",
         specializations: [
          {
            code: "net",
            name: ".NET"
          }
        ]
      },  {
        uuid:"fa909187-feb6-41ca-8c74-217dd38c1d01",
        first_name:"Wladysław",
        last_name:"Kokosz",
         email:"Władysław.kokosz@gmail.com",
         img:"https://randomuser.me/api/portraits/men/89.jpg",
         specializations: [
          {
            code: "node",
            name: "Node JS"
          },
          {
            code: "c#",
            name: "C#"
          }
        ]
      },  {
        uuid:"afdb0d00-d78b-4e6c-96a6-96b0446212d2",
        first_name:"Sabina",
        last_name:"Seas",
         email:"Sabina.seas@gmail.com",
         img:"https://randomuser.me/api/portraits/women/50.jpg",
         specializations: [
          {
            code: "net",
            name: ".NET"
          },
          {
            code: "react",
            name: "React JS"
          }
        ]
      },  {
        uuid:"ae89cafd-8f8e-4cd7-9cfc-bb42d4f3d685",
        first_name:"Julia",
        last_name:"Zdziebło",
         email:"Julia.zdzieblo@gmail.com",
         img:"https://randomuser.me/api/portraits/men/74.jpg",
         specializations: [
          {
            code: "net",
            name: ".NET"
          }
        ]
      },  {
        uuid:"b7e4414f-8ffe-4fb5-8ac5-ca83d99d95aa",
        first_name:"Karolina",
        last_name:"Majzersz",
         email:"Karolina.lubasz@gmail.com",
         img:"https://randomuser.me/api/portraits/women/68.jpg",
         specializations: [
          {
            code: "react",
            name: "React JS"
          }
        ]
      },  {
        uuid:"179201c4-8ea4-4c32-b066-8859694113f4",
        first_name:"Maurycy",
        last_name:"Szaszsz",
         email:"Maurycy.suchasz@gmail.com",
         img:"https://randomuser.me/api/portraits/women/66.jpg",
         specializations: [
          {
            code: "react",
            name: "React JS"
          }
        ]
      },  {
        uuid:"7c353d65-4ffa-4e6d-9772-afa5bdb26b3d",
        first_name:"Alojzy",
        last_name:"Gagas",
         email:"Alojzy.gagas@gmail.com",
         img:"https://randomuser.me/api/portraits/women/81.jpg",
         specializations: [
          {
            code: "net",
            name: ".NET"
          },
          {
            code: "react",
            name: "React JS"
          }
        ]
      },  {
        uuid:"9275ff03-98ef-4e84-9bad-2e49c7e608b7",
        first_name:"Lucyna",
        last_name:"Kamrzesz",
         email:"Lucyna.warszawa@gmail.com",
         img:"https://randomuser.me/api/portraits/women/47.jpg",
         specializations: [
          {
            code: "c#",
            name: "C#"
          }
        ]
      }
]

export const getUserById = uuid => {
  const foundUser = find(workers, x => x.uuid === uuid);

  return foundUser || {};
};