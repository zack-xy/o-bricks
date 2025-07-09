export default function Page() {
  return (
    <div>
      <h3>学习一下Grid</h3>
      <hr />  
      <div className="grid gap-[10px] grid-cols-[150px_1fr] grid-rows-[100px_1fr_80px] ">
        <div className="bg-[#f1c2c6] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9] rounded-sm">Grid项目1</div>
        <div className="bg-[#efe1ff] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9] rounded-sm">Grid项目2</div>
        <div className="bg-[#bbd7af] flex justify-center items-center text-3xl text-black p-4 
        border-2 border-solid border-[#2938e9] rounded-sm bg-[repeating-conic-gradient(from_7.5deg_at_50%_0,transparent_0_15deg,gold_0_30deg),linear-gradient(177deg,#f11818,#f4070700)] mix-blend-difference bg-blend-luminosity col-2 row-start-1 row-end-4 text-shadow-[1px_1px_0px_rgb(0_0_0_/_50%)] inset-shadow-[0px_0px_0px_3px]">Grid项目3</div>
        <div className="bg-[#209fbb] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9]">Grid项目4</div>
        <div className="bg-[#00f0ff] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9]">Grid项目5</div>
        <div className="bg-[#e8f0fe] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9]">Grid项目6</div>
      </div>
      <hr className="my-[10px]" />
      <div className="grid gap-[10px] grid-cols-[150px_[item1-start]_1fr_[item1-end]] grid-rows-[[item1-start]_100px_1fr_80px_[item1-end]]">
        <div className="bg-[#f1c2c6] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9] rounded-sm">Grid项目1</div>
        <div className="bg-[#efe1ff] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9] rounded-sm">Grid项目2</div>
        <div className="bg-[#bbd7af] flex justify-center items-center text-3xl text-black p-4 
        border-2 border-solid border-[#2938e9] rounded-sm bg-[repeating-conic-gradient(from_7.5deg_at_50%_0,transparent_0_15deg,gold_0_30deg),linear-gradient(177deg,#f11818,#f4070700)] mix-blend-difference bg-blend-luminosity col-start-[item1-start] col-end-[item1-end] row-start-[item1-start] row-end-[item1-end] text-shadow-[1px_1px_0px_rgb(0_0_0_/_50%)] inset-shadow-[0px_0px_0px_3px]">Grid项目3</div>
        <div className="bg-[#209fbb] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9]">Grid项目4</div>
        <div className="bg-[#00f0ff] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9]">Grid项目5</div>
        <div className="bg-[#e8f0fe] flex justify-center items-center text-3xl text-black p-4 border-2 border-solid border-[#2938e9]">Grid项目6</div>
      </div>
      <hr />
    </div>
  )
}
