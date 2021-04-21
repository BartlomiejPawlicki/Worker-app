import { filter, find } from "lodash";

const projects = [
  {
    id: 1,
    date: 2015,
    name: "Itaka",
    members: [
      "07f67e76-9154-4f0a-99a0-a34d23fe7dd7",
      "0972000d-727f-416b-a04d-fdc2cc47d051",
    ],
    opinions: [
      {
        date: new Date(2021,5,1),
        author: "Karol Marakas",
        text: "advanced skill in scss",
        member_id: "07f67e76-9154-4f0a-99a0-a34d23fe7dd7"
      },
      {
        date: 2015,
        author: "Maria Walaszek",
        text: "good knowledge of html",
        member_id: "0972000d-727f-416b-a04d-fdc2cc47d051"
      }
    ]
  },
  {
    id: 2,
    date: 2016,
    name: "eBilet",
    members: [
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
      "f9856179-1dd3-410b-b4be-5390dace4a90",
    ],
    opinions: [
      {
        date: 2016,
        author: "Mariusz Zynaszek",
        text: "lack of scss knowledge",
        member_id: "9853aed8-ed51-48f9-8f91-9212af5575a4",
      },
      {
        date: 2016,
        author: "Zbigniew Mynaszek",
        text: "advanced knowledge in node.js",
        member_id: "f9856179-1dd3-410b-b4be-5390dace4a90",
      }
    ]
  },
  {
    id: 3,
    date: 2017,
    name: "Barbados",
    members: [
      "07f67e76-9154-4f0a-99a0-a34d23fe7dd7",
      "7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
    ],
    opinions: [
      {
        date: 2017,
        author: "Bartlomiej Kaszka",
        text: "good job",
        member_id: "07f67e76-9154-4f0a-99a0-a34d23fe7dd7"
      },
      {
        date: 2017,
        author: "Marzena Zyf",
        text: "weak in scss",
        member_id: "7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
      }
    ]
  },
  {
    id: 4,
    date: 2020,
    name: "Raisen",
    members: [
      "f9856179-1dd3-410b-b4be-5390dace4a90",
      "7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
    ],
    opinions: [
      {
        date: 2020,
        author: "Wlodzimierz szaranko",
        text: "good in data bases",
        member_id: "f9856179-1dd3-410b-b4be-5390dace4a90",
      },
      {
        date: 2020,
        author: "Zbigniew Maszter",
        text: "good job",
        member_id: "7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
      }
    ]
  },
  {
    id: 5,
    date: 2021,
    name: "Bewert",
    members: [
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
      "7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
    ],
    opinions: [
      {
        date: 2021,
        author: "Marzena Lolep",
        text: "good in css",
        member_id: "9853aed8-ed51-48f9-8f91-9212af5575a4",
      },
      {
        date: 2021,
        author: "Marzena Pokrasko",
        text: "good in scss",
        member_id: "7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
      }
    ]
  },
  {
    id: 6,
    date: 2015,
    name: "Wytep",
    members: [
      "a24eb523-f3be-4ef9-bc1c-cacb742b1a58",
      "0972000d-727f-416b-a04d-fdc2cc47d051",
    ],
    opinions: [
      {
        date: 2015,
        author: "Karol Okrasa",
        text: "good in js and node.js",
        member_id: "a24eb523-f3be-4ef9-bc1c-cacb742b1a58",
      },
      {
        date: 2015,
        author: "Ula Kot",
        text: "good in data bases",
        member_id: "0972000d-727f-416b-a04d-fdc2cc47d051",
      }
    ]
  },
  {
    id: 7,
    date: 2015,
    name: "Itaka",
    members: [
      "a24eb523-f3be-4ef9-bc1c-cacb742b1a58",
      "0972000d-727f-416b-a04d-fdc2cc47d051",
      "1514d0e8-cf91-44a7-aa35-a1b4070ca2a0",
    ],
    opinions: [
      {
        date: 2015,
        author: "Iga Świątał",
        text: "good job",
        member_id: "a24eb523-f3be-4ef9-bc1c-cacb742b1a58",
      },
      {
        date: 2015,
        author: "Karina Pelesz",
        text: "weak in html",
        member_id: "0972000d-727f-416b-a04d-fdc2cc47d051",
      },
      {
        date: 2015,
        author: "Witold Ket",
        text: "weak in css",
        member_id: "1514d0e8-cf91-44a7-aa35-a1b4070ca2a0",
      }
    ]
  },
  {
    id: 8,
    date: 2019,
    name: "Xiaong",
    members: [
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
      "a24eb523-f3be-4ef9-bc1c-cacb742b1a58",
    ],
    opinions: [
      {
        date: 2019,
        author: "Marek Zister",
        text: "good job",
        member_id: "9853aed8-ed51-48f9-8f91-9212af5575a4",
      },
      {
        date: 2019,
        author: "Marzena Pokrasko",
        text: "weak in data bases",
        member_id: "a24eb523-f3be-4ef9-bc1c-cacb742b1a58",
      }
    ]
  },
  {
    id: 9,
    date: 2018,
    name: "Setelt",
    members: [
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
      "1514d0e8-cf91-44a7-aa35-a1b4070ca2a0",
      "7c353d65-4ffa-4e6d-9772-afa5bdb26b3d",
    ],
    opinions: [
      {
        date: 2018,
        author: "Malwina Szandeł",
        text: "good job",
        member_id: "9853aed8-ed51-48f9-8f91-9212af5575a4",
      },
      {
        date: 2018,
        author: "Lucyna Uter",
        text: "good in html",
        member_id: "1514d0e8-cf91-44a7-aa35-a1b4070ca2a0",
      },
      {
        date: 2018,
        author: "Marzena Szczepko",
        text: "good in .NET",
        member_id: "7c353d65-4ffa-4e6d-9772-afa5bdb26b3d",
      }
    ]
  },
  {
    id: 10,
    date: 2019,
    name: "Kenent",
    members: [
      "72d165a2-413b-45de-8cfc-971aa84bf639",
      "744697ba-4279-41c4-a90b-f22d8c0f1862",
      "fa909187-feb6-41ca-8c74-217dd38c1d01",
    ],
    opinions: [
      {
        date: 2019,
        author: "Bartlomiej Lawap",
        text: "good in React JS",
        member_id: "72d165a2-413b-45de-8cfc-971aa84bf639",
      },
      {
        date: 2019,
        author: "Paweł Szotet",
        text: "good in Node JS",
        member_id: "744697ba-4279-41c4-a90b-f22d8c0f1862",
      },
      {
        date: 2019,
        author: "Patryk Katet",
        text: "good job",
        member_id: "fa909187-feb6-41ca-8c74-217dd38c1d01",
      }
    ]
  },
  {
    id: 11,
    date: 2018,
    name: "Mevert",
    members: [
      "72d165a2-413b-45de-8cfc-971aa84bf639",
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
      "744697ba-4279-41c4-a90b-f22d8c0f1862",
    ],
    opinions: [
      {
        date: 2018,
        author: "Michal Wojtek",
        text: "good in .NET",
        member_id: "72d165a2-413b-45de-8cfc-971aa84bf639",
      },
      {
        date: 2018,
        author: "Mariusz Yster",
        text: "weak in React JS",
        member_id: "9853aed8-ed51-48f9-8f91-9212af5575a4",
      },
      {
        date: 2018,
        author: "Agnieszka Simon",
        text: "good in scss",
        member_id: "744697ba-4279-41c4-a90b-f22d8c0f1862",
      }
    ]
  },
  {
    id: 12,
    date: 2013,
    name: "Uzym",
    members: [
      "fa909187-feb6-41ca-8c74-217dd38c1d01",
      "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      "ae89cafd-8f8e-4cd7-9cfc-bb42d4f3d685",
    ],
    opinions: [
      {
        date: 2013,
        author: "Katarzyna Kiszka",
        text: "good in html",
        member_id: "fa909187-feb6-41ca-8c74-217dd38c1d01",
      },
      {
        date: 2013,
        author: "Witold Let",
        text: "good in js",
        member_id: "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      },
      {
        date: 2013,
        author: "Marzena Sandomierska",
        text: "good in .NET",
        member_id: "ae89cafd-8f8e-4cd7-9cfc-bb42d4f3d685",
      }
    ]
  },
  {
    id: 13,
    date: 2017,
    name: "Measert",
    members: [
      "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      "ae89cafd-8f8e-4cd7-9cfc-bb42d4f3d685",
    ],
    opinions: [
      {
        date: 2017,
        author: "Boguslawa Kitep",
        text: "good",
        member_id: "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      },
      {
        date: 2017,
        author: "Lukas Kaert",
        text: "good in html",
        member_id: "ae89cafd-8f8e-4cd7-9cfc-bb42d4f3d685",
      }
    ]
  },
  {
    id: 14,
    date: 2018,
    name: "Wyeszaw",
    members: [
      "07f67e76-9154-4f0a-99a0-a34d23fe7dd7",
      "16b6c930-2a51-4f79-99e1-9caa1eb9a1de",
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
    ],
    opinions: [
      {
        date: 2018,
        author: "Urszula Adamczyk",
        text: "good job",
        member_id: "07f67e76-9154-4f0a-99a0-a34d23fe7dd7",
      },
      {
        date: 2018,
        author: "Karolina Slowik",
        text: "good in React JS",
        member_id: "16b6c930-2a51-4f79-99e1-9caa1eb9a1de",
      },
      {
        date: 2018,
        author: "Wlodzimierz Szaranowicz",
        text: "good in scss",
        member_id: "9853aed8-ed51-48f9-8f91-9212af5575a4",
      }
    ]
  },
  {
    id: 15,
    date: 2020,
    name: "Oden",
    members: [
      "511a9036-9514-4721-9249-c1a62aa5be02",
      "16b6c930-2a51-4f79-99e1-9caa1eb9a1de",
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
      "7c353d65-4ffa-4e6d-9772-afa5bdb26b3d",
    ],
    opinions: [
      {
        date: 2020,
        author: "Katarzyna Mauzer",
        text: "good in css",
        member_id: "511a9036-9514-4721-9249-c1a62aa5be02",
      },
      {
        date: 2020,
        author: "Michal Paszkiewicz",
        text: "good in html",
        member_id: "16b6c930-2a51-4f79-99e1-9caa1eb9a1de",
      },
      {
        date: 2020,
        author: "Patrycja Gringer",
        text: "good job",
        member_id: "9853aed8-ed51-48f9-8f91-9212af5575a4",
      },
      {
        date: 2020,
        author: "Pawel Nosik",
        text: "good in .NET",
        member_id: "7c353d65-4ffa-4e6d-9772-afa5bdb26b3d",
      }
    ]
  },
  {
    id: 16,
    date: 2021,
    name: "Fallent",
    members: [
      "511a9036-9514-4721-9249-c1a62aa5be02",
      "0972000d-727f-416b-a04d-fdc2cc47d051",
    ],
    opinions: [
      {
        date: 2021,
        author: "Grzegorz Wałga",
        text: "good in html",
        member_id: "511a9036-9514-4721-9249-c1a62aa5be02",
      },
      {
        date: 2021,
        author: "Lucyna Kitelek",
        text: "good in React JS",
        member_id: "0972000d-727f-416b-a04d-fdc2cc47d051",
      }
    ]
  },
  {
    id: 17,
    date: 2019,
    name: "Ymaw",
    members: [
      "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      "b7e4414f-8ffe-4fb5-8ac5-ca83d99d95aa",
    ],
    opinions: [
      {
        date: 2019,
        author: "Helga Powianska",
        text: "good in HTML",
        member_id: "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      },
      {
        date: 2019,
        author: "Marzena Oleszuk",
        text: "good in SCSS",
        member_id: "b7e4414f-8ffe-4fb5-8ac5-ca83d99d95aa",
      }
    ]
  },
  {
    id: 18,
    date: 2017,
    name: "Keysza",
    members: [
      "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      "0972000d-727f-416b-a04d-fdc2cc47d051",
      "179201c4-8ea4-4c32-b066-8859694113f4",
    ],
    opinions: [
      {
        date: 2017,
        author: "Patrycja Sokol",
        text: "good in scss",
        member_id: "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      },
      {
        date: 2017,
        author: "Martyna Wojcisz",
        text: "good in Node JS",
        member_id: "0972000d-727f-416b-a04d-fdc2cc47d051",
      },
      {
        date: 2017,
        author: "Paweł Okraska",
        text: "good in css",
        member_id: "179201c4-8ea4-4c32-b066-8859694113f4",
      }
    ]
  },
  {
    id: 19,
    date: 2015,
    name: "Mazepaw",
    members: [
      "b7e4414f-8ffe-4fb5-8ac5-ca83d99d95aa",
      "07f67e76-9154-4f0a-99a0-a34d23fe7dd7",
      "179201c4-8ea4-4c32-b066-8859694113f4",
    ],
    opinions: [
      {
        date: 2015,
        author: "Patryk Opop",
        text: "good in css",
        member_id: "b7e4414f-8ffe-4fb5-8ac5-ca83d99d95aa",
      },
      {
        date: 2015,
        author: "Malwina Sandomierz",
        text: "good in html",
        member_id: "07f67e76-9154-4f0a-99a0-a34d23fe7dd7",
      },
      {
        date: 2015,
        author: "Pawel Posazek",
        text: "good in Node JS",
        member_id: "179201c4-8ea4-4c32-b066-8859694113f4",
      }
    ]
  },
  {
    id: 20,
    date: 2016,
    name: "Usen",
    members: [
      "b7e4414f-8ffe-4fb5-8ac5-ca83d99d95aa",
      "179201c4-8ea4-4c32-b066-8859694113f4",
      "9275ff03-98ef-4e84-9bad-2e49c7e608b7",
    ],
    opinions: [
      {
        date: 2016,
        author: "Grzegorz Lip",
        text: "good in html",
        member_id: "b7e4414f-8ffe-4fb5-8ac5-ca83d99d95aa",
      },
      {
        date: 2016,
        author: "Marek Swoboda",
        text: "good in css",
        member_id: "179201c4-8ea4-4c32-b066-8859694113f4",
      },
      {
        date: 2016,
        author: "Sabina Sochacka",
        text: "weak in React JS",
        member_id: "9275ff03-98ef-4e84-9bad-2e49c7e608b7",
      }
    ]
  },
];


export const getProjectsByWorkerId = uuid => {
  const foundProjects = filter(projects, (x) => x.members.find((a) => a === uuid))
  return foundProjects || [];
};


export const getProjectById = id => {
  const foundProject = find(projects, (x) => x.id == id)
  return foundProject || {};

};


export const getOpinionByWorkerId = (project, workerId) => {
 const foundOpinion = find(project.opinions,(x) => x.member_id === workerId)
 return foundOpinion || {}
}