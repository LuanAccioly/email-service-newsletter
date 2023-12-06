function generateImages(images) {
  const imageHTML = images.map((image) => `<img src="${image}">`).join("<br>");

  const html = `
      <h2>Imagens:</h2>
      <br>
      ${imageHTML}
  `;

  return html;
}

function generateFiles(files) {
  const filesHTML = files
    .map((file) => `<a href="${file.url}">${file.name}</a>`)
    .join("<br>");

  const html = `
      <h2>Arquivos:</h2>
      ${filesHTML}
  `;
  return html;
}

export function buildEmail(news) {
  const UFRPE_LOGO = "https://ajuda.ufrpe.br/images/footer/ufrpe-uni.png";

  const html = `
  <head>
		
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600&family=Noto+Serif:wght@700&display=swap');
      
    h1{
      font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 24px;
    }
    
    p{
      font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 17px;
      line-height: 26px;
    }
    img{
        max-height: 500px;
    }

    h2, a{
      align-self: start;
    }
    body{
      max-width: 685px;
      padding: 0px 20px;
      margin: 38px auto 0px auto;

    }
    footer{
      margin-top: 50px;
      text-align: center;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 12px;
      color: #666666;
    }
  </style>
  </head>
  <body>
    <img src=${UFRPE_LOGO} alt="Descrição da Imagem" width="200px" height="auto">
    <h1>${news.title}</h1>
    <a href=${news.url}>Link para notícia original</a>
    ${news.body}
    ${news.images != "" ? generateImages(news.images) : ""}
    ${news.files.length > 0 ? generateFiles(news.files) : ""}
    
  <body />
  <footer>
    <p>UFRPE Newsletter</p>
    <p>Desenvolvido por <a href="https://github.com/LuanAccioly">Luan Accioly</a></p>
    <p>Clique <a href="https://ufrpe-newsletter.vercel.app/unsubscribe">aqui</a> para se desinscrever.</p>
  </footer>
  `;
  return html;
}
