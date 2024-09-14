import React from "react";

function Article({ imgSrc, imgAlt }) {
  console.log(imgSrc, imgAlt);
  return (
    <section>
      <article>
        <time datetime="2020-11-12">11/12/20</time>
        <h2>On the Street in Brooklyn</h2>
        <img src={imgSrc} alt={imgAlt} />

        <p>
          <span>L</span>orem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptate tempore consequatur eius, voluptatem aut commodi excepturi
          rerum eveniet sed, nisi, debitis doloremque eligendi praesentium
          placeat veniam et ex fugit dolor. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Maiores eius ducimus quisquam? Sunt
          aliquid esse quam neque quas eos architecto minus libero, hic earum
          vero officia? Quisquam, voluptatem? Recusandae, autem! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Debitis eius, minima
          tempore nemo velit aliquid. Maiores, officiis dolores? Quidem rem quam
          consequatur eos qui sed dolorum molestias fuga exercitationem
          repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos in accusamus dolorum exercitationem facilis, impedit labore esse
          consectetur neque magni mollitia optio soluta blanditiis fugit fuga
          odio provident molestias inventore?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem quos quas dolore quisquam
          laboriosam laborum saepe iusto quibusdam. Harum reiciendis suscipit
          nesciunt eum neque omnis dolore quis fugiat assumenda commodi?
          Mollitia amet explicabo debitis natus nihil veniam dolores eveniet
          omnis aperiam molestias nemo numquam pariatur reprehenderit, esse
          ullam sapiente quibusdam iusto, quos, praesentium delectus vel
          recusandae ad consequatur similique. Debitis.
        </p>
        <a href="#">Continues...</a>
      </article>
    </section>
  );
}

export default Article;