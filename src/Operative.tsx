export const Operative = (props: any) => {
  const { operative, onSelected } = props;

  return (<>
    <div className="flex flex-col sm-w-full items-center active:bg-slate-700 hover:bg-slate-900 cursor-pointer" onClick={() => onSelected({...operative, classNames: "max-w-[28rem]"})} >
      <img className="w-[2rem] sm:w-[3rem] m-4" src={operative.icon} />
    </div>
  </>)
}