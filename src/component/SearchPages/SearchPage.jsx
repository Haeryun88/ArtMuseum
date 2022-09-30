function SearchPage(Art) {
  return (
    <>
      <ul>
        {Art.Art.map((item, id) => (
          <a key={id} href={item.api_link}>
            <li>
              <img
                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
              ></img>
              {item.title}
            </li>
            {/* 이부분이반복~~ */}
          </a>
        ))}
      </ul>
      <button onClick={fetchArt()}>다시 불러오기</button>
      <button onClick={nextPage()}>다음</button>
    </>
  );
}
export default SearchPage;
