interface Props {
  title: string;
  sub: string;
  image: string;
}

const InfoCard = (props: Props) => {
  return (
    <div className="flex items-center justify-between w-full p-3 rounded-md bg-[#2E2F44]">
      <div>
        <span className="text-white text-opacity-50 text-xs">{props.sub}</span>
        <p className="text-white text-sm font-medium">{props.title}</p>
      </div>
      <div className="h-11 w-11 bg-[#474861] rounded-full"></div>
    </div>
  );
};

export default InfoCard;
