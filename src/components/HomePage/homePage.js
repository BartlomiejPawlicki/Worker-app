import { isEmpty, filter } from "lodash";
import { workers } from '../../api/workers.js'
import customFields from "./fields";


const prepareSpecializationsForDisplay = (data) => {
  const results = data.map((x) => ({
    ...x,
    specializations: x.specializations.map((x) => x.name).join(", "),
  }));

  return results
}


export default {
  name: "HomePage",
  data: () => ({
    selectedFilters: [],
    workers: workers,
    filteredWorkers: prepareSpecializationsForDisplay(workers),
    perPage: 6,
    currentPage: 1,
    fields: [...customFields, { key: "actions" }],
    filters: [
      {
        code: "net",
        name: ".NET",
      },
      {
        code: "react",
        name: "React JS",
      },
      {
        code: "c#",
        name: "C#",
      },
      {
        code: "node",
        name: "Node JS",
      },
    ],
  }),
  computed: {
    rows() {
      return this.filteredWorkers.length;
    },
  },
  methods: {
    onChange(selectedFilters) {
      const results = isEmpty(selectedFilters)
        ? this.workers
        : filter(this.workers, (x) =>
          x.specializations
            .map((s) => s.code)
            .some((r) => selectedFilters.indexOf(r) !== -1)
        );

      this.filteredWorkers = prepareSpecializationsForDisplay(results);
    },
  },
};