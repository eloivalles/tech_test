import { Notes } from "@core/models/menu.model";

const coachName = "James";

const mockText1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque erat in lacinia ullamcorper.";
const mockText2 =
  "Vivamus sed lacus eget mi sollicitudin vehicula. Nunc nec laoreet leo, a rutrum diam.";
const mockText3 =
  "Vivamus dictum nisi in auctor lobortis. Quisque cursus vehicula nulla ac ornare. Praesent id tincidunt neque.";
const mockText4 =
  "Praesent vehicula, tellus nec fringilla mollis, nisl neque mollis erat, in condimentum metus sapien ac metus.";
const mockText5 =
  "Cras pulvinar, ipsum id sagittis condimentum, orci quam eleifend enim, id fringilla eros lectus id quam.";

const notesMock: Notes[] = [
  {
    id: "aaa",
    coachName: coachName,
    content: mockText1,
    createdAt: new Date("1/1/2022"),
    isFlagged: false,
  },
  {
    id: "bbb",
    coachName: coachName,
    content: mockText2,
    createdAt: new Date("1/4/2022"),
    isFlagged: true,
  },
  {
    id: "ccc",
    coachName: coachName,
    content: mockText3 + mockText4,
    createdAt: new Date("2/2/2022"),
    isFlagged: false,
  },
  {
    id: "ddd",
    coachName: coachName,
    content: mockText4,
    createdAt: new Date("1/7/2022"),
    isFlagged: false,
  },
  {
    id: "eee",
    coachName: coachName,
    content: mockText5,
    createdAt: new Date("1/12/2022"),
    isFlagged: true,
  },
];

export const mockNotesByPatient = [
  {
    patientId: "111",
    notes: notesMock,
  },
  {
    patientId: "222",
    notes: notesMock,
  },
];
