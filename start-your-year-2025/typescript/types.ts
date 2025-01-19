type Meter = number;
type UserInput = string;
type Maybe = boolean;

type LoginInput1 = {
  email: string;
  username: string;
  id: number;
};

// undefine
type LoginInput2 = {
  email: string | undefined;
  username: string;
  id: number;
};
