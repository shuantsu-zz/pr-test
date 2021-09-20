fetch('https://api.github.com/repos/shuantsu/pr-test/issues').then(res=>res.json()).then(json=>load(json));

function load(json) {
  console.table(json);
  const comments = [];
  json.forEach((comment, idx) => {
    const user = comment['user'];
    comments.push(`
      <div class="comment">
        <h2><img src="${user['avatar_url']}" alt="${user['login']}"/> ${user['login']}</h2>
        <h4>"${comment['title']}"</h4>
        <em>Criado em: ${comment['created_at']} - Modificado em: ${comment['updated_at']}</em>
        <p>
          ${comment['body']}
        </p>
      </div>
    `);
  });
  document.getElementById('root').innerHTML = comments.join('');
}