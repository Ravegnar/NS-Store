export const OperativeDetailInfo = (props: any) => {
  const {operative} = props;
  return (<>
    <p className="leading-relaxed text-justify mb-4">
      {operative.info}
    </p>
    <div className="flex border-t border-gray-200 py-2">
      <span className="text-white">Type</span>
      <span className="ml-auto text-white">{operative.type}</span>
    </div>
    <div className="flex border-t border-gray-200 py-2">
      <span className="text-white">Health</span>
      <span className="ml-auto text-white">{operative.health}</span>
    </div>
    <div className="flex border-t border-gray-200 py-2">
      <span className="text-white">Shield</span>
      <span className="ml-auto text-white">{operative.shield}</span>
    </div>
    <div className="flex border-t border-b mb-6 border-gray-200 py-2">
      <span className="text-white mr-3">Specialization</span>
      <span className="ml-auto text-white text-right">{operative.specialization}</span>
    </div>
  </>);
}