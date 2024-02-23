import Searcher from './Searcher';
function Header({filterFolders,value}) {
const filterFoldersName = (name) => {
  filterFolders(name);
};

  return (
    <header className="bg-gray-50 h-[--height-header]">
      <div className='h-full'><Searcher value={value} filter={filterFoldersName}></Searcher></div>
    </header>
  );
}

export default Header;
