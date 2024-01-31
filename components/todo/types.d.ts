type Props = {
  title: string;
  date: string;
  status: boolean;
  clickHandler?: (e: MouseEvent<HTMLElement>) => void;
  deleteHandler?: (e: MouseEvent<HTMLElement>) => void;
};

export { Props };
