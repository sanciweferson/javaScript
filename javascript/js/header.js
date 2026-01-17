function loadHeader() {
fetch("header.html")
  .then((res) => {
    if (!res.ok) throw new Error("header.html não encontrado")
    return res.text()
  })
  .then((html) => {
    const container = document.createElement("div")
    container.innerHTML = html
    document.body.prepend(container)
  })
  .catch((err) => console.error(err))
}

loadHeader()
