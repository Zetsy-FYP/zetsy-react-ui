import RegisterStoreForm from "@/components/RegisterStoreForm";

const Inputs = [
  {
    id: 1,
    name: "starting",
    label: "I'm Just Starting out.",
    _id: "starting_out",
    value: "I'm Just Starting out.",
    type: "radio",
  },
  {
    id: 2,
    name: "starting",
    label: "I am already selling on Instagram.",
    _id: "already",
    value: "I am already selling on Instagram.",
    type: "radio",
  },
];

export default function page() {
  return <RegisterStoreForm Inputs={Inputs} />;
}
