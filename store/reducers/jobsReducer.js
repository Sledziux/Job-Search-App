const initalState = [
  {
    id: 1,
    icon: require("../../assets/logo.jpg"),
    profession: "Product Designer",
    company: "Mockitt",
    category: "Design",
    qualifications: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
    responsibilities: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },

  {
    id: 2,
    icon: require("../../assets/logo2.jpg"),
    profession: "Product Developer",
    category: "Development",
    company: "VidAir",
    qualifications: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
    responsibilities: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },

  {
    id: 3,
    icon: require("../../assets/logo3.png"),
    profession: "Adobe Designer",
    category: "Design",
    company: "Adobe",
    qualifications: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
    responsibilities: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },

  {
    id: 4,
    icon: require("../../assets/logo4.png"),
    profession: "React Developer",
    category: "Development",
    company: "SpaceX",
    qualifications: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
    responsibilities: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },

  {
    id: 5,
    icon: require("../../assets/logo.jpg"),
    profession: "Graphic Designer",
    category: "Design",
    company: "Mockitt",
    qualifications: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
    responsibilities: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
];

const jobsReducer = (state = initalState, action) => {
  return state;
};

export default jobsReducer;
