interface Props {
  day: string | number;
}

const Day = (props: Props) => {
  return (
    <div className="flex items-center justify-center text-center align-middle h-[45px]">
      <span>{props.day}</span>
    </div>
  );
};

export default Day;
