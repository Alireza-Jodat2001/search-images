import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {

  function closeBackdrop() {
    document.querySelector("form").classList.remove("search_active")
    document.querySelector(".backdrop").classList.add("d-none")
  }

  onclick = (event) => {
    if (event.target != document.querySelector("header input")) {
      closeBackdrop()
    }
  }

  function loader() {
    document.querySelector("form > div").classList.add("loader")
    setTimeout(() => {
      document.querySelector("form > div").classList.remove("loader")
    }, 800)
  }

  function btnOnClick(event) {
    const value = document.querySelector("form > input").value
    if (value) {
      const article = document.querySelectorAll("article > h2 , .img_container > * ")
      for (let i = 0; i < article.length; i++) {
        article[i].remove()
      }
      const h2 = `<h2><a>Results for ${value}</a></h2>`
      document.querySelector("article").insertAdjacentHTML("afterbegin" , h2)
    }
    search(value)
    event.preventDefault()
    closeBackdrop()
  }

  function search(props) {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${props}&client_id=fdU_13QWMS9lIYHznBJC3RBHLSmVguJILXmtP5dbsDM`)
    .then(response => response.json())
    .then(data => {
      data.results.map((object) => {
      const article = document.querySelector("article .img_container")
      const img_element = `<div><img src=${object.urls.small} /></div>`
      article.insertAdjacentHTML("beforeend" , img_element)
      })
    })
    .catch(() => {})
    .finally(() => {})
  }search('random')
  
  return (
    <>
      <header className="position-relative">
        <div className="py-3">
          <h1 className="text-center text-light">Find Images</h1>
        </div>

        <div className="pb-3 d-flex justify-content-center">
          <form className="rounded-3 position-relative">
            <div className="position-absolute rounded-circle"></div>

            <button type='submit' className="border-0 bg-transparent h-100 text-light" onClick={(event) => {btnOnClick(event)}}>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>

            <input className="bg-transparent border-0 h-100 px-2 text-light" type="search" placeholder="Search images..." onInput={loader} onClick={() => {
              document.querySelector("form").classList.add("search_active")
              document.querySelector(".backdrop").classList.remove("d-none")
            }} />
          </form>
        </div>
      </header>

      <div className="backdrop fixed-top w-100 h-100 bg-dark opacity-50 d-none" onClick={() => closeBackdrop()}></div>
    </>
  )
}