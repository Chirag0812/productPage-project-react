function Sorting({ setSort }) {
  return (
    <div
      onChange={(e) => setSort(e.target.value)}
      className="container mx-auto bg-secondColor my-5 text-firstColor p-5 rounded-lg flex items-center justify-end font-nunito">
      <select id="" className="bg-firstColor text-secondColor text-sm rounded-lg focus:ring-thirdColor focus:border-thirdColor block w-64 p-2.5">
        <option defaultValue="Sort By" disabled>Sort by</option>
        <option value="high">Highest price</option>
        <option value="low">Lowest price</option>
        <option value="lowRat">Lowest rating</option>
        <option value="highRat">Highest rating</option>
      </select>
    </div>
  )
}

export default Sorting;