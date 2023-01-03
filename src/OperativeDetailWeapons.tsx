import pattern from './O/pattern2.png'

export const OperativeDetailWeapons = (props: any) => {
    return (<>
    <div className='relative h-full overflow-hidden'>
      <h1 className="text-white text-5xl">It is being worked on</h1>
      <div className='relative h-40 bg-gradient-to-t from-emerald-700 via-transparent to-emerald-900 animate-pulse ring-offset-teal-300 motion-reduce:animate-spin duration-1000'></div>
      <img className='absolute top-0 w-full h-52 object-cover' src={pattern}></img>
    </div>
    </>);
  }