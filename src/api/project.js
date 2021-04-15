import {filter} from "lodash";

const projects = [
  {
    id: 1,
    date: 2015,
    name: "Itaka",
    members: [
      "07f67e76-9154-4f0a-99a0-a34d23fe7dd7",
      "0972000d-727f-416b-a04d-fdc2cc47d051",
    ],
  },
  {
    id: 2,
    date: 2016,
    name: "eBilet",
    members: [
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
      "f9856179-1dd3-410b-b4be-5390dace4a90",
    ],
  },
  {
    id: 3,
    date: 2017,
    name: "Barbados",
    members: [
      "07f67e76-9154-4f0a-99a0-a34d23fe7dd7",
      "7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
    ],
  },
  {
    id: 4,
    date: 2020,
    name: "Raisen",
    members: [
      "f9856179-1dd3-410b-b4be-5390dace4a90",
      "7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
    ],
  },
  {
    id: 5,
    date: 2021,
    name: "Bewert",
    members: [
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
      "7da263b7-29d4-4a66-bc74-ed3f37cf5db1",
    ],
  },
  {
    id: 6,
    date: 2015,
    name: "Wytep",
    members: [
      "a24eb523-f3be-4ef9-bc1c-cacb742b1a58",
      "0972000d-727f-416b-a04d-fdc2cc47d051",
    ],
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
  },
  {
    id: 8,
    date: 2019,
    name: "Bewet",
    members: [
      "9853aed8-ed51-48f9-8f91-9212af5575a4",
      "a24eb523-f3be-4ef9-bc1c-cacb742b1a58",
    ],
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
  },
  {
    id: 13,
    date: 2017,
    name: "Measert",
    members: [
      "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      "ae89cafd-8f8e-4cd7-9cfc-bb42d4f3d685",
    ],
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
  },
  {
    id: 16,
    date: 2021,
    name: "Fallent",
    members: [
      "511a9036-9514-4721-9249-c1a62aa5be02",
      "0972000d-727f-416b-a04d-fdc2cc47d051",
    ],
  },
  {
    id: 17,
    date: 2019,
    name: "Ymaw",
    members: [
      "afdb0d00-d78b-4e6c-96a6-96b0446212d2",
      "b7e4414f-8ffe-4fb5-8ac5-ca83d99d95aa",
    ],
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
  },
];


export const getProjectsByWorkerId = uuid => {
  const foundProjects =  filter(projects, (x) => x.members.find((a) => a === uuid))
  return foundProjects || [];
};

