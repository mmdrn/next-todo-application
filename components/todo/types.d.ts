type Props = {
  id: string;
  title: string;
  date: string;
  status: boolean;
  clickHandler?: (id: string) => void;
  deleteHandler?: (id: string) => void;
};

export { Props };
