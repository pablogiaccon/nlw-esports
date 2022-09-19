export type WeekDay = {
  text: "D" | "S" | "T" | "Q" | "Q";
  value: "0" | "1" | "2" | "3" | "4" | "5" | "6";
  title:
    | "Domingo"
    | "Segunda-feira"
    | "Terça-feira"
    | "Quarta-feira"
    | "Quinta-feira"
    | "Sexta-feira"
    | "Sábado";
};

export const WEEK_DAYS: WeekDay[] = [
  {
    text: "D",
    value: "0",
    title: "Domingo",
  },
  {
    text: "S",
    value: "1",
    title: "Segunda-feira",
  },
  {
    text: "T",
    value: "2",
    title: "Terça-feira",
  },
  {
    text: "Q",
    value: "3",
    title: "Quarta-feira",
  },
  {
    text: "Q",
    value: "4",
    title: "Quinta-feira",
  },
  {
    text: "S",
    value: "5",
    title: "Sexta-feira",
  },
  {
    text: "S",
    value: "6",
    title: "Sábado",
  },
];
