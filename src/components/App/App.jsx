import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from '../Loader/Loader'
import css from "./App.module.css"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import { fetchData } from '../../fetchData';
import ImageModal from '../ImageModal/ImageModal'



function App() {
  const [searchVal, setSearchVal] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [modalPhoto, setModalPhoto] = useState(undefined)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [errorMes, setErrorMes] = useState("")
  const [curentPage, setCurentPage] = useState(1)
  const [maxPages, setMaxPages] = useState(0)

  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSearch = (newTopic) => {
    setSearchVal(newTopic);
    setCurentPage(1);
    setPhotos([])
  }

  const inreasePage = () => {
    setCurentPage(curentPage + 1);
  }

  const onImageClick = (picture) => {
    setModalPhoto(picture);
    openModal();
  }

  useEffect(() => {
    if (searchVal === '') {
      return;
    }
    setIsLoading(true)
    fetchData(searchVal, curentPage)
      .then(data => {
        setPhotos((prevPhotos) => { 
          return [...prevPhotos, ...data.results];
        });
      setMaxPages(data.total_pages);
      })
      .catch(error => {
        setErrorMes(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  },[searchVal, curentPage])
  
  return (
    <div className={css.block}>
      <SearchBar handler={handleSearch} />
      {photos.length>0 && errorMes=="" ? <ImageGallery pictureList={photos} onImageClick={onImageClick}/> : <ErrorMessage error={errorMes} />}
      <Loader loading={isLoading} />
      {modalPhoto != undefined && <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} modalPhoto={modalPhoto } />}
      {maxPages>0 && curentPage<maxPages && errorMes=="" && <LoadMoreBtn clickHandle={ inreasePage } /> }
    </div>
  )
}

export default App