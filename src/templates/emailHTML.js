function generateImages(images) {
  const imageHTML = images.map((image) => `<img src="${image}">`).join("");

  const html = `
    <div class="container">
      <h2>Imagens:</h2>
      ${imageHTML}
    </div>
  `;

  return html;
}

function generateFiles(files) {
  const filesHTML = files
    .map((file) => `<a href="${file.url}">${file.name}</a>`)
    .join("");

  const html = `
    <div class="container">
      <h2>Arquivos:</h2>
      ${filesHTML}
    </div>
  `;
  return html;
}

export function buildEmail(news) {
  const UFRPE_LOGO = "https://ajuda.ufrpe.br/images/footer/ufrpe-uni.png";

  const html = `
  <head>
		
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600&family=Noto+Serif:wght@700&display=swap');
      
    .title {
    
      font-size: 24px;
      
      font-family: 'Noto Serif', serif;
    
    }
    
    p{
        font-family: 'Noto Sans', sans-serif;
        font-weight: 400;
    }
    img{
        max-height: 500px;
    }
    
    .container{
        display: flex;
        flex-direction: column;
        align-items:center;
        gap: 20px;
    }
    .container h2, a{
      align-self: start;
    }
  </style>
  </head>
  <body>
    <img src=${UFRPE_LOGO} alt="Descrição da Imagem" width="12.5rem" height="auto">
    <h1 class="title">${news.title}</h1>
    <a href=${news.url}>Link para notícia original</a>
    ${news.body}
    ${news.images != "" ? generateImages(news.images) : ""}
    ${news.files.length > 0 ? generateFiles(news.files) : ""}
    
  <body />
  `;
  return html;
}
