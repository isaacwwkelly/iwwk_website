export default function Landing() {
  return (
    <div>
      {/* <div className="bg-gradient-to-b from-neutral-900  to-[#7928ca] ">
        <div className=" text-slate-200">
          Landing Page
        </div>
      </div> */}
      <div className="h-screen flex flex-col justify-between bg-gray-800">
        <table>
          <tr>
            <td className="align-top">
              <h1 className="text-3xl sm:text-4xl sm:text-left font-bold">
                Landing Page
              </h1>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <div className="object-center">center of div</div>
            </td>
          </tr>
        </table>
        <div className="object-bottom">bottom of div</div>
      </div>
    </div>
  );
}
